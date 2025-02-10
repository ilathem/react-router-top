/**
 * Routes is refactored into its own file so
 * we can easily import into test files and 
 * keep main smaller
 */
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Blog from "./Blog";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'profile/*',
        element: <Profile />,
    },
    {
        path: 'blog/*',
        element: <Blog />,
    },
];

export default routes;