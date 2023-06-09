import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" />
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
            {/* offered menu items */}
            <MenuCategory items={offered} />
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg} />
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} />
            <MenuCategory items={salad} title={"salad"} img={saladImg} />
            <MenuCategory items={soup} title={"soup"} img={soupImg} />
        </div>
    );
};

export default Menu;