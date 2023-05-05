import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IoBalloonOutline } from "react-icons/io5"
import {ReactComponent as Home} from '../styles/imgs/home.svg'
import {ReactComponent as Catalog} from '../styles/imgs/catalog.svg'
import {ReactComponent as Cart} from '../styles/imgs/cart.svg'
import {ReactComponent as Account} from '../styles/imgs/account.svg'
import { FiMapPin, FiSmartphone, FiMail, FiChevronRight } from "react-icons/fi"
import asm from '../styles/imgs/asm_white.png'
import Social from './utils/Social'

function Footer(props) {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <Row className='desktop g-4 g-xl-5'>
                    <Col md={3}>
                        <img src='imgs/logo-white.png' alt='logo' className='img-fluid mb-4'/>
                        <p>Beautiful day @ {currentYear} - Подарки на все случаи жизни</p>
                    </Col>
                    <Col md={3}>
                        <h6 className='text-uppercase fw-4 mb-4'>Навигация</h6>
                        <nav>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/catalog'>Каталог</Link>
                                </li>
                                <li>
                                    <Link to='/catalog'>Новинки</Link>
                                </li>
                                <li>
                                    <Link to='/'>Акции</Link>
                                </li>
                                <li>
                                    <Link to='/delivery'>Доставка и оплата</Link>
                                </li>
                                <li>
                                    <Link to='/returns'>Возврат товара</Link>
                                </li>
                                <li>
                                    <Link to='/all-news'>Новости</Link>
                                </li>
                                <li>
                                    <Link to='/contacts'>Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                    <Col md={3}>
                        <h6 className='text-uppercase fw-4 mb-4'>Мы в социальных сетях</h6>
                        <Social className='mb-4' />
                        <p className='fw-3 fs-09 mb-3'>Подпишитесь на новостную рассылку, чтобы быть в курсе новинок, свежих акций и самых выгодных предложений:</p>
                        <form className='mailing'>
                            <input type='email' placeholder='email'/>
                            <button type='submit' className='btn-1'>
                                <FiChevronRight/>
                            </button>
                        </form>
                    </Col>
                    <Col md={3}>
                        <h6 className='text-uppercase fw-4 mb-4'>Наши контакты</h6>
                        <ul className='list-unstyled'>
                            <li className='d-flex'>
                                <FiMapPin className='main-color fs-15'/>
                                <address className='flex-1 ms-2'>Татарстан, г.Казань, ул. Рашида Вагапова д.3</address>
                            </li>
                            <li className='d-flex'>
                                <FiSmartphone className='main-color fs-15'/>
                                <div className='flex-1 ms-2'><a href='tel:+79172854275'>+7 (917) 285-42-75</a></div>
                            </li>
                            <li className='d-flex'>
                                <FiMail className='main-color fs-15'/>
                                <div className='flex-1 ms-2'><a href='mailto:eshop-gift@mail.ru'>eshop-gift@mail.ru</a></div>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} className='d-flex align-items-center'>
                        <Link to='/' className='text-decoration-underline'>Политика конфиденциальности</Link>
                    </Col>
                    <Col md={6}>
                        <a href='https://asmpromo.ru/' className='dev'>
                            <span>Создание и продвижение сайтов</span>
                            <img src={asm} alt='Создание и продвижение сайтов'/>
                        </a>
                    </Col>
                </Row>
                <nav className='mobile'>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                <Home/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/catalog'>
                                <Catalog />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/balloons'>
                                <IoBalloonOutline />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'>
                                <Cart/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/account'>
                                <Account/>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </footer>
    );
}

export default Footer;