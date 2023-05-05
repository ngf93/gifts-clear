import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Offcanvas from 'react-bootstrap/Offcanvas'
import useIsMobile from '../../hooks/isMobile'
import { NavLink } from 'react-router-dom'
import { FiUser, FiMapPin, FiCreditCard, FiBell, FiLogOut, FiShoppingBag, FiHelpCircle, FiXCircle, FiPhone, FiMessageCircle, FiX } from "react-icons/fi"
import {ReactComponent as VK} from '../../styles/imgs/VK.svg'
import {ReactComponent as Telegram} from '../../styles/imgs/Telegram.svg'
import {ReactComponent as Whatsapp} from '../../styles/imgs/whatsapp.svg'
import { FcCallback } from "react-icons/fc";
import Social from '../../components/utils/Social'

export default function AccountMenu() {
    const {mobile} = useIsMobile('991px');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showСonsultation, setShowСonsultation] = useState(false);
    const handleCloseСonsultation = () => setShowСonsultation(false);
    const handleShowСonsultation = () => setShowСonsultation(true);

    return (
        <>
        {
            (mobile)
            && <>
                <div className='user'>
                    <div>С</div>
                    <h2 className='mb-0'>Сергей</h2>
                </div>
                
                <figure className='bonus-card max mb-4'>
                    <img src='imgs/bonus-card.svg' alt='bonus-card'/>
                    <figcaption>
                        <div>
                            <div className='num'>0</div>
                            <div className='text'>БАЛЛОВ</div>
                        </div>
                        <button type='button' onClick={handleShow}>
                            <img src='imgs/qr.png' alt='qr'/>
                        </button>
                    </figcaption>
                </figure>
            </>
        }
        <nav className="box p-4 account-nav">
            <ul>
                <li>
                    <NavLink to='profile'>
                        <FiUser/>
                        <span>Личные данные</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='addresses'>
                        <FiMapPin/>
                        <span>Адреса доставки</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='history'>
                        <FiShoppingBag/>
                        <span>История заказов</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='bonus'>
                        <FiCreditCard/>
                        <span>Баллы</span>
                    </NavLink>
                </li>
                <hr/>
                <li>
                    <NavLink to='notifications'>
                        <FiBell/>
                        <span>Уведомления</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='support'>
                        <FiHelpCircle/>
                        <span>Служба поддержки</span>
                    </NavLink>
                </li>
                <hr/>
                <li>
                    <button type='button'>
                        <FiLogOut/>
                        <span>Выход</span>
                    </button>
                </li>
            </ul>
        </nav>
        {
            (mobile)
            && <div className='box p-4 mt-4'>
                <button type='button' onClick={handleShowСonsultation} className='fs-11 mb-3'>
                    <FiMessageCircle className='fs-13'/> 
                    <span className='ms-3'>Написать консультанту</span>
                </button>
                <hr />
                <a href='tel:+79000000000' className='fs-11'>
                    <FiPhone className='fs-13'/>
                    <span className='ms-3'>Позвонить</span>
                </a>
            </div>
        }
        {
            (mobile)
            && <Social className='mt-4'/>
        }
        
        <Modal show={show} onHide={handleClose}>
            <button type="button" className='btn-close' onClick={handleClose}>
                <FiXCircle />
            </button>
            <Modal.Body>
                <figure className='qr'>
                    <figcaption>
                        <h5 className='mb-2'>Ваш уникальный</h5> 
                        <h2 className='text-center fw-7 mb-0'>QR-код</h2>
                    </figcaption>
                    <img src="imgs/qr.png" alt="qr"/>
                </figure>
                <button className='btn-1 px-5 mx-auto mt-4' onClick={handleClose}>Назад</button>
            </Modal.Body>
        </Modal>

        <Offcanvas show={showСonsultation} placement={'bottom'} onHide={handleCloseСonsultation}>
            <Offcanvas.Body className=''>
                <button type='button' className='close' onClick={handleCloseСonsultation}>
                    <FiX/>
                </button>
                <ul className='consultation-list'>
                    <li>
                        <a href='https://vk.com/bdkzn'>
                            <VK/>
                            <span>ВКонтакте</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://t.me/presents_beautifulday'>
                            <Telegram/>
                            <span>Telegram</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://wa.me/79600555160'>
                            <Whatsapp/>
                            <span>WhatsApp</span>
                        </a>
                    </li>
                    <li>
                        <a href='tel:+79000000000'>
                            <FcCallback/>
                            <span>Позвонить</span>
                        </a>
                    </li>
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}