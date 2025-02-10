/**
 * Routes is refactored into its own file so
 * we can easily import into test files and 
 * keep main smalle/*  */r
 */
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'profile/:name',
        element: <Profile />,
    },
];

export default routes;