import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputPassword from '../components/utils/InputPassword';

export default function Login(props) {
    return (
        <main>
            <Container>
                <section className='py-4 py-sm-5 mb-8'>
                    <h1 className='text-center'>Войти в личный кабинет</h1>
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <form>
                                <label className='fs-13 mb-2 mb-sm-3'>Электронная почта</label>
                                <input type='email' placeholder='Введите Вашу электронную почту' className='py-3 px-4 mb-3 mb-sm-4'/>
                                <label className='fs-13 mb-2 mb-sm-3'>Пароль</label>
                                <InputPassword placeholder='Введите пароль' inputClass='py-3 px-4' className='mb-4'/>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Link to='/account' className='btn-1 fs-11 px-5'>Войти</Link>
                                    <Link to='/reset-password' className='blue ms-3'>Забыли пароль?</Link>
                                </div>
                                <div className='text-center mt-3'>У вас нет аккаунта? <Link to='/registration' className='main-color text-decoration-underline'>Зарегистрироваться</Link></div>
                            </form>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
}