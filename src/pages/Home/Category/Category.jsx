import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import './Category.css';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle 
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img src={slide1} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="absolute bottom-0 w-full pb-3">
                            <h3 className="text-2xl uppercase text-center  text-white cinzel-font">Salads</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={slide2} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="absolute bottom-0 w-full pb-3">
                            <h3 className="text-2xl uppercase text-center  text-white cinzel-font">Pizzas</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={slide3} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="absolute bottom-0 w-full pb-3">
                            <h3 className="text-2xl uppercase text-center  text-white cinzel-font">Soups</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={slide4} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="absolute bottom-0 w-full pb-3">
                            <h3 className="text-2xl uppercase text-center  text-white cinzel-font">Desserts</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={slide5} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="absolute bottom-0 w-full pb-3">
                            <h3 className="text-2xl uppercase text-center  text-white cinzel-font">Salads</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;