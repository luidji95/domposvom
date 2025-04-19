import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../data/api/fetchProducts";
import Product from "./Product";

const ProductPage = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Učitavanje...</p>;
  if (error) return <p>Došlo je do greške pri dohvatanju proizvoda.</p>;

  return (
    <div className="product-page-main">
      {/* ovde će ići ProductFilter */}
      <div className="product-list">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
