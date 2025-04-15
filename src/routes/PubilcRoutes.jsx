import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PubilcRoutes = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PubilcRoutes;
