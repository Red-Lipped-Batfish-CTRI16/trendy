import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from './pages/Main'
import Root from './pages/Root'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../client/styles/index.css';
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
  return (
    // RouterProvider: is the top-level component used in React Router to provide the routing context to its descendants.
  <RouterProvider 
    router={router}>
  </RouterProvider>
  );

}

