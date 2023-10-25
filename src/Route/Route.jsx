import { Routes, createBrowserRouter } from "react-router-dom";

import Home from "../components/LandingPage/Home";
import Layout from "../layout/Layout";
import Login from "../components/auth/Login";
import React from "react";
import SignUp from "../components/signUp/signUp";

export const router =createBrowserRouter(
    [{
       path:'/',
       element:<Layout/>,
       children:[
        {
            path:'',
            element:<Home/>
        },
            ]
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/signUp',
        element: <SignUp/>
    }



]
)

