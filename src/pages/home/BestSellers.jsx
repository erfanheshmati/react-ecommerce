import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const BestSellers = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("products.json").then(res => res.json()).then(data => setProducts(data))
    }, [])

    const bestSellers = products.filter((item) => item.status === "Best Seller")


    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
            <div className="text-center">
                <h2 className="title">Best Sellers</h2>
                <p className="text-Black/75 capitalize md:w-2/3 mx-auto mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per
                </p>
            </div>

            {/* best seller products card */}
            <div className='mb-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={false}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={false}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        bestSellers.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Link to={`/shop/${product.id}`}>
                                    <img src={product.image} alt="" className="mx-auto w-full hover:shadow-2xl transition-all duration-300" />
                                </Link>
                                <div className="mt-4 px-4">
                                    <h4 className="text-base font-semibold mb-2">{product.title}</h4>
                                    <div className="flex justify-between">
                                        <p className="text-black/50">{product.category}</p>
                                        <p className="font-semibold">
                                            {
                                                product.status === "Best Seller" ? <span><del className="pr-2 text-gray-500">${product.oldPrice}</del><b>${product.newPrice}</b></span> : <span>${product.price}</span>
                                            }
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default BestSellers;