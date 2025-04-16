import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../slices/cartSlice";
import { clearCredentials } from "../slices/authSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "All" },
    { to: "/clothes", label: "Clothes" },
    { to: "/electronics", label: "Electronics" },
    { to: "/furniture", label: "Furniture" },
    { to: "/shoes", label: "Shoes" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLogout = () => {
    dispatch(clearCredentials());
    navigate("/");
  };

  return (
    <nav className="font-[Poppins] bg-white border-b border-gray-300 px-5 py-4 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Nav links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-semibold">
            Shopi
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-4 text-sm text-gray-700">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`hover:underline ${
                  location.pathname === item.to
                    ? "underline underline-offset-8"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {token ? (
            <>
              <p className="text-sm hidden sm:block text-gray-600">
                {user.email}
              </p>
              <Link to="/my-orders" className="text-sm hidden sm:block">
                My Orders
              </Link>
              <Link to="/my-account" className="text-sm hidden sm:block">
                My Account
              </Link>
              <button
                onClick={() => dispatch(toggleCart())}
                className="flex items-center gap-1 cursor-pointer"
              >
                <FiShoppingCart size={22} />
                <span className="text-sm">{Object.keys(cartItems).length}</span>
              </button>

              <button
                onClick={handleLogout}
                className="text-sm hidden sm:block text-red-600 hover:underline cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => dispatch(toggleCart())}
                className="flex items-center gap-1 cursor-pointer"
              >
                <FiShoppingCart size={22} />
                <span className="text-sm">{Object.keys(cartItems).length}</span>
              </button>

              <Link to="/login" className="text-base">
                Login
              </Link>
            </>
          )}

          {/* Mobile menu toggle */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 px-2 pb-4 text-sm text-gray-700">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`hover:underline ${
                  location.pathname === item.to
                    ? "underline underline-offset-8"
                    : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {token ? (
              <>
                <Link to="/my-orders" onClick={() => setMenuOpen(false)}>
                  My Orders
                </Link>
                <Link to="/my-account" onClick={() => setMenuOpen(false)}>
                  My Account
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-left text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
