import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Samsung from "../Pages/Samsung/Samsung";
import Xiomi from "../Pages/Xiomi/Xiomi";
import Oppo from "../Pages/Oppo/Oppo";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyProducts from "../Pages/MyProducts/MyProducts";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path:'/login', 
                element:<Login></Login>
            }, 
            {
                path:'/register', 
                element:<Register></Register>
            }, 
         
            {
                path:'/blog', 
                element:<Blog></Blog>
            }, 
            {
                path:'/samsung', 
                element: <PrivateRoute><Samsung></Samsung></PrivateRoute>
            }, 
            {
                path:'/xiomi', 
                element: <PrivateRoute><Xiomi></Xiomi></PrivateRoute>
            }, 
            {
                path:'/oppo', 
                element: <PrivateRoute><Oppo></Oppo></PrivateRoute>
            }, 
                 {  path:'/myorders', 
                     element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>, 
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            }, 
            {
                path: '/myproducts',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            }, 

        ],
    },

     
   
]);
