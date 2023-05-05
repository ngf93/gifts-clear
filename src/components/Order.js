import React, {useState} from 'react';

export default function Order(props) {
    const [orderFull, setOrderFull] = useState(false);
    const arrItems = props.products;

    return (
        <div className='order'>
            <div className='title' onClick={()=>setOrderFull((orderFull === true) ? false : true)}>
                <div>
                    <span className='fs-11 fw-7 main-color'>№ {props.orderNum}</span>
                    <span className='ms-4'>от {props.date}</span>
                </div>
                <div className='fs-11 fw-7'>{props.total} ₽</div>
            </div>
            <div className={(orderFull) ? 'main full' : 'main'}>
                {
                    arrItems.map( obj =>
                        <div className='item'>
                            <a href='/' className='product'>{obj.product}</a>
                            <span className='count'>{obj.count} шт.</span>
                            <span className='price'>{obj.price} ₽</span>
                        </div>
                    )
                }
            </div>
        </div>
    );
}