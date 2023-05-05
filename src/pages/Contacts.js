import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/utils/Breadcrumbs';
import { IoCall, IoTime, IoLocationSharp, IoMail } from "react-icons/io5";
import Social from '../components/utils/Social';

export default function Contacts(props) {
    return (
        <main>
            <section className='mb-8'>
                <Container>
                    <Breadcrumbs/>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <h1>Контакты</h1>
                            <ul className='list-unstyled'>
                                <li className='d-flex mb-4'>
                                    <div className='icon fs-14'><IoCall/></div>
                                    <div className='flex-1 fs-11 ms-3'>
                                        <div className='fw-6 mb-1'>Телефон:</div>
                                        <div className='fw-5'><a href='tel:+79993456789'>+7 999 345-67-89</a></div>
                                    </div>
                                </li>
                                <li className='d-flex mb-4'>
                                    <div className='icon fs-14'><IoTime/></div>
                                    <div className='flex-1 fs-11 ms-3'>
                                        <div className='fw-6 mb-1'>Время работы:</div>
                                        <div className='fw-5'>Ежедневно с 10:00 до 20:00</div>
                                    </div>
                                </li>
                                <li className='d-flex mb-4'>
                                    <div className='icon fs-14'><IoLocationSharp/></div>
                                    <div className='flex-1 fs-11 ms-3'>
                                        <div className='fw-6 mb-1'>Адрес:</div>
                                        <div className='fw-5'>Республика Татарстан, Казань Рашида Вагапова 3</div>
                                    </div>
                                </li>
                                <li className='d-flex mb-4'>
                                    <div className='icon fs-14'><IoMail/></div>
                                    <div className='flex-1 fs-11 ms-3'>
                                        <div className='fw-6 mb-1'>Вопросы и предложения:</div>
                                        <div className='fw-5'><a href='mailto:eshop-gift@mail.ru'>eshop-gift@mail.ru</a></div>
                                    </div>
                                </li>
                            </ul>
                            <Social className='my-4 mt-md-5 mb-md-0'/>
                        </Col>
                        <Col xs={12} md={6} lg={8}>
                            <img src='imgs/shop-img.jpg' alt='магазин' className='img-fluid br'/>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section>
                <img src='imgs/map.jpg' alt='карта' className='w-100'/>
            </section>
        </main>
    );
}