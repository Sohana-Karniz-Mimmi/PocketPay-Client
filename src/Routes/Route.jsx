// react Dom setup
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProtectedRoute from "./PrivetRoute";
import Profile from "../Pages/profile/Profile";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import SendMoneyForm from "../Pages/Dashboard/NormalUsers/SendMoneyForm";
import CashOut from "../Pages/Dashboard/NormalUsers/CashOut";

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
      
      // User Route
      {
        path: "send-money",
        element: <ProtectedRoute><SendMoneyForm></SendMoneyForm></ProtectedRoute>,
      },
      {
        path: "cash-out",
        element: <ProtectedRoute><CashOut></CashOut></ProtectedRoute>,
      },
      // Admin Route
      {
        path: "manage-users",
        element: <ProtectedRoute><ManageUsers></ManageUsers></ProtectedRoute>,
      },
     
      
    ],
  },

]);

export default router