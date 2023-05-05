import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"

export default function Notifications(props) {
    return (
        <div className='box p-4 p-xl-5'>
            <div className='d-flex align-items-center mb-4'>
                <Link to='/account' className='d-lg-none fs-15 me-4'><FiArrowLeft/></Link>
                <h1 className='mb-0'>Уведомления</h1>
            </div>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Сообщение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7.03.2020</td>
                        <td>На ваш счет зачислено 70 баллов</td>
                    </tr>
                    <tr>
                        <td>4.02.2020</td>
                        <td>Ваш заказ отправлен. Вы можете отслеживать заказ на сайте CDEK по трек номеру 123456789</td>
                    </tr>
                    <tr>
                        <td>7.01.2020</td>
                        <td>На ваш счет зачислено 70 баллов</td>
                    </tr>
                    <tr>
                        <td>1.01.2020</td>
                        <td>На ваш счет зачислено 70 баллов</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}