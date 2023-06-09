import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            { 
                title && <Cover img={img} title={title} />
            }
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className='flex justify-center'>
                <Link to={title ? `/order/${title}` : '/order/salad'}>
                    <button className="btn btn-outline border-0 border-b-4 my-8">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;