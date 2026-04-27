import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AddParking from "./pages/AddParking";
import Dashboard from "./pages/Dashboard";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./store/userSlice";
import API from "./services/api";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function MainLayout() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/me", {
          withCredentials: true,
        });

        if (res.data.user) {
          dispatch(userActions.setUser(res.data.user));
        } else {
          dispatch(userActions.setUser(null));
        }
      } catch (err) {
        console.log(err.response?.data || err.message);
        dispatch(userActions.setUser(null));
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [dispatch]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
  {
    path: "/addparking",
    element: <AddParking></AddParking>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
