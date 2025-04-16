import { IoClose } from "react-icons/io5";
import { useGetAllProductsQuery } from "../slices/productApiSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from "../slices/cartSlice";
import { Link } from "react-router-dom";

const CartModal = ({ cartItems, onClose }) => {
  const { data, isError, error, isLoading, isFetching, refetch } =
    useGetAllProductsQuery();
  const [cartProducts, setCartProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && data) {
      const filteredProducts = data.filter((product) =>
        cartItems.hasOwnProperty(product.id)
      );
      setCartProducts(filteredProducts);
    }
  }, [cartItems, data]);

  const totalPrice = cartProducts.reduce((total, product) => {
    const quantity = cartItems[product.id] || 0;
    return total + product.price * quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end px-2 sm:px-4">
      <div className="bg-white top-10 right-2 rounded-md relative shadow w-full sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[25%] h-[70%] border-black border-[1px] flex flex-col">
        <div className="flex justify-between p-4 items-center">
          <h1 className="text-xl sm:text-2xl font-semibold">My Cart</h1>
          <IoClose
            onClick={onClose}
            className="h-6 w-6 text-white cursor-pointer hover:scale-105 bg-black rounded-full"
          />
        </div>

        <div className="w-full h-[1px] bg-black opacity-20" />

        <div className="flex-1 overflow-y-auto px-4">
          {cartProducts.map((product) => (
            <div
              key={product.id}
              className="flex gap-3 items-start border-b py-3"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="font-medium text-sm">{product.title}</h2>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                    onClick={() => dispatch(reduceItemFromCart(product.id))}
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold">
                    {cartItems[product.id] || 0}
                  </span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                    onClick={() => dispatch(addToCart(product.id))}
                  >
                    +
                  </button>
                  <button
                    className="ml-auto text-xs text-red-500 underline cursor-pointer"
                    onClick={() => dispatch(removeItemFromCart(product.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between mb-3">
            <p className="font-medium">Total:</p>
            <p className="font-semibold">${totalPrice.toFixed(2)}</p>
          </div>
          <Link to="/checkout">
            <button
              onClick={onClose}
              disabled={totalPrice === 0}
              className={`w-full py-2 rounded transition ${
                totalPrice === 0
                  ? "bg-black text-white cursor-not-allowed opacity-40"
                  : "bg-black text-white hover:opacity-90 cursor-pointer"
              }`}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
