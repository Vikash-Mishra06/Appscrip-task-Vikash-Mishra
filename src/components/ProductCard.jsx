"use client";

import { useState } from "react";
import "./productCard.css";

export default function ProductCard({ product }) {
  // state for wishlist heart
  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="card-content">

        <h3 className="product-title">
          {product.title}
        </h3>

        <p className="login-text">
          Sign in or Create an account to see pricing
        </p>

        <div className="card-footer">

          <p className="product-price">
            ${product.price}
          </p>

          <span
            className={`heart ${liked ? "active" : ""}`}
            onClick={() => setLiked(!liked)}
          >
            ♥
          </span>

        </div>

      </div>

    </div>
  );
}