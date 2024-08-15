import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouteObject, createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Destination from './pages/Destination/Destination';
import Home from './pages/Home/Home';
import Inspiration from './pages/Inspiration/Inspiration';
import Posts from './pages/Posts/Posts';
import Layout from './components/Layout';

// Define your routes as an array of RouteObject
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "destination", element: <Destination /> },
      { path: "inspiration", element: <Inspiration /> },
      { path: "posts", element: <Posts /> },
    ],
  },
];

// Create the router using createHashRouter
const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
