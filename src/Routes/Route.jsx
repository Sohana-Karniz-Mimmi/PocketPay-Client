// react Dom setup
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs";
import ProtectedRoute from "./PrivetRoute";
import Profile from "../Pages/profile/Profile";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: '/dashboard',
    element: (
      <DashboardLayout></DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: (
          <Statistics />

        ),
      },
      {
        path: "blogs",
        element: <ProtectedRoute><Blogs></Blogs></ProtectedRoute>,
      },
      {
        path: "manage-users",
        element: <ProtectedRoute><ManageUsers></ManageUsers></ProtectedRoute>,
      },
     
      
    ],
  },

]);

export default router