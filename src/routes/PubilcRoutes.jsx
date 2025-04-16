import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PubilcRoutes = () => {
  const { token } = useSelector((state) => state.auth);

  return token ? <Navigate to="/" replace /> : <Outlet />;
};

export default PubilcRoutes;
