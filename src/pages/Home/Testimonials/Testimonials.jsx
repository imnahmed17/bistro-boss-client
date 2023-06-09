import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-theta.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const myStyles = {
        itemShapes: RoundedStar,
        activeFillColor: '#cd9003',
        inactiveFillColor: '#a1a1a1'
    };

    return (
        <section className="mb-14">
            <SectionTitle
                subHeading="What Our Clients Say"
                heading={'Testimonials'}
            />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-14 md:mx-24 my-2">
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={review.rating}
                                itemStyles={myStyles}
                                readOnly
                            />
                            <FaQuoteLeft size={60} className='mt-6 mb-4' />
                            <p className='text-center'>{review.details}</p>
                            <h3 className="text-2xl text-yellow-600 uppercase">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;