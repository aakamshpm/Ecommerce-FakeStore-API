import ProductsDisplay from "../components/ProductsDisplay";
import { useGetElectronicsProductsQuery } from "../slices/categoryApiSlice";

const Electronics = () => {
  // fetch Electronics     products
  const { data, isError, error, isLoading, refetch } =
    useGetElectronicsProductsQuery();

  return (
    <ProductsDisplay
      data={data}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default Electronics;
