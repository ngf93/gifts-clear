import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SubCategoryCard from '../components/SubCategoryCard'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { BiChevronRight } from "react-icons/bi"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Balloons = () => {
    return (
        <main className='pt-lg-0'>
            <section className='balloons bg-2 mb-8'>
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
                                <Link to="/" className='fw-6'>
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

            <section className='mb-8'>
                <Container>
                    <h2>Популярные шары</h2>
                    <Row xs={2} md={3} lg={4} className='gx-2 gx-sm-3 gx-md-4 gy-4'>
                        <Col>
                            <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                        </Col>
                        <Col>
                            <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                        </Col>
                        <Col>
                            <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                        </Col>
                        <Col>
                            <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                        </Col>
                        <Col>
                            <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                        </Col>
                        <Col>
                            <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                        </Col>
                        <Col>
                            <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                        </Col>
                        <Col>
                            <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                        </Col>
                    </Row>
                    <button type='button' className='btn-1 mx-auto mt-5'>Смотреть ещё</button>
                </Container>
            </section>
        </main>
    );
};

export default Balloons;