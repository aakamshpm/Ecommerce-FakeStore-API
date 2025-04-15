import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../components/CartModal";
import { toggleCart } from "../slices/cartSlice";

const PubilcRoutes = () => {
  const { cartItems, showCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
      {showCart && (
        <CartModal
          cartItems={cartItems}
          onClose={() => dispatch(toggleCart())}
        />
      )}
    </div>
  );
};

export default PubilcRoutes;
