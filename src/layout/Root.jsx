import { Outlet } from "react-router-dom";
import Navbar from './../pages/shared/Navbar/Navbar';
import Footer from './../pages/shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
  return (
    <div className="font-poppins">
      <Navbar/>
      <Outlet />
      <Footer/>
      <ToastContainer/>
    </div>
  );
};

export default Root;
