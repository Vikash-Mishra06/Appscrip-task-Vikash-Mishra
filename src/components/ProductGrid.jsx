import ProductCard from "./ProductCard";
import "./productGrid.css";

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}