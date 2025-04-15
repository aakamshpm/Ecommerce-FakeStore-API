import ProductsDisplay from "../components/ProductsDisplay";
import { useGetFurnitureProductsQuery } from "../slices/categoryApiSlice";

const Furniture = () => {
  // fetch furniture     products
  const { data, isError, error, isLoading, refetch } =
    useGetFurnitureProductsQuery();

  return (
    <ProductsDisplay
      data={data}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default Furniture;
