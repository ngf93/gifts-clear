import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import NavPagination from '../components/NavPagination'
import Breadcrumbs from '../components/utils/Breadcrumbs'

const AllOffers = () => {
    return (
        <main>
            <Container>
                <Breadcrumbs/>
                <section className='mb-8'>
                    <Row xs={1} sm={2} md={3} xl={4} className='g-4 g-xxl-5'>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer1.jpg' alt='offer1' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer2.jpg' alt='offer2' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Длинное название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer3.jpg' alt='offer3' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer4.jpg' alt='offer4' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Длинное название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer1.jpg' alt='offer1' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer2.jpg' alt='offer2' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Длинное название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer3.jpg' alt='offer3' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer4.jpg' alt='offer4' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Длинное название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer1.jpg' alt='offer1' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer2.jpg' alt='offer2' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Длинное название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer3.jpg' alt='offer3' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Название акции</h5>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='offer'>
                                <img src='imgs/offers/offer4.jpg' alt='offer4' className='offer-midi'/>
                                <h5 className='text-center mt-2'>Длинное название акции</h5>
                            </Link>
                        </Col>
                    </Row>
                    <NavPagination className='mt-5'/>
                </section>
            </Container>
        </main>
    );
};

export default AllOffers;