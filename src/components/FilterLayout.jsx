"use client";

import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import SortDropdown from "./SortDropdown";
import "./filterLayout.css";

export default function FilterLayout({ products }) {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div>

      <div className="top-bar-wrapper">
        <div className="container">

          <div className="top-bar">

            <div className="left-section">
              <p className="item-count">3425 ITEMS</p>

              <button
                className="filter-toggle-btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className={`arrow ${showFilters ? "rotate" : ""}`}>
                  <i class="ri-arrow-right-s-line"></i>
                </span>

                <span className="btn-text">
                  {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
                </span>
              </button>
            </div>

            <div className="right-section">
              <SortDropdown />
            </div>

          </div>

        </div>
      </div>

      <div className="container">
        <div className={`layout ${showFilters ? "" : "full-width"}`}>
          {showFilters && <FilterSidebar />}
          <ProductGrid products={products} showFilters={showFilters} />
        </div>
      </div>
    </div>
  );
}
