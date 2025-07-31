import { Outlet } from "react-router-dom";
import { Navbar } from "./UI/Navbar";
import Footer from './UI/Footer';


const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
