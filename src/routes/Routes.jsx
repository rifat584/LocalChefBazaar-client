import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MainLayout from "../layouts/MainLayout";
import MyInventory from "../pages/Dashboard/Seller/MyMeals";
import ManageOrders from "../pages/Dashboard/Seller/OrderRequests";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import { createBrowserRouter } from "react-router";
import MealDetails from "../pages/PlantDetails/MealDetails";
import ManageRequest from "../pages/Dashboard/Admin/ManageRequest";
import CreateMeal from "../pages/Dashboard/Seller/CreateMeal";
import OrderRequests from "../pages/Dashboard/Seller/OrderRequests";
import MyMeals from "../pages/Dashboard/Seller/MyMeals";
import MyReview from "../pages/Dashboard/Customer/MyReview";
import FavoriteMeal from "../pages/Dashboard/Customer/FavoriteMeal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meal/:id",
        element: <MealDetails />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // common
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
            {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      // seller
      {
        path: "create-meal",
        element: (
          <PrivateRoute>
            <CreateMeal />
          </PrivateRoute>
        ),
      },
      {
        path: "my-meals",
        element: (
          <PrivateRoute>
            <MyMeals />
          </PrivateRoute>
        ),
      },
      {
        path: "order-requests",
        element: <PrivateRoute>
          <OrderRequests />
        </PrivateRoute>,
      },
      // Admin 
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-request",
        element: (
          <PrivateRoute>
            <ManageRequest />
          </PrivateRoute>
        ),
      },
      // user
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "my-review",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "favorite-meal",
        element: (
          <PrivateRoute>
            <FavoriteMeal />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
