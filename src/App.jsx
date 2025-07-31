import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/layout/AppLayout";
import Home from "./pages/Home";
import About  from "./pages/About";
import {Product}  from "./pages/Product";
import Contact  from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import "./app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "product", element: <Product /> },
      { path: "contact", element: <Contact /> }, 
    ],
  },
  // Fallback route outside layout, to test error:
  {
    path: "*",
    element: <ErrorPage />
  }
]);


const App = () => <RouterProvider router={router} />;

export default App;
