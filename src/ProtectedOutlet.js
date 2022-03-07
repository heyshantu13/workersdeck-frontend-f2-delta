import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';
import { useSelector } from "react-redux";

export default function ProtectedOutlet() {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    return(
        isLoggedIn ? <Outlet /> : <Navigate to="/login" /> 
    )
}

export  function LoggedInOutlet(){
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    return(
        isLoggedIn ? <Navigate to="/" /> :  <Outlet />
    )
}

