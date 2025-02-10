import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import the necessary functions for client side routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes);

// router provider needs to be the root element in the app
// for routing to work properly
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
