import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] max-h-[90%] overflow-y-auto relative shadow-lg">
        <IoClose
          onClick={onClose}
          className="absolute top-2 right-2 h-6 w-6 text-white cursor-pointer hover:scale-105 bg-black rounded-full"
        />

        <img
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-md"
          src={product.images[0]}
          alt=""
        />

        <h2 className="text-lg sm:text-xl font-semibold mt-2 mb-2">
          {product.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-2">
          {product.description}
        </p>
        <p className="text-base sm:text-lg font-bold text-green-600 mb-1">
          $ {product.price}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          Category: {product.category?.name}
        </p>

        <Link
          className="text-blue-500 underline text-sm sm:text-base"
          to={`/product/${product.id}`}
        >
          View Product Details
        </Link>
      </div>
    </div>
  );
};

export default ProductModal;
