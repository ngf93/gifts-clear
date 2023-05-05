import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/utils/Breadcrumbs';

const NotFound = () => {
    return (
        <main>
            <Container className='text-center mb-8'>
                <Breadcrumbs />
                <div className='text-center fs-40 fw-9 mb-5'>ошибка 400</div>
                <h1 className='text-center'>Страница не найдена</h1>
                <Link to='/' className='btn-1 mx-auto'>Вернуться на главную</Link>
            </Container>
        </main>
    );
};

export default NotFound;