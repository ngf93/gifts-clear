import { Link } from 'react-router-dom';

export default function ArticlePreview(props) {
    return (
        <figure className='article-preview'>
            <img src={props.imgUrl} alt={props.title}/>
            <figcaption>
                <h3><Link to='/all-news/news'>{props.title}</Link></h3>
            </figcaption>
        </figure>
    );
}