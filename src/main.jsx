import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import the necessary functions for client side routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Profile from './Profile.jsx';
// in case the user goes to an invalid route
import ErrorPage from './ErrorPage.jsx';

// '/' is the home page, profile is /profile
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'profile/:name', // dynamic route segment
    element: <Profile />,
  },
]);

// router provider needs to be the root element in the app
// for routing to work properly
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
