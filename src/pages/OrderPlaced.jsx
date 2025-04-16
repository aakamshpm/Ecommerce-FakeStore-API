import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8">
      <div className="w-full max-w-3xl bg-black text-white rounded-lg shadow-lg p-6 sm:p-8 text-center space-y-6">
        <IoCheckmarkCircleSharp className="text-white text-6xl mx-auto" />

        <h1 className="text-2xl sm:text-3xl font-bold">
          Order Successfully Placed!
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Your order has been confirmed. You will receive a confirmation email
          soon.
        </p>

        <div className="mt-6 space-x-4 flex flex-col sm:flex-row justify-center">
          <Link
            to="/"
            className="px-6 py-2 bg-black text-white border border-white rounded hover:bg-gray-800 w-full sm:w-auto text-center"
          >
            Continue Shopping
          </Link>
          <Link
            to="/my-orders"
            className="px-6 py-2 bg-black text-white border border-white rounded hover:bg-gray-800 w-full sm:w-auto text-center"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
