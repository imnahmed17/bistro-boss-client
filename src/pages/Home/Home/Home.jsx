import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';
import Contact from '../Contact/Contact';
import ChefsFavorite from '../ChefsFavorite/ChefsFavorite';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <About />
            <PopularMenu />
            <Contact />
            <ChefsFavorite />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;