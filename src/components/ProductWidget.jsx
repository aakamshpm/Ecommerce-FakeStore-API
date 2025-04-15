import { FiPlusCircle } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const ProductWidget = ({ product, isInCart, setSelectedProduct }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="flex flex-col p-2 h-[300px] cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div className="relative w-full h-[200px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={product.category.image}
          alt=""
        />

        {!isInCart ? (
          <FiPlusCircle
            fill="white"
            color="black"
            size={30}
            className="absolute top-2 right-2 cursor-pointer hover:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart(product.id));
            }}
          />
        ) : (
          <TiTick
            color="white"
            size={30}
            className="absolute top-2 right-2 cursor-pointer bg-black rounded-full"
          />
        )}

        <p className="absolute bottom-2 left-2 bg-gray-200 bg-opacity-60 text-black text-xs px-2 py-1 rounded">
          {product.category.name}
        </p>
      </div>

      <div className="flex flex-col w-full">
        <p>{product.title}</p>
        <p>$ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductWidget;
