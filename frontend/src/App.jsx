import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AddParking from "./pages/AddParking";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function MainLayout() {
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
