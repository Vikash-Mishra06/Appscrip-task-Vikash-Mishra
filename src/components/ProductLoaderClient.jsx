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
      const load = async () => {
        setLoading(true);
        try {
          const data = await clientGetProducts();
          setLocalProducts(data);
        } catch (err) {
          console.error("Client fetch failed", err);
        } finally {
          setLoading(false);
        }
      };
      load();
    } else {
      setLocalProducts(serverProducts);
    }
  }, [serverProducts, loading]);

  if (loading) {
    return <div className="product-loading">Loading products...</div>;
  }

  return <FilterLayout products={localProducts} />;
}

