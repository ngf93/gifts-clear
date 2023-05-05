import React from 'react';
import StarRating from './utils/StarRating';

export default function Review(props) {
    return (
        <div className='review'>
            <StarRating rate={props.rate} />
            <div className='fs-11 mt-3'>{props.text}</div>
            <div className='gray fw-6 mt-2'>{props.name}, {props.date}</div>
        </div>
    );
}