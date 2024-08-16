import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouteObject, createHashRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { I18nextProvider } from 'react-i18next';
import './index.css';
import i18n from './i18n';

import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import Layout from './components/Layout';
import SignInPage from './auth/SignInPage/SignInPage';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const routes: RouteObject[] = [
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "posts", element: <Posts /> },
    ],
  },
];

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ClerkProvider>
  </React.StrictMode>
);
