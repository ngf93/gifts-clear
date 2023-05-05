import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'

import Breadcrumbs from '../components/utils/Breadcrumbs'
import Filter from '../components/Filter'
import MobileFilter from '../components/MobileFilter'
import ProductCard from '../components/ProductCard'
import PopularProductsSlider from '../components/PopularProductsSlider'
import NavPagination from '../components/NavPagination'
import SubCategoryCard from '../components/SubCategoryCard'

import { FiX, FiSliders } from "react-icons/fi"

import Select from 'react-select'
const optionsSort = [
    { value: '1', label: 'Популярные' },
    { value: '2', label: 'Сначала дешевле' },
    { value: '3', label: 'Сначала дороже' },
]
const optionsAmount = [
    { value: '1', label: 'Показывать по 12' },
    { value: '2', label: 'Показывать по 24' },
    { value: '3', label: 'Показывать по 36' },
]

export default function Category(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <main>
            <Container>
                <Breadcrumbs/>

                <section className='mb-8'>
                    <h1>Подарки на 23 февраля</h1>
                    <nav className='categories'>
                        <ul>
                            <li>
                                <SubCategoryCard title={'Аксессуары для мужчины и ...'} imgUrl={'imgs/product.jpg'}/>
                            </li>
                            <li>
                                <SubCategoryCard title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} imgUrl={'imgs/product.jpg'}/>
                            </li>
                            <li>
                                <SubCategoryCard title={'Аксессуары для мужчины и ...'} imgUrl={'imgs/product.jpg'}/>
                            </li>
                            <li>
                                <SubCategoryCard title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} imgUrl={'imgs/product.jpg'}/>
                            </li>
                            <li>
                                <SubCategoryCard title={'Аксессуары для мужчины и ...'} imgUrl={'imgs/product.jpg'}/>
                            </li>
                            <li>
                                <SubCategoryCard title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} imgUrl={'imgs/product.jpg'}/>
                            </li>
                            <li>
                                <SubCategoryCard title={'Аксессуары для мужчины и ...'} imgUrl={'imgs/product.jpg'}/>
                            </li>
                            <li>
                                <SubCategoryCard title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} imgUrl={'imgs/product.jpg'}/>
                            </li>
                            <li>
                                <SubCategoryCard title={'Аксессуары для мужчины и ...'} imgUrl={'imgs/product.jpg'}/>
                            </li>
                            <li>
                                <SubCategoryCard title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} imgUrl={'imgs/product.jpg'}/>
                            </li>
                        </ul>
                    </nav>

                    <Row>
                        <Col lg={3} className='d-none d-lg-block'>
                            <Filter />
                        </Col>
                        <Col xs={12} lg={9}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <button type='button' onClick={handleShow} className='d-flex d-lg-none align-items-center fs-12 fw-6'>
                                    <FiSliders className='fs-12'/>
                                    <span className='d-none d-sm-inline ms-2'>Фильтры</span>
                                </button>

                                <div className='d-none d-lg-block fs-12 fw-6'>Сортировка:</div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Select name="sort" placeholder='Выбрать' classNamePrefix="simple-select" className='simple-select-container' options={optionsSort} value={optionsSort[0]} isClearable={false} isSearchable={true} />
                                    <Select name="sort" placeholder='Выбрать' classNamePrefix="simple-select" className='simple-select-container ms-4' options={optionsAmount} value={optionsAmount[0]} isClearable={false} isSearchable={true} />
                                </div>
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
                <MobileFilter />
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}