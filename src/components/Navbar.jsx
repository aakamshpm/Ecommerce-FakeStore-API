import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../slices/cartSlice";

const Navbar = () => {
  const location = useLocation();
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navLinks = [
    {
      to: "/",
      label: "All",
    },
    {
      to: "/clothes",
      label: "Clothes",
    },
    {
      to: "/electronics",
      label: "Electronics",
    },
    {
      to: "/furniture",
      label: "Furniture",
    },
    {
      to: "/shoes",
      label: "Shoes",
    },
  ];

  return (
    <div className="font-[Poppins] flex justify-between w-full py-5 px-7 border-b-[1px] border-gray-300">
      {/* Navbar Left section  */}
      <div className="flex justify-between gap-3 items-center">
        <Link className="font-semibold text-lg" to="/">
          Shopi
        </Link>

        <div className="flex justify-between ml-4 gap-3 items-center font-light">
          {navLinks.map((item, i) => (
            <Link
              className={`${
                location.pathname === item.to && "underline underline-offset-7"
              }`}
              to={item.to}
              key={i}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Navbar right section  */}
      <div className="flex justify-between items-center gap-3 font-light">
        <p className="font-extralight text-sm">dummy@gmail.com</p>
        <Link to="/my-orders">My Orders</Link>
        <Link to="/my-account">My Account</Link>
        <div
          onClick={() => dispatch(toggleCart())}
          className="flex gap-2 items-center cursor-pointer"
        >
          <FiShoppingCart size={23} />
          <p className="text-base">{Object.keys(cartItems).length}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
