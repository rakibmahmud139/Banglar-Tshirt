/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Main = () => {
    return (
        <div>
            <Header></Header>

            <Outlet />
            <Toaster />
        </div>
    );
};

export default Main;