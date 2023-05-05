import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EditProfile() {
    return (
        <div className='box p-4 p-xl-5'>
            <h1>Редактировать данные</h1>
            <Row>
                <Col xs={12} xl={9} xxl={7}>
                    <form className='fs-12'>
                        <label className='mb-2'>Имя <span className='main-color'>*</span></label>
                        <input className='mb-4' type='text' placeholder='Имя'/>
                        <label className='mb-2'>Фамилия <span className='main-color'>*</span></label>
                        <input className='mb-4' type='text' placeholder='Фамилия'/>
                        <label className='mb-2'>Номер телефона <span className='main-color'>*</span></label>
                        <input className='mb-4' type='tel' placeholder='+79000000000'/>
                        <label className='mb-2'>Электронная почта <span className='main-color'>*</span></label>
                        <input className='mb-4' type='email' placeholder='mail.@mail.ru'/>
                        <label className='mb-2'>Город <span className='main-color'>*</span></label>
                        <input className='mb-4' type='text' placeholder='Город'/>
                        <Row md={2} className='gy-3'>
                            <Col>
                                <button type='submit' className='btn-1 w-100'>Сохранить</button>
                            </Col>
                            <Col>
                                <Link to="/account/profile" className='btn-2 w-100'>Отменить</Link>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </div>
    )
}