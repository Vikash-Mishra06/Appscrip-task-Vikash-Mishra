"use client";

import { useState, useEffect } from 'react';
import { clientGetProducts } from "@/lib/api";

export default function ClientProductLoader({ products: serverProducts, children }) {
  const [products, setProducts] = useState(serverProducts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (serverProducts?.length === 0 && !loading) {
      setLoading(true);
      clientGetProducts().then((data) => {
        setProducts(data);
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    }
  }, [serverProducts]);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  // Render children with updated products
  return children({ products });
}

