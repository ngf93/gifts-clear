import React from 'react'
import { Link } from 'react-router-dom'
import Address from '../../components/Address'
import { FiArrowLeft } from "react-icons/fi"

export default function Addresses() {
    return (
        <div className='box p-4 p-xl-5'>
            <div className='d-sm-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Link to='/account' className='d-lg-none fs-15 me-4'><FiArrowLeft/></Link>
                    <h1 className='mb-0'>Адреса доставки</h1>
                </div>
                <Link to='add' className='btn-1 mt-3 mt-sm-0'>Добавить адрес</Link>
            </div>
            <div className='addresses-box'>
                <Address title='Адрес 1' address='г. Казань, ул. Фучика, д.54, кв.1' />
                <Address title='Адрес 2' address='г. Казань, ул. Фучика, д.54, кв.1' />
                <Address title='Адрес 3' address='г. Казань, ул. Фучика, д.54, кв.1' />
                <Address title='Адрес 4' address='г. Казань, ул. Фучика, д.54, кв.1' />
            </div>
        </div>
    )
}