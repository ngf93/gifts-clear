import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiChevronDown } from "react-icons/fi";

export default function Filter(props) {
    const [filters, setFilters] = useState([
        {
            name: 'availability',
            isShow: false,
            isFull: false
        },
        {
            name: 'price',
            isShow: false,
            isFull: false
        },
        {
            name: 'brands',
            isShow: false,
            isFull: false
        },
        {
            name: 'country',
            isShow: false,
            isFull: false
        },
        {
            name: 'wholesale',
            isShow: false,
            isFull: false
        },
        {
            name: 'sertificate',
            isShow: false,
            isFull: false
        },
        {
            name: 'color',
            isShow: false,
            isFull: false
        },
    ]);

    const toggleContent = (fieldName) => {
        setFilters(filters.map(obj => {
            if (obj.name === fieldName) {
               return {...obj, isShow: (obj.isShow)?false:true};
            } else {
               return obj;
            }
        }));
    }

    const isShow = (fieldName) => {
        let val = filters.find(obj => obj.name === fieldName).isShow;
        return val;
    }


    return (
        <form className='filter'>
            <fieldset>
                <legend onClick={()=>toggleContent('availability')}>
                    <FiChevronDown/>
                    <span>Наличие в магазине</span>
                </legend>
                <div className='content' data-state={(isShow('availability')) ? 'shown' : 'hidden'}>
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
                <legend onClick={()=>toggleContent('price')}>
                    <FiChevronDown/>
                    <span>Цена</span>
                </legend>
                <div className='content' data-state={(isShow('price')) ? 'shown' : 'hidden'}>
                    <Row xs={2} className='gx-3 mb-3'>
                        <Col>
                            <input type='number' placeholder='от 13 000' className='w-100 style-2'/>
                        </Col>
                        <Col>
                            <input type='number' placeholder='до 567 000' className='w-100 style-2'/>
                        </Col>
                    </Row>
                    <label>
                        <input type='checkbox' name='price' />
                        <span>Менее 15 000 ₽</span>
                    </label>
                    <label>
                        <input type='checkbox' name='price' />
                        <span>15 001 - 25 000 ₽</span>
                    </label>
                    <label>
                        <input type='checkbox' name='price' />
                        <span>25 001 - 35 000 ₽</span>
                    </label>
                    <label>
                        <input type='checkbox' name='price' />
                        <span>45 000 ₽ и более</span>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend onClick={()=>toggleContent('brands')}>
                    <FiChevronDown/>
                    <span>Торговые марки</span>
                </legend>
                <div className='content' data-state={(isShow('brands')) ? 'shown' : 'hidden'}>
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
                    <button type='button' className="mt-2 fw-3 gray text-decoration-underline">Показать всё</button>
                </div>
            </fieldset>
            <fieldset>
                <legend onClick={()=>toggleContent('country')}>
                    <FiChevronDown/>
                    <span>Страна производитель</span>
                </legend>
                <div className='content' data-state={(isShow('country')) ? 'shown' : 'hidden'}>
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
                <legend onClick={()=>toggleContent('wholesale')}>
                    <FiChevronDown/>
                    <span>Оптовые цены</span>
                </legend>
                <div className='content' data-state={(isShow('wholesale')) ? 'shown' : 'hidden'}>
                    <Row xs={2} className='gx-3 mb-3'>
                        <Col>
                            <input type='number' placeholder='от 13 000' className='w-100 style-2'/>
                        </Col>
                        <Col>
                            <input type='number' placeholder='до 567 000' className='w-100 style-2'/>
                        </Col>
                    </Row>
                    <label>
                        <input type='checkbox' name='wholesale' />
                        <span>Менее 15 000 ₽</span>
                    </label>
                    <label>
                        <input type='checkbox' name='wholesale' />
                        <span>15 001 - 25 000 ₽</span>
                    </label>
                    <label>
                        <input type='checkbox' name='wholesale' />
                        <span>25 001 - 35 000 ₽</span>
                    </label>
                    <label>
                        <input type='checkbox' name='wholesale' />
                        <span>45 000 ₽ и более</span>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend onClick={()=>toggleContent('sertificate')}>
                    <FiChevronDown/>
                    <span>Сертификат</span>
                </legend>
                <div className='content' data-state={(isShow('sertificate')) ? 'shown' : 'hidden'}>
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
                <legend onClick={()=>toggleContent('color')}>
                    <FiChevronDown/>
                    <span>Цвет</span>
                </legend>
                <div className='content' data-state={(isShow('color')) ? 'shown' : 'hidden'}>
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