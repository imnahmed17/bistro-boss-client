import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const [isAdmin] = useAdmin();

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email };
            fetch('https://bistro-boss-server-theta.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="card bg-base-500 shadow-lg">
            <figure><img src={image} alt="" className="w-full" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white rounded-xl">${price}</p>
            <div className="card-body flex flex-col items-center">
            <h2 className="card-title">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-end">
                    {
                        isAdmin ? <>
                            <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-200 border-0 border-b-4 border-[#BB8506] text-[#BB8506] mt-4" disabled>Add to Cart</button>
                        </> : <>
                            <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-200 border-0 border-b-4 border-[#BB8506] text-[#BB8506] mt-4">Add to Cart</button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodCard;