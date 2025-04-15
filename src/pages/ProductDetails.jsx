import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../slices/productApiSlice";
import { FiChevronLeft, FiChevronRight, FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleCart } from "../slices/cartSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { TiTick } from "react-icons/ti";

const ProductDetails = () => {
  // Fetching product data   using ID
  const { id } = useParams();
  const {
    data: product,
    isError,
    isLoading,
    error,
  } = useGetProductByIdQuery(id);

  // Fetch cart data
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Product Image state handling
  const [currentState, setCurrentState] = useState(0);

  const handlePrev = () => {
    if (product?.images)
      setCurrentState((prev) =>
        prev === 0 ? product?.images.length - 1 : prev - 1
      );
  };

  const handleNext = () => {
    if (product?.images)
      setCurrentState((prev) =>
        prev === product?.images.length - 1 ? 0 : prev + 1
      );
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(toggleCart());
    dispatch(addToCart(product.id));
  };

  if (isLoading) return <Loader />;
  if (isError) return <Error error={error} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 max-w-6xl mx-auto md:mt-5">
      {/* Product Image section */}
      <div className="relative w-full flex justify-center items-center h-[30em]">
        <img
          src={product?.images[currentState]}
          alt="Product Image"
          className="w-full h-full object-contain rounded-md"
        />

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 cursor-pointer bg-white/80 hover:bg-white rounded-full p-2 "
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 cursor-pointer bg-white/80 hover:bg-white rounded-full p-2 "
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-2xl font-bold">{product?.title}</h1>

        <p className="text-gray-600">{product?.description}</p>

        <div className="text-xl font-semibold text-green-600">
          $ {product?.price}
        </div>

        <div className="mt-2 text-sm">
          <span className="font-semibold">Category: </span>
          {product?.category?.name}
        </div>

        {!(product.id in cartItems) ? (
          <div className="flex flex-col w-max items-center justify-center">
            <FiPlusCircle
              fill="white"
              color="black"
              size={30}
              className="cursor-pointer hover:scale-105"
              onClick={handleAddCart}
            />

            <p className="">Add to Cart</p>
          </div>
        ) : (
          <div className="flex flex-col w-max items-center justify-center">
            <TiTick color="white" size={30} className="bg-black rounded-full" />
            <p className="">Added to Cart</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
