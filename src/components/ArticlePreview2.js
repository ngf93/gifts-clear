import { Link } from 'react-router-dom';

export default function ArticlePreview2(props) {
    return (
        <article className='preview'>
            <div className='fs-09 fw-6 mb-3'>#НовыйГод</div>
            <h3 className='text-start mb-3'><Link to='/all-news/news'>Идеи подарков к Новому Году</Link></h3>
            <time className='d-block fw-3'>14.11.2022</time>
        </article>
    );
}