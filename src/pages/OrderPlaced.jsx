import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-[50em] bg-black text-white rounded-lg shadow-lg p-8 text-center space-y-6">
        <IoCheckmarkCircleSharp className="text-white text-6xl mx-auto" />

        <h1 className="text-3xl font-bold">Order Successfully Placed!</h1>
        <p className="text-lg text-gray-300">
          Your order has been confirmed. You will receive a confirmation email
          soon.
        </p>

        <div className="mt-6 space-x-4">
          <Link
            to="/"
            className="px-6 py-2 bg-black text-white border border-white rounded hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
          <Link
            to="/my-orders"
            className="px-6 py-2 bg-black text-white border border-white rounded hover:bg-gray-800"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
