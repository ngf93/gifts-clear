import React from 'react';
import { useRoutes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Balloons from '../pages/Balloons';
import Delivery from '../pages/Delivery';
import Returns from '../pages/Returns';
import Contacts from '../pages/Contacts';
import AllNews from '../pages/AllNews';
import News from '../pages/News';
import About from '../pages/About';
import Catalog from '../pages/Catalog';
import Category from '../pages/Category';
import ProductList from '../pages/ProductList';
import Product from '../pages/Product';
import ShoppingCart from '../pages/ShoppingCart';
import Checkout from '../pages/Checkout';
import Favorites from '../pages/Favorites';
import Login from '../pages/Login';
import ResetPassword from '../pages/ResetPassword';
import Registration from '../pages/Registration';
import Account from '../pages/account/Account';
import AllOffers from '../pages/AllOffers';
import Offer from '../pages/Offer';
import NotFound from '../pages/NotFound';

export const routeList = [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {index: true, element: <Home /> , breadcrumb: 'Главная'},
        {path: 'about', element: <About/>, breadcrumb: 'О компании'},
        {path: 'delivery', element: <Delivery/>, breadcrumb: 'Доставка и оплата'},
        {path: 'returns', element: <Returns/>, breadcrumb: 'Возврат'},
        {path: 'contacts', element: <Contacts/>, breadcrumb: 'Контакты'},
        {path: 'offers', element: <AllOffers/>, breadcrumb: 'Акции'},
        {path: 'offers/offer', element: <Offer/>, breadcrumb: 'Название акции'},
        {path: 'all-news', element: <AllNews />, breadcrumb: 'Новости'},
        {path: 'all-news/news', element: <News/>, breadcrumb: 'Название новости'},
        {path: 'favorites', element: <Favorites/>, breadcrumb: 'Избранное'},
        {path: 'catalog', element: <Catalog/>, breadcrumb: 'Каталог'},
        {path: 'catalog/category', element: <Category/>, breadcrumb: 'Категория'},
        {path: 'catalog/category/list', element: <ProductList/>, breadcrumb: 'Список товаров'},
        {path: 'catalog/category/list/product', element: <Product/>, breadcrumb: 'Товар'},
        {path: 'balloons', element: <Balloons/>, breadcrumb: 'Шары'},
        {path: 'cart', element: <ShoppingCart/>, breadcrumb: 'Корзина'},
        {path: 'cart/checkout', element: <Checkout/>, breadcrumb: 'Оформление заказа'},
        {path: 'registration', element: <Registration/> , breadcrumb: 'Регистрация'},
        {path: 'login', element: <Login/> , breadcrumb: 'Вход в личный кабинет'},
        {path: 'reset-password', element: <ResetPassword/> , breadcrumb: 'Восстановление пароля'},
        {path: 'account/*', element: <Account/>, breadcrumb: 'Личный аккаунт'},
        {path: '*', element: <NotFound/>, breadcrumb: 'Страница не найдена 404'},
      ],
    },
  ];

export default function AppRouter() {
    const Wrapper = ({ children }) => {
      const {pathname} = useLocation();
      useLayoutEffect(() => document.documentElement.scrollTo(0, 0), [pathname])
      return children
    }
  
    const element = useRoutes(routeList)
  
    return (
      <Wrapper>
        {element}
      </Wrapper>
    );
}