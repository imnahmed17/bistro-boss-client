import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefsFavorite = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <SectionTitle
                subHeading="Should Try" 
                heading="Chef Recommends" 
            />
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    offered.slice(0, 3).map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default ChefsFavorite;