import { Link } from 'react-router-dom';

export default function CategoryCard(props) {
    return (
        <figure className='category-card'>
            <img src={props.imgUrl} alt={props.title} />
            <figcaption><h3><Link to='/catalog/category' className='stretched-link'>{props.title}</Link></h3></figcaption>
        </figure>
    );
}