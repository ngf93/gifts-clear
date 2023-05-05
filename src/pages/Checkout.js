import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/utils/Breadcrumbs';
import ProductMini from '../components/ProductMini';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Checkout(props) {
    return (
        <main>
            <Container>
                <Breadcrumbs/>
                <section className='mb-8'>
                    <h1>Оформление заказа</h1>

                    {/* Если пользователь не зарегистрирован или не вошел в свой аккаунт */}
                    <Row xs={1} md={2} xl={3} className='g-4 g-xxl-5 mb-4'>
                        <Col>
                            <div className='box p-3 p-sm-4'>
                                <form>
                                    <h3 className='text-start fs-20 fw-6 mb-4'>Авторизуйтесь или зарегестрируйтесь</h3>
                                    <label>Введите e-mail</label>
                                    <input type='email' placeholder='Ваш e-mail' className='mt-2'/>
                                    <label className='mt-3'>Введите пароль</label>
                                    <input type='password' placeholder='Ваш пароль' className='mt-2'/>
                                    <button type='button' className='btn-1 w-100 mt-3'>Войти</button>
                                    <div className='fw-6 mt-3'>Ещё нет аккаунта? <a href='/' className='main-color text-decoration-underline'>Зарегестрироваться</a></div>
                                </form>
                            </div>
                        </Col>
                        <Col>
                            <div className='box p-3 p-sm-4'>
                                <form>
                                    <h3 className='text-start fs-20 fw-6 mb-4'>Быстрое оформление</h3>
                                    <label>Введите имя</label>
                                    <input type='text' placeholder='Ваше имя' className='mt-2'/>
                                    <label className='mt-3'>Введите номер телефона</label>
                                    <input type='tel' placeholder='+7 (965) 345-67-89' className='mt-2'/>
                                    <button type='button' className='btn-1 w-100 mt-3'>Заказать</button>
                                    <div className='fs-08 fw-3 text-center mt-3'>Нажимая на кнопку «Заказать», <br/>вы соглашаетесь с <a href='/' className='main-color text-decoration-underline'>политикой конфидециальности</a></div>
                                </form>
                            </div>
                        </Col>
                        <Col>
                            <div className='box p-3 p-sm-4'>
                                <h3 className='text-start fs-20 fw-6 mb-2'>Товары</h3>
                                <div className='fw-6 mb-4 mb-sm-5'><Link to='/' className='main-color text-decoration-underline'>Авторизируйтесь</Link> и получите 253 Балла</div>
                                <div className='mb-4 mb-sm-5'>
                                    <ProductMini />
                                    <ProductMini />
                                    <ProductMini />
                                    <ProductMini />
                                </div>
                                <Row xs={2} className='g-2 g-sm-3'>
                                    <Col className='gray fs-12 fw-6'>Сумма:</Col>
                                    <Col className='text-end fs-14'>5000&nbsp;₽</Col>
                                    <Col className='gray fs-12 fw-6'>Скидка:</Col>
                                    <Col className='text-end fs-12'>-2300&nbsp;₽</Col>
                                    <Col className='gray fs-15 fw-6'>Итого:</Col>
                                    <Col className='text-end fs-17 fw-6'>2700&nbsp;₽</Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    {/* Если человек зарегистрирован и вошел в свой аккаунт */}
                    <form className='mb-4'>
                        <Row xs={1} md={2}>
                            <Col>
                                <fieldset className='box p-3 p-sm-4'>
                                    <div>Имя <span className='main-color'>*</span></div>
                                    <input type='text' placeholder='Ваше имя' className='mt-2'/>

                                    <div className='mt-3'>Фамилия <span className='main-color'>*</span></div>
                                    <input type='text' placeholder='Ваше имя' className='mt-2'/>

                                    <div className='mt-3'>Введите номер телефона <span className='main-color'>*</span></div>
                                    <input type='tel' placeholder='+7 (965) 345-67-89' className='mt-2'/>

                                    <div className='mt-3'>Введите e-mail <span className='main-color'>*</span></div>
                                    <input type='email' placeholder='Ваш e-mail' className='mt-2'/>

                                    <div className='mt-3'>Город <span className='main-color'>*</span></div>
                                    <input type='text' placeholder='Город' className='mt-2'/>

                                    <div className='mt-3'>Адрес доставки <span className='main-color'>*</span></div>
                                    <input type='text' placeholder='Адрес доставки' className='mt-2'/>

                                    <div className='mt-3'>Комментарий</div>
                                    <textarea rows={4} placeholder='Комментарий' className='mt-2'></textarea>
                                </fieldset>
                            </Col>
                            <Col>
                                <fieldset className='box p-3 p-sm-4 mb-4 mt-4 mt-md-0'>
                                    <legend className='d-block mb-3 mb-sm-4'>Способ доставки <span className='main-color'>*</span></legend>
                                    <label className='mt-4'>
                                        <input type='radio' name='delivery'/>
                                        <span>Не выбрано</span>
                                    </label>
                                    <label className='mt-4'>
                                        <input type='radio' name='delivery'/>
                                        <span>Самовывоз <span className='fs-08 gray'>(адреса магазинова в разделе Контакты)</span></span>
                                    </label>
                                    <label className='mt-4'>
                                        <input type='radio' name='delivery'/>
                                        <span>Курьерская доставка</span>
                                    </label>
                                    <label className='mt-4'>
                                        <input type='radio' name='delivery'/>
                                        <span>CDEK (полная предоплата) <span className='fs-08 gray'>цена доставки рассчитывается по тарифам CDEK</span></span>
                                    </label>
                                    <label className='mt-4'>
                                        <input type='radio' name='delivery'/>
                                        <span>Почта России (полная предоплата) <span className='fs-08 gray'>цена доставки рассчитывается по тарифам почты России</span></span>
                                    </label>
                                </fieldset>
                                <fieldset className='box p-3 p-sm-4'>
                                    <legend className='d-block mb-3 mb-sm-4'>Способ оплаты <span className='main-color'>*</span></legend>
                                    <label className='mt-4'>
                                        <input type='radio' name='payment'/>
                                        <span>Не выбрано</span>
                                    </label>
                                    <label className='mt-4'>
                                        <input type='radio' name='payment'/>
                                        <span>Наличный расчёт <span className='fs-08 gray'>(Действует только на самовывоз)</span></span>
                                    </label>
                                    <label className='mt-4'>
                                        <input type='radio' name='payment'/>
                                        <span>Оплата картой</span>
                                    </label>
                                </fieldset>
                            </Col>
                        </Row>
                        <hr className='my-4'/>
                        <Row>
                            <Col xs={12} md={2}>
                                <h5 className='fw-7'>Итого:</h5>
                            </Col>
                            <Col xs={12} md={6} lg={5} xxl={4}>
                                <div className='d-flex align-items-center justify-content-between mb-3'>
                                    <span>Стоимость:</span>
                                    <span>3590&nbsp;₽</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mb-3'>
                                    <span>Скидка:</span>
                                    <span>-400&nbsp;₽</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mb-3'>
                                    <span>Баллы:</span>
                                    <span>-400&nbsp;Б</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mb-3'>
                                    <span>Доставка:</span>
                                    <span>400&nbsp;₽</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mb-3'>
                                    <span>Срок доставки:</span>
                                    <span>27.01.2021</span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8} lg={7} xxl={6}>
                                <div className='d-flex align-items-center justify-content-between mb-md-3'>
                                    <h5 className='fw-7'>Всего к оплате:</h5>
                                    <h5 className='fw-7'>356 360 ₽</h5>
                                </div>
                            </Col>
                        </Row>
                        <button type='submit' className='btn-1 mt-4 px-5'>Отправить заказ</button>
                        <label className='mt-3'>
                            <input type='checkbox' />
                            <span>Я согласен на <a href='/' className='br-1'>обработку персональных данных</a></span>
                        </label>
                    </form>

                    {/* Сообщение о завершении оформления */}
                    <Row className='justify-content-center'>
                        <Col xs={12} md={8} lg={6} xxl={5}>
                            <h3 className='text-center'>Мы приняли ваш заказ и в скором времени свяжемся с вами для его подтверждения</h3>
                            <h4 className='text-center mt-3 mt-sm-4'>Номер заказа: <span className='main-color'>123456</span></h4>
                            <p className='text-center mb-3 mb-sm-4'>Письмо с подтверждением заказа отправлено на адрес вашей электронной почты</p>
                            <p className='text-center mb-3 mb-sm-4'>Если у вас возникли вопросы вы можете позвонить нам по телефону: <a href='tel:+79172854275'>+7 (917) 285-42-75</a></p>
                            <Link to='/' className='btn-1 mx-auto'>Вернуться на главную</Link>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
}