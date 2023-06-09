import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import './NavBar.css';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };

    const navOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/order/salad" className={location.pathname.includes('/order/') ? 'active' : ''}>Order Food</NavLink></li>
        {
            isAdmin ? <> 
                <li><NavLink to="/dashboard/adminhome">Dashboard</NavLink></li> 
            </> : <>  
                <li><NavLink to="/dashboard/userhome">Dashboard</NavLink></li>
            </>
        }
        {
            !isAdmin && <li>
                <Link to="/dashboard/mycart">
                    <button className="btn btn-ghost gap-2">
                        <FaShoppingCart />
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </button>
                </Link>
            </li>
        }
        {
            user ? <>
                <li><Link onClick={handleLogOut}>LogOut</Link></li>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-50 max-w-screen-xl bg-black text-white lg:px-10 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-50 rounded-box w-52 font-medium">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className="cinzel-font">
                        <span className="text-2xl font-semibold">BISTRO BOSS</span> <br />
                        <span className="tracking-[.34em]">RESTAURANT</span>
                    </Link>
                </div>
                <div className={isAdmin ? 'navbar-end hidden lg:flex' : 'navbar-center hidden lg:flex'}>
                    <ul className="menu menu-horizontal px-1 uppercase text-sm font-semibold">
                        {navOptions}
                    </ul>
                    {
                        user && <label className="avatar">
                            <div className="w-11 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;