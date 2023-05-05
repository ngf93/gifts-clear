import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './utils/StarRating';
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import BtnFav from './utils/BtnFav';

export default function CartItem(props) {
    return (
        <div className='cart-item'>
            <figure >
                <Link to='/catalog/category/list/product'><img src={props.imgUrl} alt={props.title}/></Link>
                <figcaption>
                    <h5 className='mb-2'><Link to='/catalog/category/list/product'>{props.title}</Link></h5>
                    <div className='d-flex align-items-start fs-09'>
                        <StarRating rate={props.rating} />
                        <span className='gray ms-2'>({props.reviewsCount})</span>
                    </div>
                    <div className='d-flex align-items-center mt-2 mt-xl-3'>
                        <div className='price'>399 руб</div>
                        <del>800 руб.</del>
                    </div>
                </figcaption>
            </figure>
            <div className='controls'>
                <div className='box input-number'>
                    <button type='button'>
                        <FiMinus/>
                    </button>
                    <input type='number' placeholder='0' />
                    <button type='button'>
                        <FiPlus/>
                    </button>
                </div>
                <div className='d-flex ms-4 ms-xxl-5'>
                    <BtnFav />
                    <button type='button' className='btn-del ms-2'>
                        <FiTrash2/>
                    </button>
                </div>
            </div>
        </div>
    );
}