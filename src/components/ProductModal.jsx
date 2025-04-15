import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 w-[40%] h-[80%] relative shadow-lg">
        <IoClose
          onClick={onClose}
          className="absolute top-2 right-2 h-6 w-6 text-white cursor-pointer hover:scale-105 bg-black rounded-full "
        />

        <img
          className="w-full h-[50%] object-cover rounded-md"
          src={product.category?.image}
          alt=""
        />
        <h2 className="text-xl font-semibold mt-2 mb-2">{product.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-bold text-green-600 mb-1">
          $ {product.price}
        </p>
        <p className="text-sm text-gray-500">
          Category: {product.category?.name}
        </p>

        <Link className="text-blue-500 underline" to={`/product/${product.id}`}>
          View Product Details
        </Link>
      </div>
    </div>
  );
};

export default ProductModal;
