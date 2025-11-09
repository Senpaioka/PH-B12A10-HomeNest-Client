import { createBrowserRouter } from "react-router";
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Spinner from "../components/Spinner";
import Home from '../pages/Home';
import Register from '../auth/Registration';
import Login from '../auth/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Spinner></Spinner>,

    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: 'registration',
          Component: Register,
        },
        {
          path: 'login',
          Component: Login,
        }
    ]
  },
]);


export {router};