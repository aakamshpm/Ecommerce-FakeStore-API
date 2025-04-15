import { useState } from "react";
import { useSelector } from "react-redux";
import ProductWidget from "./ProductWidget";
import Search from "./Search";
import ProductModal from "../components/ProductModal";
import Loader from "./Loader";
import Error from "./Error";

const ProductsDisplay = ({ data, isError, isLoading, isFetching, error }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // fetch cart data
  const { cartItems } = useSelector((state) => state.cart);

  // state to handle ProductModal
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onSearch = () => {
    console.log(searchTerm);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col justify-center items-center p-6">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={onSearch}
      />

      <div className="grid grid-cols-4 justify-center mt-8 w-[60em] place-items-center">
        {data?.map((product, i) => {
          const isInCart = !!cartItems[product.id];
          return (
            <ProductWidget
              product={product}
              key={i}
              isInCart={isInCart}
              setSelectedProduct={setSelectedProduct}
            />
          );
        })}

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductsDisplay;
