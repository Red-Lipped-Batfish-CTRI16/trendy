import React from "react";


import '../client/styles/index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from './pages/Main'
import Navbar from './components/Navbar'
import Root from './pages/Root'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/main", element: <Main />},
      { path: "/login", element: <Login />},
      { path: "/signup", element: <Signup />}
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}>
   

  </RouterProvider>;
  

}

