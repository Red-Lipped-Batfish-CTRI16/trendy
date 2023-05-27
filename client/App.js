import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from './pages/Main'
import Navbar from './components/Navbar'
import Root from './pages/Root'
import Home from './pages/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/main", element: <Main />}
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

