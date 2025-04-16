import { FiPlusCircle } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addToCart, toggleCart } from "../slices/cartSlice";

const ProductWidget = ({ product, isInCart, setSelectedProduct }) => {
  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(toggleCart());
    dispatch(addToCart(product.id));
  };

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="flex flex-col w-full max-w-[240px] p-2 h-[320px] cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div className="relative w-full h-[200px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={product.images[0]}
          alt=""
        />

        {!isInCart ? (
          <FiPlusCircle
            fill="white"
            color="black"
            size={30}
            className="absolute top-2 right-2 cursor-pointer hover:scale-105 z-10"
            onClick={handleAddCart}
          />
        ) : (
          <TiTick
            color="white"
            size={30}
            className="absolute top-2 right-2 cursor-pointer bg-black rounded-full z-10"
          />
        )}

        <p className="absolute bottom-2 left-2 bg-gray-200 bg-opacity-60 text-black text-xs px-2 py-1 rounded z-10">
          {product.category.name}
        </p>
      </div>

      <div className="flex flex-col w-full mt-2 text-sm">
        <p className="font-medium truncate">{product.title}</p>
        <p className="text-gray-800 font-semibold">$ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductWidget;
