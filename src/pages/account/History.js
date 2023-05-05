import React from 'react'
import Order from '../../components/Order'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"

export default function History(props) {
    return (
        <div className='box p-4 p-xl-5'>
            <div className='d-flex align-items-center mb-4'>
                <Link to='/account' className='d-lg-none fs-15 me-4'><FiArrowLeft/></Link>
                <h1 className='mb-0'>История заказов</h1>
            </div>
            <Order orderNum={'113'} date={'1.11.2022'} total={'2000'} products={[
                {product:'Термостакан «Любимая подруга. Цветы», 350 мл', count: '1', price: '500'},
                {product:'Набор чай чёрный 50 г, шоколад молочный, варежки 19 см "Счастливая посылочка"', count: '3', price: '1500'},
            ]} />
            <Order orderNum={'112'} date={'21.10.2022'} total={'2000'} products={[
                {product:'Термостакан «Любимая подруга. Цветы», 350 мл', count: '1', price: '500'},
                {product:'Набор чай чёрный 50 г, шоколад молочный, варежки 19 см "Счастливая посылочка"', count: '3', price: '1500'},
            ]} />
            <Order orderNum={'111'} date={'17.08.2022'} total={'2000'} products={[
                {product:'Термостакан «Любимая подруга. Цветы», 350 мл', count: '1', price: '500'},
                {product:'Набор чай чёрный 50 г, шоколад молочный, варежки 19 см "Счастливая посылочка"', count: '3', price: '1500'},
            ]} />
        </div>
    );
}