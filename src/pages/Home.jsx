import { useState } from "react";
import Search from "../components/Search";
import { useGetAllProductsQuery } from "../slices/productApiSlice";
import Error from "../components/Error";
import Loader from "../components/Loader";
import ProductWidget from "../components/ProductWidget";
import { useSelector } from "react-redux";
import ProductModal from "../components/ProductModal";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // fetch all products
  const { data, isError, error, isLoading, refetch } = useGetAllProductsQuery();

  // state to handle ProductModal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // fetch cart data
  const { cartItems } = useSelector((state) => state.cart);

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
        {data.map((product, i) => {
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

export default Home;
