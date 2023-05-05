import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputPassword from '../components/utils/InputPassword';

export default function ResetPassword(props) {
    const [step, setStep] = useState('1');
    return (
        <main>
            <Container>
                <section className='py-4 py-sm-5 mb-8'>
                    <h1 className='text-center'>Восстановление пароля</h1>
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={10} md={8} lg={6}>
                            {
                                (step === '1') &&
                                <form>
                                    <label className='fs-13 mb-2 mb-sm-3'>Электронная почта</label>
                                    <div className='form-group'>
                                        <input type='email' placeholder='Введите Вашу электронную почту' className='py-3 px-4'/>
                                        <button type='button' className='btn-1' onClick={()=>setStep('2')}>Получить код</button>
                                    </div>
                                </form>
                            }
                            {
                                (step === '2') &&
                                <form>
                                    <label className='fs-13 mb-2 mb-sm-3'>Код подтверждения</label>
                                    <div className='form-group'>
                                        <input type='text' placeholder='Введите код подтверждения' className='py-3 px-4'/>
                                        <button type='button' className='btn-1' onClick={()=>setStep('3')}>Отправить</button>
                                    </div>
                                </form>
                            }
                            {
                                (step === '3') &&
                                <form>
                                    <label className='fs-13 mb-2 mb-sm-3'>Придумайте новый пароль</label>
                                    <InputPassword placeholder='Введите новый пароль' inputClass='py-3 px-4' className='mb-4'/>
                                    <label className='fs-13 mb-2 mb-sm-3'>Повторите пароль</label>
                                    <InputPassword placeholder='Повторите пароль' inputClass='py-3 px-4' className='mb-4'/>
                                    <button type='button' className='btn-1 fs-11 px-5 mx-auto'>Сохранить</button>
                                </form>
                            }
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
}