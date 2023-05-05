import React from 'react';
import { Outlet } from 'react-router-dom'
import AccountMenu from './AccountMenu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AccountLayout = ({isMobile}) => {
    return <>
        {   
            isMobile
            ? <Outlet/>
            : <Row className='gx-4 gx-xxl-5'>
                <Col md={4} xxl={3}>
                    <AccountMenu/>
                </Col>
                <Col md={8} xxl={9}>
                    <Outlet/>
                </Col>
            </Row>
        }
    </>

};

export default AccountLayout;