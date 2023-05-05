import React from 'react'
import { Link } from 'react-router-dom'

const ProductMini = () => {
    return (
        <div className='product-mini'>
            <h6><Link to='/catalog/category/list/product'>Термостакан со вставкой «Эспрессо Патронум» lorem ipsum dolor met</Link></h6>
            <div className='text-end'>
                <div className='fw-6'>399 руб</div>
                <del className='fs-09 gray'>800 руб.</del>
            </div>
        </div>
    );
};

export default ProductMini;