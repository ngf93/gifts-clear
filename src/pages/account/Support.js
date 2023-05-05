import React from 'react'
import InputFile from '../../components/utils/InputFile'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"

export default function Support(props) {
    return (
        <div className='box p-4 p-xl-5'>
            <Row>
                <Col md={7}>
                    <div className='d-flex align-items-center mb-4'>
                        <Link to='/account' className='d-lg-none fs-15 me-4'><FiArrowLeft/></Link>
                        <h1 className='mb-0'>Служба поддержки</h1>
                    </div>
                    <p className='mb-4'>Напишите нам, если у вас возникли вопросы с доставкой или товаром. Опишите ситуацию. Мы обязательно ответим вам.</p>
                    <form>
                        <label className='mb-2'>Электронная почта <span className='main-color'>*</span></label>
                        <input className='mb-4' type='email' placeholder='mail.@mail.ru'/>
                        <label className='mb-2'>Опишите жалобу</label>
                        <textarea placeholder='Комментарий' rows='5'></textarea>
                        <InputFile multiple={true} className="mt-4"/>
                        <button type='button' className='btn-1 fs-12 mt-4'>Отправить</button>
                    </form>
                </Col>
            </Row>
        </div>
    );
}