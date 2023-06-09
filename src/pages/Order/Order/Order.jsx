import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import './Order.css';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [currentPage, setCurrentPage] = useState(0);
    const [tabName, setTabName] = useState('');
    const [menu] = useMenu();
    const itemsPerPage = 9;

    const { data: menuItem = [] } = useQuery({
        queryKey: ['menu', tabName, currentPage, itemsPerPage],
        queryFn: async() => {
            const res = await fetch(`https://bistro-boss-server-theta.vercel.app/menu?category=${tabName}&page=${currentPage}&limit=${itemsPerPage}`);
            return res.json();
        }
    });
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    const dessertsTotalPages = Math.ceil(desserts.length / itemsPerPage);
    const soupTotalPages = Math.ceil(soup.length / itemsPerPage);
    const saladTotalPages = Math.ceil(salad.length / itemsPerPage);
    const pizzaTotalPages = Math.ceil(pizza.length / itemsPerPage);
    const drinksTotalPages = Math.ceil(drinks.length / itemsPerPage);
    
    const dessertsPageNumbers = [...Array(dessertsTotalPages).keys()];
    const soupPageNumbers = [...Array(soupTotalPages).keys()];
    const saladPageNumbers = [...Array(saladTotalPages).keys()];
    const pizzaPageNumbers = [...Array(pizzaTotalPages).keys()];
    const drinksPageNumbers = [...Array(drinksTotalPages).keys()];

    const selectPage = (index) => {
        setTabIndex(index);
        setTabName(categories[index]);
        setCurrentPage(0);
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => selectPage(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={menuItem}></OrderTab>
                    <div className="btn-group pagination pb-6">
                        {
                            saladPageNumbers.map(number => <button
                                key={number}
                                className={currentPage === number ? 'selected btn btn-sm border-0' : 'btn btn-sm border-0'}
                                onClick={() => setCurrentPage(number)}
                            >{number + 1}</button>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={menuItem}></OrderTab>
                    <div className="btn-group pagination pb-6">
                        {
                            pizzaPageNumbers.map(number => <button
                                key={number}
                                className={currentPage === number ? 'selected btn btn-sm border-0' : 'btn btn-sm border-0'}
                                onClick={() => setCurrentPage(number)}
                            >{number + 1}</button>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={menuItem}></OrderTab>
                    <div className="btn-group pagination pb-6">
                        {
                            soupPageNumbers.map(number => <button
                                key={number}
                                className={currentPage === number ? 'selected btn btn-sm border-0' : 'btn btn-sm border-0'}
                                onClick={() => setCurrentPage(number)}
                            >{number + 1}</button>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={menuItem}></OrderTab>
                    <div className="btn-group pagination pb-6">
                        {
                            dessertsPageNumbers.map(number => <button
                                key={number}
                                className={currentPage === number ? 'selected btn btn-sm border-0' : 'btn btn-sm border-0'}
                                onClick={() => setCurrentPage(number)}
                            >{number + 1}</button>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={menuItem}></OrderTab>
                    <div className="btn-group pagination pb-6">
                        {
                            drinksPageNumbers.map(number => <button
                                key={number}
                                className={currentPage === number ? 'selected btn btn-sm border-0' : 'btn btn-sm border-0'}
                                onClick={() => setCurrentPage(number)}
                            >{number + 1}</button>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;