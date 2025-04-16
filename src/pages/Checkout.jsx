import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../slices/productApiSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { clearCartData } from "../slices/cartSlice";
import { updateMyOrders } from "../slices/orderSlice";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;
  if (isError) return <Error error={error} />;

  const cartProducts = products.filter((product) => cartItems[product.id]);

  const totalPrice = cartProducts.reduce((acc, product) => {
    return acc + product.price * cartItems[product.id];
  }, 0);

  const handlePlaceOrder = () => {
    const order = {
      order_id: uuidv4(), // Unique ID
      order_date: new Date().toISOString(),
      totalPrice: totalPrice,
      totalProducts: cartProducts.length,
      products: cartProducts.map((product) => ({
        id: product.id,
        title: product.title,
        image: product.images[0],
        count: cartItems[product.id],
        price: product.price,
      })),
    };

    dispatch(updateMyOrders(order));
    dispatch(clearCartData());
    navigate("/order-placed");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Checkout</h1>

      <div className="w-full max-w-5xl border border-black rounded-lg shadow-lg p-4 sm:p-6 space-y-6">
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 py-4 gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold text-base sm:text-lg">
                  {product.title}
                </h2>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-semibold text-sm sm:text-base">
                Qty: {cartItems[product.id]}
              </p>
              <p className="text-black text-sm sm:text-base">
                $ {product.price * cartItems[product.id]}
              </p>
            </div>
          </div>
        ))}

        {/* User Info Section */}
        <div className="border-t border-black pt-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Customer Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Pincode"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 rounded p-2"
            />
          </div>

          <textarea
            rows="3"
            placeholder="Full Address"
            className="w-full mt-4 border border-gray-300 rounded p-2"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-black gap-2 sm:gap-0">
          <h2 className="text-lg sm:text-xl font-semibold">Total:</h2>
          <h2 className="text-lg sm:text-xl font-bold">$ {totalPrice}</h2>
        </div>

        <button
          disabled={totalPrice === 0}
          onClick={handlePlaceOrder}
          className={`mt-4 w-full py-3 rounded transition ${
            totalPrice === 0
              ? "bg-black text-white cursor-not-allowed opacity-40"
              : "bg-black text-white hover:bg-gray-800 cursor-pointer"
          }`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
