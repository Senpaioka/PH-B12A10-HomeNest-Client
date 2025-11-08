import { createBrowserRouter } from "react-router";
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Spinner from "../components/Spinner";
import Home from '../pages/Home';

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
        }
    ]
  },
]);


export {router};