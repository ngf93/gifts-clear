import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FiClock } from "react-icons/fi"
import Breadcrumbs from '../components/utils/Breadcrumbs'

const Offer = () => {
    return (
        <main>
            <Container>
                <Breadcrumbs/>
                <section className='offer-full mb-8'>
                    <Row className='flex-sm-row-reverse gx-2 gx-md-4 gx-xxl-5'>
                        <Col xs={12} sm={5} md={4} xl={3}>
                            <img src='imgs/offers/offer1.jpg' alt='offer1' className='offer-midi mb-4 mb-sm-0'/>
                        </Col>
                        <Col xs={12} sm={7} md={8} xl={9}>
                            <h1>Название акции</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className='mt-4 d-flex align-items-center gray'>
                                <FiClock className='fs-12'/>
                                <span className='mx-2'>Акция закончится</span>
                                <time>31.12.2022</time>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default Offer;