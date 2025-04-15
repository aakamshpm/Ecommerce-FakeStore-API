import ProductsDisplay from "../components/ProductsDisplay";
import { useGetClothProductsQuery } from "../slices/categoryApiSlice";

const Clothes = () => {
  // fetch cloth products
  const { data, isError, error, isLoading, refetch } =
    useGetClothProductsQuery();

  return (
    <ProductsDisplay
      data={data}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default Clothes;
