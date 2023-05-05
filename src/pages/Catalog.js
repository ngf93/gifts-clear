import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumbs from '../components/utils/Breadcrumbs'
import CategoryCard from '../components/CategoryCard'
import PopularProductsSlider from '../components/PopularProductsSlider'


export default function Catalog(props) {
    return (
        <main>
            <Container>
                <Breadcrumbs/>

                <section className='mb-8'>
                    <h1>Каталог</h1>

                    <aside className='d-none d-lg-block horizontal mb-5'></aside>

                    <Row xs={2} md={3} lg={4} className='gy-4 gy-lg-5 gx-2 gx-sm-3'>
                        <Col>
                            <CategoryCard title={'Наборы'} imgUrl={'imgs/categories/cat1.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Воздушные шары'} imgUrl={'imgs/categories/cat2.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Подарки на 23 февраля'} imgUrl={'imgs/categories/cat3.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Подарки на 8 марта'} imgUrl={'imgs/categories/cat3.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Наборы'} imgUrl={'imgs/categories/cat1.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Воздушные шары'} imgUrl={'imgs/categories/cat2.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Подарки на 23 февраля'} imgUrl={'imgs/categories/cat3.jpg'} />
                        </Col>
                        <Col>
                            <CategoryCard title={'Подарки на 8 марта'} imgUrl={'imgs/categories/cat3.jpg'} />
                        </Col>
                    </Row>
                </section>

                <PopularProductsSlider/>
            </Container>
        </main>
    );
}