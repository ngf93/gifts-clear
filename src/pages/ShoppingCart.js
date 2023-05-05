import React from 'react';
import Breadcrumbs from '../components/utils/Breadcrumbs';
import PopularProductsSlider from '../components/PopularProductsSlider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import NavPagination from '../components/NavPagination';
import StarRating from '../components/utils/StarRating';
import { FiArrowRight } from "react-icons/fi";

export default function ShoppingCart(props) {
    return (
        <main>
            <Container>
                <Breadcrumbs/>
                <section className='mb-8'>
                    <h1>Корзина</h1>
                    <Row className='gx-4 gx-xxl-5'>
                        <Col lg={8}>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>

                            <NavPagination className='mt-4 mt-sm-5' />
                        </Col>
                        <Col lg={4} className='mt-5 mt-lg-0'>
                            <Row xs={1} md={2} lg={1} className='g-4'>
                                <Col>
                                    <div className='box p-3 p-sm-4'>
                                        <h3 className='text-start fs-20 fw-6 mb-2'>Товары</h3>
                                        <div className='fw-6 mb-4 mb-sm-5'><Link to='/' className='main-color text-decoration-underline'>Авторизируйтесь</Link> и получите 253 Балла за этот заказ</div>
                                        <Row xs={2} className='g-2 g-sm-3'>
                                            <Col className='gray fs-12 fw-6'>Сумма:</Col>
                                            <Col className='text-end fs-14'>5000&nbsp;₽</Col>
                                            <Col className='gray fs-12 fw-6'>Скидка:</Col>
                                            <Col className='text-end fs-12'>-2300&nbsp;₽</Col>
                                            <Col className='gray fs-12 fw-6'>Баллы:</Col>
                                            <Col className='text-end fs-12'>-500&nbsp;Б</Col>
                                            <Col className='gray fs-15 fw-6'>Итого:</Col>
                                            <Col className='text-end fs-17 fw-6'>2200&nbsp;₽</Col>
                                        </Row>
                                        <Link to='checkout' className='btn-1 w-100 mt-3 mt-sm-4'>Перейти к оформлению</Link>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='box p-3 p-sm-4'>
                                        <h3 className='text-start fs-20 fw-6'>Бонусы</h3>
                                        <div className='my-3'>Доступно для списания: <span className='main-color fs-13 fw-6'>550 Б</span></div>
                                        <div className='gray fs-09 mb-2'>Введите количество баллов, которые хотите использовать:</div>
                                        <div className='form-group'>
                                            <input type='number' placeholder='0'/>
                                            <button type='button' className='btn-1 fs-15 py-2 py-lg-3 px-4'><FiArrowRight/></button>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='box p-3 p-sm-4'>
                                        <h3 className='text-start fw-6'>Выгодное предложение</h3>
                                        <figure className='product-card-horizontal mt-3 mt-sm-4'>
                                            <img src='imgs/product.jpg' alt='Термостакан со вставкой "Эспрессо Патронум...'/>
                                            <figcaption>
                                                <h6 className='fs-10 fw-4 mb-2'>Термостакан со вставкой "Эспрессо Патронум...</h6>
                                                <div className='d-flex align-items-start fs-08'>
                                                    <StarRating rate={4.6} />
                                                    <span className='gray ms-2'>(12)</span>
                                                </div>
                                                <div className='d-flex align-items-center mt-2 mt-xl-3'>
                                                    <div className='price'>399 руб</div>
                                                    <del>800 руб.</del>
                                                </div>
                                            </figcaption>
                                        </figure>
                                        <button type='button' className='btn-2 w-100 mt-3 mt-sm-4'>Добавить в корзину</button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
                <PopularProductsSlider/>
            </Container>
        </main>
    );
}