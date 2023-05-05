import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"

export default function UserProfile() {
    return (
        <div className='box p-4 p-xl-5'>
            <div className='d-flex align-items-center mb-4'>
                <Link to='/account' className='d-lg-none fs-15 me-4'><FiArrowLeft/></Link>
                <h1 className='mb-0'>Контактная информация</h1>
            </div>
            
            <ul className='list-unstyled fs-12 mb-4'>
                <li className='mb-3'>Анастасия Иванова</li>
                <li className='mb-3'><a href="tel:+79378456123">+79378456123</a></li>
                <li className='mb-3'><a href="mailto:natya@gmail.com">natya@gmail.com</a></li>
                <li className='mb-3'>Казань</li>
            </ul>
            
            <div className='d-sm-flex align-items-center'>
                <Link to="edit" className='btn-1'>Редактировать</Link>
                <Link to="password" className='btn-1 ms-sm-4 mt-3 mt-sm-0'>Изменить пароль</Link>
            </div>
        </div>
    )
}