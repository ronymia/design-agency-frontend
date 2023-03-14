import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../pages/Shared';

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
