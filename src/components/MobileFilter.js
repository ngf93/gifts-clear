import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function MobileFilter(props) {
    return (
        <form className='mobile-filter'>
            <h4>Фильтры</h4>
            <fieldset>
                <legend>
                    <span>Наличие в магазине</span>
                </legend>
                <div className='tags'>
                    <label>
                        <input type='checkbox' name='availability' />
                        <span>Наличие в магазине</span>
                    </label>
                    <label>
                        <input type='checkbox' name='availability' />
                        <span>Под заказ: сегодня</span>
                    </label>
                    <label>
                        <input type='checkbox' name='availability' />
                        <span>Под заказ: завтра</span>
                    </label>
                    <label>
                        <input type='checkbox' name='availability' />
                        <span>Под заказ: позже</span>
                    </label>
                    <label>
                        <input type='checkbox' name='availability' />
                        <span>Отсутсвующие в продаже</span>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>
                    <span>Цена</span>
                </legend>
                <div className='tags'>
                    <Row xs={2} className='gx-3 mb-3'>
                        <Col>
                            <input type='number' placeholder='от 13 000' className='w-100 style-2'/>
                        </Col>
                        <Col>
                            <input type='number' placeholder='до 567 000' className='w-100 style-2'/>
                        </Col>
                    </Row>
                </div>
            </fieldset>
            <fieldset>
                <legend>
                    <span>Торговые марки</span>
                    <button type='button' className="gray">все</button>
                </legend>
                <div className='tags'>
                    <label>
                        <input type='checkbox' name='brands'/>
                        <span>Aeronik</span>
                    </label>
                    <label>
                        <input type='checkbox' name='brands'/>
                        <span>AUX</span>
                    </label>
                    <label>
                        <input type='checkbox' name='brands'/>
                        <span>Axioma</span>
                    </label>
                    <label>
                        <input type='checkbox' name='brands'/>
                        <span>Ballu</span>
                    </label>
                    <label>
                        <input type='checkbox' name='brands'/>
                        <span>Bosch</span>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>
                    <span>Страна производитель</span>
                    <button type='button' className="gray">все</button>
                </legend>
                <div className='tags'>
                    <label>
                        <input type='checkbox' name='country'/>
                        <span>Страна 1</span>
                    </label>
                    <label>
                        <input type='checkbox' name='country'/>
                        <span>Страна 2</span>
                    </label>
                    <label>
                        <input type='checkbox' name='country'/>
                        <span>Страна 3</span>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>
                    <span>Оптовые цены</span>
                </legend>
                <div className='tags'>
                    <Row xs={2} className='gx-3 mb-3'>
                        <Col>
                            <input type='number' placeholder='от 13 000' className='w-100 style-2'/>
                        </Col>
                        <Col>
                            <input type='number' placeholder='до 567 000' className='w-100 style-2'/>
                        </Col>
                    </Row>
                </div>
            </fieldset>
            <fieldset>
                <legend>
                    <span>Сертификат</span>
                    <button type='button' className="gray">все</button>
                </legend>
                <div className='tags'>
                    <label>
                        <input type='checkbox' name='sertificate'/>
                        <span>Сертификат 1</span>
                    </label>
                    <label>
                        <input type='checkbox' name='sertificate'/>
                        <span>Сертификат 2</span>
                    </label>
                    <label>
                        <input type='checkbox' name='sertificate'/>
                        <span>Сертификат 3</span>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>
                    <span>Цвет</span>
                    <button type='button' className="gray">все</button>
                </legend>
                <div className='tags'>
                    <label>
                        <input type='checkbox' name='color'/>
                        <span>Цвет 1</span>
                    </label>
                    <label>
                        <input type='checkbox' name='color'/>
                        <span>Цвет 2</span>
                    </label>
                    <label>
                        <input type='checkbox' name='color'/>
                        <span>Цвет 3</span>
                    </label>
                </div>
            </fieldset>
        </form>
    );
}