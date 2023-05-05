import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import AccountLayout from '../pages/account/AccountLayout';

import AccountMenu from '../pages/account/AccountMenu';
import AddAddress from '../pages/account/AddAddress';
import Addresses from '../pages/account/Addresses';
import BonusCard from '../pages/account/BonusCard';
import EditAddress from '../pages/account/EditAddress';
import EditProfile from '../pages/account/EditProfile';
import History from '../pages/account/History';
import Notifications from '../pages/account/Notifications';
import Password from '../pages/account/Password';
import Support from '../pages/account/Support';
import UserProfile from '../pages/account/UserProfile';


const AccountRouter = ({isMobile}) => {
    return (
        <Routes>
            <Route path="/" element={<AccountLayout isMobile={isMobile}/>}>
                {isMobile
                    ? <Route index element={<AccountMenu />} />
                    : <Route index element={<Navigate to="profile" replace={true} />} />
                }
                <Route path="profile" element={<UserProfile/>}/>
                <Route path="profile/edit" element={<EditProfile />}/>
                <Route path="profile/password" element={<Password/>}/>
                <Route path="history" element={<History/>}/>
                <Route path="notifications" element={<Notifications />}/>
                <Route path="support" element={<Support/>}/>
                <Route path="addresses" element={<Addresses/>}/>
                <Route path="addresses/add" element={<AddAddress/>}/>
                <Route path="addresses/edit" element={<EditAddress/>}/>
                <Route path="bonus" element={<BonusCard/>}/>
            </Route>
        </Routes>
    );
};

export default AccountRouter;