import { useGetAllProductsQuery } from "../slices/productApiSlice";
import ProductsDisplay from "../components/ProductsDisplay";

const Home = () => {
  // fetch all products
  const { data, isError, error, isLoading, refetch } = useGetAllProductsQuery();

  return (
    <ProductsDisplay
      data={data}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default Home;
