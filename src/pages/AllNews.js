import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Breadcrumbs from '../components/utils/Breadcrumbs'
import ArticleMedium from '../components/ArticleMedium'
import NavPagination from '../components/NavPagination'
import ArticlePreview2 from '../components/ArticlePreview2'

const AllNews = () => {
    return (
        <main>
            <Container>
                <Breadcrumbs/>

                <section className='mb-8'>
                    <h1>Новости</h1>
                    <Row className='flex-lg-row-reverse gx-4 gx-xl-5'>
                        <Col lg={4}>
                            <div className='box p-3 p-sm-4 p-xxl-5 mb-4 mb-xl-5'>
                                <h2 className='text-start'>Тэги</h2>
                                <div className='tags'>
                                    <button type='button' className='btn-2'>Все</button>
                                    <button type='button' className='btn-2'>#НовыйГод</button>
                                    <button type='button' className='btn-2'>#8марта</button>
                                    <button type='button' className='btn-2'>#23февраля</button>
                                    <button type='button' className='btn-2'>#14февраля</button>
                                </div>
                            </div>
                            <div className='d-none d-lg-block box p-4 p-xxl-5'>
                                <h2 className='text-start'>Популярное </h2>
                                <div>
                                    <ArticlePreview2 link={'/'} title={'10 крутых подарков своими руками'} imgUrl={'imgs/categories/cat2.jpg'}/>
                                    <ArticlePreview2 link={'/'} title={'10 крутых подарков своими руками'} imgUrl={'imgs/categories/cat2.jpg'}/>
                                    <ArticlePreview2 link={'/'} title={'10 крутых подарков своими руками'} imgUrl={'imgs/categories/cat2.jpg'}/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className='box p-3 p-sm-4 p-xxl-5'>
                                <h2 className='text-start'>Последние новости</h2>
                                <div className='mb-5'>
                                    <ArticleMedium />
                                    <ArticleMedium />
                                    <ArticleMedium />
                                    <ArticleMedium />
                                    <ArticleMedium />
                                </div>
                                <NavPagination />
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default AllNews;