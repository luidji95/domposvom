type ProductProps = {
  product: {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
  };
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.price} €</p>
    </div>
  );
};

export default Product;
