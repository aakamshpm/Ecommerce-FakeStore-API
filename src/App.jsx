import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { setCredentials } from "./slices/authSlice";
import { toggleCart } from "./slices/cartSlice";
import CartModal from "./components/CartModal";

const App = () => {
  const dispatch = useDispatch();
  const { cartItems, showCart } = useSelector((state) => state.cart);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(
        setCredentials({
          token,
          user: JSON.parse(user),
        })
      );
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />

      {/* Displaying cart modal based on state  */}
      {showCart && (
        <CartModal
          cartItems={cartItems}
          onClose={() => dispatch(toggleCart())}
        />
      )}
    </div>
  );
};

export default App;
