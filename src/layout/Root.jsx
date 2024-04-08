import { Outlet } from "react-router-dom";
import Navbar from './../pages/shared/Navbar/Navbar';
const Root = () => {
  return (
    <div className="font-poppins">
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default Root;
