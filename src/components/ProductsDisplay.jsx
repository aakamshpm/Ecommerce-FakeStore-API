import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductWidget from "./ProductWidget";
import Search from "./Search";
import ProductModal from "../components/ProductModal";
import Loader from "./Loader";
import Error from "./Error";

const ProductsDisplay = ({ data, isError, isLoading, isFetching, error }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { cartItems, showCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);

  const onSearch = () => {
    if (!data || !searchTerm.trim()) return;

    const search = searchTerm.toLowerCase();
    const filtered = data.filter((product) => {
      const titleMatch = product.title.toLowerCase().includes(search);
      const categoryMatch = product.category.name
        .toLowerCase()
        .includes(search);
      return titleMatch || categoryMatch;
    });

    setFilteredProducts(filtered);
  };

  // filters data automatically when searched or loadec
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts(data || []);
    } else {
      onSearch();
    }
  }, [searchTerm, data]);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-[60em] mx-auto place-items-center px-4">
        {filteredProducts?.map((product, i) => {
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
