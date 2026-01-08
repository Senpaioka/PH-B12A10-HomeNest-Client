import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Spinner from "../components/Spinner";
import Home from '../pages/Home';
import Register from '../auth/Registration';
import Login from '../auth/Login';
import AddProperty from "../pages/AddProperty";
import AboutUs from "../pages/AboutUs";
import Dashboard from "../Dashboard";

const AllProperties = lazy(() => import('../pages/AllProperties'));
const MyProperties = lazy(() => import('../pages/MyProperties'));
const MyRatings = lazy(() => import('../pages/MyRatings'));
const PropertyDetails = lazy(() => import('../pages/PropertyDetails'));
const PropertyEdit = lazy(() => import('../pages/PropertyEdit'));
const DashboardHome = lazy(() => import('../pages/dashboard/DashboardHome'));

import {PrivateRoute} from '../context/PrivateRoute';

// api calling
import {getAllProperties} from '../api/fetching';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Spinner></Spinner>,

    children: [
        {
          index: true,
          Component: Home,
          loader: getAllProperties,
        },
        {
          path: 'about-us',
          Component: AboutUs,
        },
        {
          path: 'registration',
          Component: Register,
        },
        {
          path: 'login',
          Component: Login,
        },
        {
          path: 'all-properties',
          element: (
            <Suspense fallback={<Spinner></Spinner>}>
                <AllProperties></AllProperties>
            </Suspense>
          ),
          loader: getAllProperties,
        },
        {
          path: 'my-properties',
          element: (
          <PrivateRoute>
            <Suspense fallback={<Spinner></Spinner>}>
                <MyProperties></MyProperties>
            </Suspense>
          </PrivateRoute>
          )
        },
        {
          path: 'my-ratings',
          element: (
          <PrivateRoute>
            <Suspense fallback={<Spinner></Spinner>}>
                <MyRatings></MyRatings>
            </Suspense>
          </PrivateRoute>
          )
        },
        {
          path: 'add-property',
          element: (
            <PrivateRoute>
              <AddProperty></AddProperty>
            </PrivateRoute>
          )
        },
        {
          path: 'details/:propertyId',
          element: (
          <PrivateRoute>
            <Suspense fallback={<Spinner></Spinner>}>
                <PropertyDetails></PropertyDetails> {/* force re-render */}
            </Suspense>
          </PrivateRoute>
          ),
        },
        {
          path: 'edit/:propertyId',
          element: (
          <PrivateRoute>
            <Suspense fallback={<Spinner></Spinner>}>
                <PropertyEdit></PropertyEdit>
            </Suspense>
          </PrivateRoute>
          ),
        },
    ]
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Suspense fallback={<Spinner></Spinner>}>
            <Dashboard></Dashboard>
        </Suspense>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Spinner></Spinner>,

    children: [
      {
        index: true,
        Component: DashboardHome,
      }
    ],
  },
]);


export {router};