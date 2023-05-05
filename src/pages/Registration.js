import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputPassword from '../components/utils/InputPassword';

export default function Registration(props) {
    return (
        <main>
            <Container>
                <section className='py-4 py-sm-5 mb-8'>
                    <h1 className='text-center'>Регистрация</h1>
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <form>
                                <div className='fs-13 mb-2 mb-sm-3'>Имя <span className='main-color'>*</span></div>
                                <input type='text' placeholder='Введите Ваше имя' className='py-3 px-4 mb-3 mb-sm-4'/>
                                <div className='fs-13 mb-2 mb-sm-3'>Номер телефона <span className='main-color'>*</span></div>
                                <input type='tel' placeholder='+7 999 345-67-89' className='py-3 px-4 mb-3 mb-sm-4'/>
                                <label className='fs-13 mb-2 mb-sm-3'>Электронная почта <span className='main-color'>*</span></label>
                                <div className='form-group mb-3 mb-sm-4'>
                                    <input type='email' placeholder='Введите Вашу электронную почту' className='py-3 px-4'/>
                                    <button type="button" className='btn-1 px-2 px-sm-4'>Выслать код</button>
                                </div>
                                <label className='fs-11 fw-3 mb-2 mb-sm-3'>Код с почты <span className='main-color'>*</span></label>
                                <input type='number' placeholder='Код' className='py-3 px-4 mb-3 mb-sm-4'/>
                                <label className='fs-13 mb-2 mb-sm-3'>Пароль <span className='main-color'>*</span></label>
                                <InputPassword placeholder='Введите пароль' inputClass='py-3 px-4' className='mb-3 mb-sm-4'/>
                                <label className='fs-13 mb-2 mb-sm-3'>Повторите пароль <span className='main-color'>*</span></label>
                                <InputPassword placeholder='Повторите пароль' inputClass='py-3 px-4' className='mb-4'/>
                                <label className='gray w-fit justify-content-center mx-auto mb-4'>
                                    <input type='checkbox'/>
                                    <span>Я согласен на <a href='/' className='text-decoration-underline'>обработку персональных данных</a></span>
                                </label>
                                <button type='submit' className='btn-1 fs-11 px-5 mx-auto'>Зарегистрироваться</button>
                                <div className='text-center mt-3'>У вас уже есть аккаунт? <Link to='/login' className='main-color text-decoration-underline'>Войти</Link></div>
                            </form>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
}