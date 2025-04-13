import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const auth = JSON.parse(localStorage.getItem('loggedin')); // Ensure it's properly parsed

    return auth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
