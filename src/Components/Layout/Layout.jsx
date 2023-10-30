import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Body from '../Body/Body';

export default function Layout() {
    return <>
            <Navbar/>
            <Outlet></Outlet>
            <Body/>
            <Footer/>
        </>
}