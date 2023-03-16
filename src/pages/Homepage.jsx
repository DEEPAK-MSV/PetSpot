import React from 'react';
import { Outlet } from 'react-router-dom';
import Base from './Base';
import Content from './Content';
import Header from './Header';
import Images from './Images';
// import { Outlet } from "react-router-dom"
function Homepage() {
    return (
        <>
            <Header />
            <Images />
            <Outlet />
            <Base />
        </>
    )
}

export default Homepage;
