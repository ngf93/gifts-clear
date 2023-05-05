import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';
import { BiChevronRight } from "react-icons/bi";
import ProductCard from '../components/ProductCard';

export default function PopularProductsSlider(props) {
    return (
        <section className='d-none d-md-block mb-8'>
            <div className='d-flex justify-content-between align-items-center mb-4 mb-lg-5'>
                <h2 className='mb-0'>Хиты продаж</h2>
                <Link to="/" className='fw-6'>
                    <span>Смотреть все</span>
                    <BiChevronRight className='fs-12'/>
                </Link>
            </div>

            <div className='position-relative'>
                <Swiper
                    className='position-static py-3'
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 16,
                        },
                        1400: {
                            slidesPerView: 6,
                            spaceBetween: 16,
                        },
                    }}
                >
                    <SwiperSlide>
                        <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.6} reviewsCount={'110'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={2.8} reviewsCount={'110'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.6} reviewsCount={'110'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={2.8} reviewsCount={'110'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.6} reviewsCount={'110'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={2.8} reviewsCount={'110'}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}