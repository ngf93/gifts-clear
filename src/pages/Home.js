import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode  } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import CategoryCard from '../components/CategoryCard'
import SubCategoryCard from '../components/SubCategoryCard'
import ArticlePreview from '../components/ArticlePreview'
import ProductCard from '../components/ProductCard'
import PopularProductsSlider from '../components/PopularProductsSlider'

import { BiChevronRight } from "react-icons/bi"

function Home() {
    return (
        <main>
            <Container>
                <section className='position-relative mb-8'>
                    <Swiper
                        className='main-slider'
                        modules={[Navigation, Pagination, FreeMode]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        freeMode={true}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            576: {
                                spaceBetween: 15,
                                slidesPerView: 'auto'
                            },
                            768: {
                                spaceBetween: 30,
                                slidesPerView: 'auto'
                            },
                            1400: {
                                spaceBetween: 50,
                                slidesPerView: 'auto'
                            },
                        }}
                        >
                        <SwiperSlide>
                            <figure>
                                <img src='imgs/main-slider/slide1.png' alt='Подарки к 8 марта'/>
                                <figcaption>
                                    <h2>Подарки<br/> к 8 марта</h2>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src='imgs/main-slider/slide2.png' alt='Подарки к Новому Году'/>
                                <figcaption>
                                    <h2>Подарки<br/> к Новому Году</h2>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src='imgs/main-slider/slide1.png' alt='Подарки к 8 марта'/>
                                <figcaption>
                                    <h2>Подарки к 8 марта</h2>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src='imgs/main-slider/slide2.png' alt='Подарки к Новому Году'/>
                                <figcaption>
                                    <h2>Подарки к Новому Году</h2>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className='mb-8'>
                    <div className='d-flex justify-content-between align-items-center mb-4 mb-lg-5'>
                        <h2 className='mb-0'>Популярные категории</h2>
                        <Link to="/" className='fw-6 d-flex align-items-center'>
                            <span>Смотреть&nbsp;все</span>
                            <BiChevronRight className='fs-12'/>
                        </Link>
                    </div>

                    <aside className='d-none d-lg-block horizontal mb-5'></aside>

                    <Row xs={2} md={3} lg={4} className='gy-4 gy-lg-5 gx-2 gx-sm-3'>
                        <Col>
                            <CategoryCard title={'Наборы'} imgUrl={'imgs/categories/cat1.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Воздушные шары'} imgUrl={'imgs/categories/cat2.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Подарки на 23 февраля'} imgUrl={'imgs/categories/cat3.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Подарки на 8 марта'} imgUrl={'imgs/categories/cat3.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Наборы'} imgUrl={'imgs/categories/cat1.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Воздушные шары'} imgUrl={'imgs/categories/cat2.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Подарки на 23 февраля'} imgUrl={'imgs/categories/cat3.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Подарки на 8 марта'} imgUrl={'imgs/categories/cat3.jpg'} />
                        </Col>
                    </Row>
                </section>
            </Container>

            <section className='offers mb-8'>
                <Container>
                    <div className='d-flex justify-content-between align-items-center mb-4 mb-lg-5'>
                        <h2 className='mb-0'>Лучшие предложения</h2>
                        <Link to="/offers" className='fw-6 d-flex align-items-center'>
                            <span>Смотреть&nbsp;все</span>
                            <BiChevronRight className='fs-12'/>
                        </Link>
                    </div>
                    <div className='position-relative'>
                        <Swiper
                            className='position-static py-xxl-5 mt-lg-5'
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={2}
                            navigation
                            breakpoints={{
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 16,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 25,
                                },
                                1660: {
                                    slidesPerView: 5,
                                    spaceBetween: 25,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <Link to='/offers/offer'>
                                    <img src='imgs/offers/offer1.jpg' alt='offer1' className='offer'/>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/offers/offer'>
                                    <img src='imgs/offers/offer2.jpg' alt='offer2' className='offer'/>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/offers/offer'>
                                    <img src='imgs/offers/offer3.jpg' alt='offer3' className='offer'/>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/offers/offer'>
                                    <img src='imgs/offers/offer4.jpg' alt='offer4' className='offer'/>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/offers/offer'>
                                    <img src='imgs/offers/offer1.jpg' alt='offer1' className='offer'/>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/offers/offer'>
                                    <img src='imgs/offers/offer2.jpg' alt='offer2' className='offer'/>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/offers/offer'>
                                    <img src='imgs/offers/offer3.jpg' alt='offer3' className='offer'/>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/offers/offer'>
                                    <img src='imgs/offers/offer4.jpg' alt='offer4' className='offer'/>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </section>

            <Container>
                <section className='mb-8'>
                    <div className='d-flex justify-content-between align-items-center mb-4 mb-lg-5'>
                        <h2 className='mb-0'>Наборы</h2>
                        <Link to="/" className='fw-6 d-flex align-items-center'>
                            <span>Смотреть&nbsp;все</span>
                            <BiChevronRight className='fs-12'/>
                        </Link>
                    </div>

                    <Row>
                        <Col lg={5} xxl={4}>
                            <aside className='vertical mb-4 mb-lg-0'></aside>
                        </Col>
                        <Col lg={7} xxl={8}>
                            <Row xs={2} md={3} xxl={4} className='gx-2 gx-sm-3 gy-4'>
                                <Col>
                                    <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col className='d-none d-xxl-block'>
                                    <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col className='d-none d-xxl-block'>
                                    <ProductCard className='mini' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                            </Row> 
                        </Col>
                    </Row>
                </section>

                <PopularProductsSlider />
            </Container>

            <section className='help mb-8'>
                <Container>
                    <Row>
                        <Col xs={8} lg={6}>
                            <h2>Не знаете что подарить? Мы поможем!</h2>
                            <p className='d-none d-md-block fs-12 fw-6'>Если вы до сих пор не знаете, что подарить, то Вам очень повезло. Мы всё уже нашли и придумали за Вас.</p>
                            <p className='d-none d-md-block fs-12 fw-6'>А Вам осталось только ответить на несколько вопросов.</p>
                            <button type='button' className='btn-1 mt-4'>Найти подарок</button>
                        </Col>
                    </Row>
                </Container>
                <img className='bg' src='imgs/bg/gift-box.png' alt='Подбор подарка'/>
            </section>

            <Container>
                <section className='mb-8'>
                    <div className='d-flex justify-content-between align-items-center mb-4 mb-lg-5'>
                        <h2 className='mb-0'>Новости</h2>
                        <Link to="/" className='fw-6 d-flex align-items-center'>
                            <span>Смотреть&nbsp;все</span>
                            <BiChevronRight className='fs-12'/>
                        </Link>
                    </div>
                    <div className='position-relative'>
                        <Swiper
                            className='swiper-articles position-static py-xxl-5 mt-lg-5'
                            modules={[Navigation, FreeMode]}
                            spaceBetween={16}
                            slidesPerView={'auto'}
                            freeMode={true}
                            navigation
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 16
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 16,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 25,
                                },
                                1660: {
                                    slidesPerView: 5,
                                    spaceBetween: 25,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <ArticlePreview link={'/'} title={'10 крутых подарков своими руками'} imgUrl={'imgs/categories/cat2.jpg'}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticlePreview link={'/'} title={'10 крутых подарков своими руками'} imgUrl={'imgs/categories/cat2.jpg'}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticlePreview link={'/'} title={'10 крутых подарков своими руками'} imgUrl={'imgs/categories/cat2.jpg'}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticlePreview link={'/'} title={'10 крутых подарков своими руками'} imgUrl={'imgs/categories/cat2.jpg'}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticlePreview link={'/'} title={'10 крутых подарков своими руками'} imgUrl={'imgs/categories/cat2.jpg'}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticlePreview link={'/'} title={'10 крутых подарков своими руками'} imgUrl={'imgs/categories/cat2.jpg'}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticlePreview link={'/'} title={'10 крутых подарков своими руками'} imgUrl={'imgs/categories/cat2.jpg'}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </Container>

            <section className='d-none d-md-block balloons'>
                <img src='imgs/bg/bg-balloons.png' alt='шары' className='bg'/>
                <Container>
                    <Row>
                        <Col xs={12} lg={7} xxl={6}>
                            <h2>Хотите сделать праздник<br/>по-настоящему ярким?</h2>
                            <p className='fs-12 fw-3'>Скорее заказывайте воздушные шары, они обязательно понравятся как взрослым, так и малышам. Доставим в любую точку Казани!</p>
                            <form className='mt-4 mb-5'>
                                <Row className='g-3'>
                                    <Col md={4}>
                                        <label className='mb-2'>Телефон</label>
                                        <input type='tel' placeholder='+7 (965) 345-67-89'/>
                                    </Col>
                                    <Col md={4}>
                                        <label className='mb-2'>Имя</label>
                                        <input type='text' placeholder='Ваше имя'/>
                                    </Col>
                                    <Col md={4}>
                                        <label className='mb-2'>Дата</label>
                                        <input type='date'/>
                                    </Col>
                                    <Col xs={12}>
                                        <label className='mb-2'>Комментарий к заказу</label>
                                        <textarea placeholder='Ваше имя'></textarea>
                                    </Col>
                                    <Col xs={12} className='d-flex align-items-center'>
                                        <button type='submit' className='btn-1'>Оформить заказ</button>
                                        <div className='flex-1 fs-08 fw-3 ms-3'>Нажимая на кнопку «Оформить заказ», вы соглашаетесь с <a href='/' className='main-color text-decoration-underline'>политикой конфидециальности</a></div>
                                    </Col>
                                </Row>
                            </form>

                            <div className='d-none d-xl-block position-relative'>
                                <Link to="/balloons" className='fw-6'>
                                    <span>Смотреть все</span>
                                    <BiChevronRight className='fs-12'/>
                                </Link>
                                <Swiper
                                    className='position-static py-3'
                                    modules={[Navigation]}
                                    spaceBetween={30}
                                    slidesPerView={3}
                                    navigation={true}
                                >
                                    <SwiperSlide>
                                        <SubCategoryCard title={'Шары ко дню рождения'} imgUrl={'imgs/product2.jpg'}/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <SubCategoryCard title={'Шары в виде животных'} imgUrl={'imgs/product2.jpg'}/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <SubCategoryCard title={'Шары ко дню рождения'} imgUrl={'imgs/product2.jpg'}/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <SubCategoryCard title={'Шары в виде животных'} imgUrl={'imgs/product2.jpg'}/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}

export default Home;