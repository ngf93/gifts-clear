import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'

import Breadcrumbs from '../components/utils/Breadcrumbs'
import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'
import PopularProductsSlider from '../components/PopularProductsSlider'
import NavPagination from '../components/NavPagination'

import { FiX, FiTrash2, FiHeart } from "react-icons/fi"

import Select from 'react-select'
const optionsSort = [
    { value: '1', label: 'Популярные' },
    { value: '2', label: 'Сначала дешевле' },
    { value: '3', label: 'Сначала дороже' },
]

export default function Favorites(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <main>
            <Container>
                <Breadcrumbs/>

                <section className='mb-8'>
                    <h1>Избранное</h1>

                    <div className='box p-4 p-sm-5 mb-5'>
                        <h3>Здесь пока пусто</h3>
                        <div className='text-center my-3 my-sm-4'>Чтобы добавлять товары, нажимайте на <FiHeart/></div>
                        <button type='button' className='btn-1 mx-auto'>Перейти в каталог</button>
                    </div>

                    <Row>
                        <Col lg={3} className='d-none d-lg-block'>
                            <Filter />
                        </Col>
                        <Col xs={12} lg={9}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <button type='button' onClick={handleShow} className='d-lg-none fs-12 fw-6'>Фильтры</button>
                                <Select name="sort" placeholder='Выбрать' classNamePrefix="simple-select" className='simple-select-container d-none d-sm-block fs-11' options={optionsSort} value={optionsSort[0]} isClearable={false} isSearchable={true} />
                                <button type='button' className='gray fs-11'>
                                    <span>Удалить всё</span>
                                    <FiTrash2 className='fs-15 ms-2'/>
                                </button>
                            </div>
                            <hr/>
                            <Row xs={2} md={3} className='gx-2 gx-sm-3 gx-md-4 gy-4'>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                            </Row>

                            <NavPagination className='pt-5'/>
                        </Col>
                    </Row>
                </section>

                <PopularProductsSlider/>
            </Container>
        </main>
        
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Body>
                <button type='button' className='close' onClick={handleClose}>
                    <FiX/>
                </button>
                <Filter />
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}