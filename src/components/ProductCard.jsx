import "./productCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="image-container">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <h3 className="product-title">
        {product.title}
      </h3>

      <p className="product-price">
        ${product.price}
      </p>

    </div>
  );
}