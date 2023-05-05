import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleMedium(props) {
    return (
        <figure className='article-medium'>
            <figcaption>
                <div className='fs-09 fw-6 mb-2 mb-sm-4'>#НовыйГод</div>
                <h3 className='text-start mb-2 mb-sm-4'><Link to='news'>Идеи подарков к Новому Году</Link></h3>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                <time className='d-block fw-3 mt-2 mt-sm-4'>14.11.2022</time>
            </figcaption>
            <Link to='news' className='img'><img src='imgs/main-slider/slide2.png' alt='Идеи подарков к Новому Году'/></Link>
        </figure>
    );
}