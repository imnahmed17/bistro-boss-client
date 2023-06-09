import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div className='max-w-screen-xl mx-auto'>
            { noHeaderFooter || <NavBar /> }
            <Outlet />
            { noHeaderFooter || <Footer /> }
            <ScrollRestoration />
        </div>
    );
};

export default Main;