import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from './pages/Main'
import Root from './pages/Root'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../client/styles/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Main /> },
    ],
  },
]);

export default function App() {
  return (
  <RouterProvider 
    router={router}>
  </RouterProvider>
  );

}

