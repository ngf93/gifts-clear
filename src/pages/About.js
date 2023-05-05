import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Breadcrumbs from '../components/utils/Breadcrumbs';

export default function About() {
    return (
        <main>
            <Container>
                <Breadcrumbs/>
                <section className='company-sec mb-8'>
                    <Row className='gy-4 gy-md-5'>
                        <Col xs={12} lg={6} xxl={5}>
                            <h1>О компании</h1>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a. Molestie aenean nisl sit id aliquam a, eu molestie eu. Ipsum adipiscing sagittis, gravida facilisi. Ut donec et est nec ullamcorper enim sed vitae massa. Nulla fames pretium ut nulla a. Sed eu in proin nullam gravida. Ac eget a aliquam porttitor libero tristique. Fames donec neque porttitor tellus. Velit morbi mauris sit massa purus velit commodo. Cras enim augue urna, in cursus nulla praesent.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a.</p>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} xxl={{ span: 6, offset: 1 }}>
                            <img src='imgs/shop-img.jpg' alt='магазин' className='img-fluid br'/>
                        </Col>
                        <Col xs={12} md={4} xl={3}>
                            <img src='imgs/img.jpg' alt='магазин' className='img-240 br-1 mb-4'/>
                            <h5>Lorem ipsum dolor</h5>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} xl={{ span: 3, offset: 1 }}>
                            <img src='imgs/img.jpg' alt='магазин' className='img-240 br-1 mb-4'/>
                            <h5>Lorem ipsum dolor</h5>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} xl={{ span: 3, offset: 1 }}>
                            <img src='imgs/img.jpg' alt='магазин' className='img-240 br-1 mb-4'/>
                            <h5>Lorem ipsum dolor</h5>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam.</p>
                            </div>
                        </Col>
                        <Col md={12}>
                            <img src='imgs/img.jpg' alt='магазин' className='img-fluid br-1 mb-4'/>
                        </Col>
                        <Col md={6} lg={3} xxl={2}>
                            <img src='imgs/img.jpg' alt='магазин' className='img-200 br-1 mb-4'/>
                            <h5>Lorem ipsum dolor</h5>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} xxl={{ span: 2, offset: 1 }}>
                            <img src='imgs/img.jpg' alt='магазин' className='img-200 br-1 mb-4'/>
                            <h5>Lorem ipsum dolor</h5>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} xxl={{ span: 2, offset: 1 }}>
                            <img src='imgs/img.jpg' alt='магазин' className='img-200 br-1 mb-4'/>
                            <h5>Lorem ipsum dolor</h5>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} xxl={{ span: 2, offset: 1 }}>
                            <img src='imgs/img.jpg' alt='магазин' className='img-200 br-1 mb-4'/>
                            <h5>Lorem ipsum dolor</h5>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam.</p>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} xxl={5}>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a. Molestie aenean nisl sit id aliquam a, eu molestie eu. Ipsum adipiscing sagittis, gravida facilisi. Ut donec et est nec ullamcorper enim sed vitae massa. Nulla fames pretium ut nulla a. Sed eu in proin nullam gravida. Ac eget a aliquam porttitor libero tristique. Fames donec neque porttitor tellus. Velit morbi mauris sit massa purus velit commodo. Cras enim augue urna, in cursus nulla praesent.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a.</p>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} xxl={{ span: 6, offset: 1 }}>
                            <img src='imgs/img.jpg' alt='магазин' className='img-fluid br-1'/>
                        </Col>
                        <Col xs={12} lg={6}>
                            <img src='imgs/img.jpg' alt='магазин' className='img-fluid br-1'/>
                        </Col>
                        <Col xs={12} lg={6} xxl={{ span: 5, offset: 1 }}>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a. Molestie aenean nisl sit id aliquam a, eu molestie eu. Ipsum adipiscing sagittis, gravida facilisi. Ut donec et est nec ullamcorper enim sed vitae massa. Nulla fames pretium ut nulla a. Sed eu in proin nullam gravida. Ac eget a aliquam porttitor libero tristique. Fames donec neque porttitor tellus. Velit morbi mauris sit massa purus velit commodo. Cras enim augue urna, in cursus nulla praesent.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className='mb-8'>
                    <h2>Ответы на вопросы</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>
            </Container>

            <section className='balloons'>
                <img src='imgs/bg/bg-balloons.png' alt='шары' className='bg-2'/>
                <img src='imgs/bg/bg-balloons.png' alt='шары' className='bg-3'/>
                <Container>
                    <Row>
                        <Col xs={12} lg={8} xxl={7}>
                            <h2>Остались вопросы?</h2>
                            <p className='fs-12 fw-3'>Оставьте номер телефона и мы Вам перезвоним</p>
                            <form className='mt-4'>
                                <Row className='g-3'>
                                    <Col md={4}>
                                        <label className='mb-2'>Телефон</label>
                                        <input type='tel' placeholder='+7 (965) 345-67-89'/>
                                    </Col>
                                    <Col md={4}>
                                        <label className='mb-2'>Имя</label>
                                        <input type='text' placeholder='Ваше имя'/>
                                    </Col>
                                    <Col md={4} className='d-flex flex-column justify-content-end'>
                                        <button type='submit' className='btn-1 w-100'>Отправить</button>
                                        
                                    </Col>
                                    <Col md={{ span: 4, offset: 8 }}>
                                        <div className='flex-1 text-center fs-08 fw-3'>Нажимая на кнопку «Оформить заказ», вы соглашаетесь с <a href='/' className='main-color text-decoration-underline'>политикой конфидециальности</a></div>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}
