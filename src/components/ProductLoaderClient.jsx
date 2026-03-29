"use client";

import { useState, useEffect } from 'react';
import FilterLayout from "./FilterLayout";
import { clientGetProducts } from "@/lib/api";
import "./filterLayout.css";

export default function ProductLoaderClient({ products: serverProducts }) {
  const [localProducts, setLocalProducts] = useState(serverProducts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (serverProducts?.length === 0 && !loading) {
      setLoading(true);
      clientGetProducts().then(data => {
        setLocalProducts(data);
        setLoading(false);
      }).catch(err => {
        console.error("Client fetch failed", err);
        setLoading(false);
      });
    }
  }, []); // empty deps - run once

  if (loading) {
    return <div className="product-loading">Loading products...</div>;
  }

  return <FilterLayout products={localProducts} />;
}

