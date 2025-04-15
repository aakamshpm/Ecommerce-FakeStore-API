import ProductsDisplay from "../components/ProductsDisplay";
import { useGetShoesProductsQuery } from "../slices/categoryApiSlice";

const Shoes = () => {
  // fetch Shoes products
  const { data, isError, error, isLoading, refetch } =
    useGetShoesProductsQuery();

  return (
    <ProductsDisplay
      data={data}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default Shoes;
