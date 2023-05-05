import React from 'react';
import { Link } from 'react-router-dom';

function SubCategoryCard(props) {
    return (
        <Link to='/catalog/category/list'>
            <figure className='subcategory-card'>
                <img src={props.imgUrl} alt={props.title}/>
                <figcaption><h3>{props.title}</h3></figcaption>
            </figure>
        </Link>
    );
}

export default SubCategoryCard;