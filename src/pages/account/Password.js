import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputPassword from '../../components/utils/InputPassword';

export default function Password() {
    return (
        <div className='box p-4 p-xl-5'>
            <h1>Изменить пароль</h1>
            <Row>
                <Col xs={12} xl={9} xxl={7}>
                    <form className='fs-12'>
                        <label className='mb-2'>Текущий пароль <span className='main-color'>*</span></label>
                        <InputPassword placeholder='Текущий пароль' inputClass='py-3 px-4' className='mb-4'/>
                        <label className='mb-2'>Новый пароль <span className='main-color'>*</span></label>
                        <InputPassword placeholder='Новый пароль' inputClass='py-3 px-4' className='mb-4'/>
                        <label className='mb-2'>Повторите пароль <span className='main-color'>*</span></label>
                        <InputPassword placeholder='Повторите пароль' inputClass='py-3 px-4' className='mb-4'/>
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