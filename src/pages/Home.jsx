import { useGetAllProductsQuery } from "../slices/productApiSlice";
import ProductsDisplay from "../components/ProductsDisplay";

const Home = () => {
  // fetch all products
  const { data, isError, error, isLoading, isFetching, refetch } =
    useGetAllProductsQuery();

  return (
    <ProductsDisplay
      data={data}
      isError={isError}
      error={error}
      isLoading={isLoading}
      isFetching={isFetching}
    />
  );
};

export default Home;
