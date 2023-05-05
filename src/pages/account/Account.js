import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useIsMobile from '../../hooks/isMobile';
import AccountRouter from '../../routes/AccountRouter';
import { Link } from 'react-router-dom';
import { FcLock } from "react-icons/fc";

export default function Account() {
    const {mobile} = useIsMobile('991px');

    return (
        <main>
            <Container className='account mb-8'>
                <section className='box not-authorized'>
                    <Row className='justify-content-center'>
                        <Col md={10} lg={8}>
                            <FcLock className='lock'/>
                            <h2 className='text-center'>Вы ещё не авторизовались</h2>
                            <p className='fs-13'>Войдите в свой аккаунт, чтобы получить доступ к информации о заказах, избранному, настройке уведомлений и многому другому.</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-4 mt-sm-5'>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <Link to='/login' className='btn-1 fs-11 w-100'>Войти</Link>
                            <Link to='/registration' className='btn-2 fs-11 w-100 mt-2 mt-sm-3 mt-md-4'>Зарегистрироваться</Link>
                        </Col>
                    </Row>
                </section>
                <AccountRouter isMobile={mobile}/>
            </Container>
        </main>
    )
}