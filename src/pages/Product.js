import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import 'swiper/css/pagination'
import { Thumbs, FreeMode, Pagination } from 'swiper'

import Breadcrumbs from '../components/utils/Breadcrumbs'
import PopularProductsSlider from '../components/PopularProductsSlider'
import StarRating from '../components/utils/StarRating'
import BtnFav from '../components/utils/BtnFav'
import BtnShare from '../components/utils/BtnShare'
import Review from '../components/Review'
import NavPagination from '../components/NavPagination'
import InputRating from '../components/utils/InputRating'

import { FiArrowLeft, FiArrowRight, FiX, FiCheckCircle } from "react-icons/fi"

export default function Product(props) {
    const {mobile} = useIsMobile('767px')

    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [tab, setTab] = useState('1')

    const [showReviews, setShowReviews] = useState(false)
    const handleCloseReviews = () => setShowReviews(false)
    const handleShowReviews = () => setShowReviews(true)

    const [showAlert, setShowAlert] = useState(false)
    const handleShowAlert = () => {
        setShowAlert(true)
        setTimeout(()=>setShowAlert(false), 2000)
    }

    return (
        <main className='product-mobile'>
            {
                (mobile) &&
                <>
                    <div className='product-full-top'>
                        <Swiper
                            loop={false}
                            spaceBetween={20}
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <img src="imgs/product.jpg" alt="название товара"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="imgs/product.jpg" alt="название товара"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="imgs/product.jpg" alt="название товара"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="imgs/product.jpg" alt="название товара"/>
                            </SwiperSlide>
                        </Swiper>
                        <Link to='/catalog/category/list' className='back'><FiArrowLeft/></Link>
                        <div className='btns'>
                            <BtnShare className='me-4' />
                            <BtnFav check={false}/>
                        </div>
                    </div>
                </>
            }
            <Container>
                {
                    (!mobile) &&
                    <Breadcrumbs/>
                }

                <section className='product-full mb-8'>
                    {
                        (mobile) 
                        ? <div className='pt-4'>
                            <h1>Термостакан со вставкой «Эспрессо Патронум» lorem ipsum dolor met</h1>
                            <div className='d-flex align-items-center'>
                                <StarRating rate={'4.6'}/>
                                <span className='gray ms-2'>(110 отзывов)</span>
                                <button type='button' onClick={handleShowReviews} className='ms-4 fs-15 gray'>
                                    <FiArrowRight/>
                                </button>
                                <Offcanvas show={showReviews} placement={'end'} onHide={handleCloseReviews}>
                                    <Offcanvas.Body>
                                        <button type='button' className='close' onClick={handleCloseReviews}>
                                            <FiX/>
                                        </button>
                                        {/* Если пользователь НЕ зареган, то отображается кнопка */}
                                        <button type='button' className='btn-1 w-100 mb-4'>
                                            <span>Войти и оставить отзыв</span>
                                        </button>

                                        {/* Если пользователь ЗАРЕГАН, то форма */}
                                        <h4 className='text-start'>Оставьте отзыв</h4>
                                        <form className='mb-4'>
                                            <InputRating className='p-2 mb-3'/>
                                            <textarea placeholder='Ваш отзыв' rows={3} className='br-sm'></textarea>
                                            <button type='button' className='btn-1 mt-3'>Оставить отзыв</button>
                                        </form>

                                        {/* Если нет отзывов */}
                                        <p>У этого товара ещё нет отзывов. <br/>Оставьте его первым.</p>

                                        {/* Если есть отзывы */}
                                        <Review rate={4} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                        <Review rate={5} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                        <Review rate={3} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                        <NavPagination className='mt-4'/>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                            <hr className='my-4'/>
                            <div className='box'>
                                <div className='fs-11'>Доставка в <strong className='main-color'>Казань</strong></div>
                                <div className='gray mt-2'>Срок доставки:</div>
                                <div>22-24 ноября</div>
                            </div>

                            <h4 className='mt-4 text-start'>Характеристики</h4>
                            <div className='specification'>
                                <div className='line'>
                                    <div>Страна</div>
                                    <div>Россия</div>
                                </div>
                                <div className='line'>
                                    <div>Размер</div>
                                    <div>18 см х 7 см х 7см</div>
                                </div>
                                <div className='line'>
                                    <div>Вес</div>
                                    <div>165 г</div>
                                </div>
                                <div className='line'>
                                    <div>Состав</div>
                                    <div>Пластик</div>
                                </div>
                                <div className='line'>
                                    <div>Объём</div>
                                    <div>360 мл</div>
                                </div>
                                <div className='line'>
                                    <div>Страна</div>
                                    <div>Россия</div>
                                </div>
                                <div className='line'>
                                    <div>Размер</div>
                                    <div>18 см х 7 см х 7см</div>
                                </div>
                                <div className='line'>
                                    <div>Вес</div>
                                    <div>165 г</div>
                                </div>
                                <div className='line'>
                                    <div>Состав</div>
                                    <div>Пластик</div>
                                </div>
                                <div className='line'>
                                    <div>Объём</div>
                                    <div>360 мл</div>
                                </div>
                                <div className='line'>
                                    <div>Страна</div>
                                    <div>Россия</div>
                                </div>
                                <div className='line'>
                                    <div>Размер</div>
                                    <div>18 см х 7 см х 7см</div>
                                </div>
                                <div className='line'>
                                    <div>Вес</div>
                                    <div>165 г</div>
                                </div>
                                <div className='line'>
                                    <div>Состав</div>
                                    <div>Пластик</div>
                                </div>
                                <div className='line'>
                                    <div>Объём</div>
                                    <div>360 мл</div>
                                </div>
                            </div>

                            <hr className='my-4'/>

                            <h4 className='mt-4 text-start'>Описание товара</h4>
                            <h6 className='mb-2'>Lorem ipsum dolor</h6>
                            <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a. Molestie aenean nisl sit id aliquam a, eu molestie eu. Ipsum adipiscing sagittis, gravida facilisi. Ut donec et est nec ullamcorper enim sed vitae massa. Nulla fames pretium ut nulla a. Sed eu in proin nullam gravida. Ac eget a aliquam porttitor libero tristique. Fames donec neque porttitor tellus. Velit morbi mauris sit massa purus velit commodo. Cras enim augue urna, in cursus nulla praesent.</p>
                            <h6 className='mb-2'>Lorem ipsum dolor</h6>
                            <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a. Molestie aenean nisl sit id aliquam a, eu molestie eu. Ipsum adipiscing sagittis, gravida facilisi. Ut donec et est nec ullamcorper enim sed vitae massa. Nulla fames pretium ut nulla a. Sed eu in proin nullam gravida. Ac eget a aliquam porttitor libero tristique. Fames donec neque porttitor tellus. Velit morbi mauris sit massa purus velit commodo. Cras enim augue urna, in cursus nulla praesent.</p>
                        </div>
                        : <>
                            <Row className='gx-2 gx-xl-3 gx-xxl-4'>
                                <Col xs={2} lg={1}>
                                    <Swiper
                                        direction="vertical"
                                        loop={true}
                                        spaceBetween={20}
                                        slidesPerView={'auto'}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Thumbs]}
                                        className="thumbslides"
                                        onSwiper={setThumbsSwiper}
                                    >
                                        <SwiperSlide>
                                            <img src="imgs/product.jpg" alt="название товара"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="imgs/product.jpg" alt="название товара"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="imgs/product.jpg" alt="название товара"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="imgs/product.jpg" alt="название товара"/>
                                        </SwiperSlide>
                                    </Swiper>
                                </Col>
                                <Col xs={12} sm={10} lg={5} className='images'>
                                    <Swiper
                                        loop={true}
                                        spaceBetween={20}
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        modules={[FreeMode, Thumbs, Pagination]}
                                        pagination={{ clickable: true }}
                                        className="main"
                                        breakpoints={{
                                            768: {
                                                pagination: false
                                            },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <img src="imgs/product.jpg" alt="название товара"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="imgs/product.jpg" alt="название товара"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="imgs/product.jpg" alt="название товара"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="imgs/product.jpg" alt="название товара"/>
                                        </SwiperSlide>
                                    </Swiper>
                                </Col>
                                <Col xs={12} lg={6} className='mt-4 mt-sm-5 mt-lg-0 ps-lg-4'>
                                    <h1>Термостакан со вставкой «Эспрессо Патронум» lorem ipsum dolor met</h1>

                                    <div className='py-2 d-flex align-items-center justify-content-between'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <StarRating rate={'4.6'}/>
                                            <span className='gray ms-2'>(110 отзывов)</span>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <BtnShare className='me-2' />
                                            <BtnFav check={false}/>
                                        </div>
                                    </div>
                                    <hr className='mb-4'/>
                                    <Row className='gx-3 gx-xl-4 justify-content-between'>
                                        <Col sm={7}>
                                            <div className='box mb-4 mb-sm-0'>
                                                <div className='price mb-3'>
                                                    <div className='fs-13 fw-6'>399 руб</div>
                                                    <del className='gray ms-3'>800 руб. </del>
                                                </div>
                                                <h6 className='mb-2'>Характеристики:</h6>
                                                <div className='specification'>
                                                    <div className='line'>
                                                        <div>Страна</div>
                                                        <div>Россия</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Размер</div>
                                                        <div>18 см х 7 см х 7см</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Вес</div>
                                                        <div>165 г</div>
                                                    </div>
                                                </div>
                                                <button type='button' className='main-color fs-08 text-decoration-underline w-100 text-start mt-2'>Все характеристики</button>
                                                <button type='button' onClick={() => handleShowAlert()} className='btn-1 w-100 mt-4'>В корзину</button>
                                            </div>
                                        </Col>
                                        <Col sm={5} xxl={4}>
                                            <div className='fw-6 mb-2'>Доставка:</div>
                                            <p className='fs-09'>По Казани осуществляется по договорённости с курьером. Минимальная сумма заказа <span className='black fw-6'>400 ₽</span></p>
                                            <p className='fs-09 mt-2'>По России через компанию <span className='black fw-6'>CDEK</span> или <span className='black fw-6'>почтой России</span></p>
                                            <hr className='my-3'/>
                                            <div className='fw-6 mb-2'>Самовывоз:</div>
                                            <p className='fs-09'>Магазин по адресу: Татарстан, Казань, Рашида Вагапова 3</p>
                                            <hr className='my-3'/>
                                            <div className='fw-6 mb-2'>Оплата:</div>
                                            <p className='fs-09'>Наличными или онлайн банковской картой</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='mt-5'>
                                <Col xs={12} xl={10}>
                                    <div className='box'>
                                        <div className='tabs'>
                                            <button type='button' className={(tab==='1')?'active':''} onClick={()=>setTab('1')}>Описание товара</button>
                                            <button type='button' className={(tab==='2')?'active':''} onClick={()=>setTab('2')}>Характеристики</button>
                                            <button type='button' className={(tab==='3')?'active':''} onClick={()=>setTab('3')}>Отзывы <span className='gray fs-08 fw-4'>(110)</span></button>
                                        </div>
                                        {
                                            (tab==='1')&&
                                            <div className='tabs-content'>
                                                <h6>Lorem ipsum dolor</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a. Molestie aenean nisl sit id aliquam a, eu molestie eu. Ipsum adipiscing sagittis, gravida facilisi. Ut donec et est nec ullamcorper enim sed vitae massa. Nulla fames pretium ut nulla a. Sed eu in proin nullam gravida. Ac eget a aliquam porttitor libero tristique. Fames donec neque porttitor tellus. Velit morbi mauris sit massa purus velit commodo. Cras enim augue urna, in cursus nulla praesent.</p>
                                                <h6>Lorem ipsum dolor</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a. Molestie aenean nisl sit id aliquam a, eu molestie eu. Ipsum adipiscing sagittis, gravida facilisi. Ut donec et est nec ullamcorper enim sed vitae massa. Nulla fames pretium ut nulla a. Sed eu in proin nullam gravida. Ac eget a aliquam porttitor libero tristique. Fames donec neque porttitor tellus. Velit morbi mauris sit massa purus velit commodo. Cras enim augue urna, in cursus nulla praesent.</p>
                                            </div>
                                        }
                                        {
                                            (tab==='2')&&
                                            <div className='tabs-content'>
                                                <h6>Характеристики</h6>
                                                <div className='specification'>
                                                    <div className='line'>
                                                        <div>Страна</div>
                                                        <div>Россия</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Размер</div>
                                                        <div>18 см х 7 см х 7см</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Вес</div>
                                                        <div>165 г</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Состав</div>
                                                        <div>Пластик</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Объём</div>
                                                        <div>360 мл</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Страна</div>
                                                        <div>Россия</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Размер</div>
                                                        <div>18 см х 7 см х 7см</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Вес</div>
                                                        <div>165 г</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Состав</div>
                                                        <div>Пластик</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Объём</div>
                                                        <div>360 мл</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Страна</div>
                                                        <div>Россия</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Размер</div>
                                                        <div>18 см х 7 см х 7см</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Вес</div>
                                                        <div>165 г</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Состав</div>
                                                        <div>Пластик</div>
                                                    </div>
                                                    <div className='line'>
                                                        <div>Объём</div>
                                                        <div>360 мл</div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {
                                            (tab==='3')&&
                                            <div className='tabs-content'>
                                                <Row className='flex-lg-row-reverse'>
                                                    <Col xs={12} lg={4}>
                                                        {/* Если пользователь НЕ зареган, то отображается кнопка */}
                                                        <button type='button' className='btn-1 w-100 mb-4 mb-lg-0'>
                                                            <span>Войти и оставить отзыв</span>
                                                        </button>
                                                    </Col>
                                                    <Col xs={12} lg={8}>
                                                        {/* Если нет отзывов */}
                                                        <p>У этого товара ещё нет отзывов. <br/>Оставьте его первым.</p>

                                                        {/* Если есть отзывы */}
                                                        <Review rate={4} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                                        <Review rate={5} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                                        <Review rate={3} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                                        <Review rate={4} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                                        <Review rate={5} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                                        <Review rate={3} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                                        <Review rate={4} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                                        <Review rate={5} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                                        <Review rate={3} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec id eleifend non tincidunt lectus pellentesque ac. Auctor enim nunc, diam cras nec eleifend felis. Augue at adipiscing et molestie neque non. Pulvinar est ac malesuada amet.'} name={'Анастасия Гоначарова'} date={'14.07.2022'}/>
                                                        <NavPagination className='mt-4'/>

                                                        {/* Если пользователь ЗАРЕГАН, то форма */}
                                                        <h2 className='fs-20 mt-5'>Оставьте отзыв</h2>
                                                        <form>
                                                            <label className='d-block mb-2'>Общая оценка</label>
                                                            <InputRating className='mb-3'/>
                                                            <label className='d-block mb-2'>Ваш отзыв</label>
                                                            <textarea placeholder='Ваш отзыв' rows={5} className='br-sm'></textarea>
                                                            <button type='button' className='btn-1 mt-4'>Оставить отзыв</button>
                                                        </form>
                                                    </Col>
                                                </Row>
                                            </div>
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </>
                    }
                </section>

                <PopularProductsSlider/>
            </Container>
            {
                (mobile) &&
                <div className='mobile-cart-btn'>
                    <button type='button' onClick={() => handleShowAlert()} className='btn-1 w-100'>В корзину 3000 руб.</button>
                </div>
            }
            <div className='alert' data-show={showAlert}>
                <div>Товар добавлен в корзину</div>
                <FiCheckCircle/>
            </div>
        </main>
    );
}