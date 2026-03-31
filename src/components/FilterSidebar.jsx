"use client";

import { useState } from "react";
import "./filterSidebar.css";

export default function FilterSidebar() {
  const [openIndex, setOpenIndex] = useState(0);

  const filterCategories = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  return (
    <aside className="sidebar">

      <div className="customizable-section">
        <label className="checkbox-container">
          <input type="checkbox" />
          CUSTOMIZABLE
        </label>
      </div>

      {filterCategories.map((cat, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={cat} className="filter-group">
            <div
              className="filter-header"
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
            >
              <span className="filter-title">{cat}</span>
              <span className={`arrow ${isOpen ? "rotate" : ""}`}><i className="ri-arrow-down-s-line"></i></span>
            </div>

            <p className="filter-subtitle">All</p>

            {isOpen && cat === "IDEAL FOR" && (
              <div className="filter-options">
                <button className="unselect-btn">
                  Unselect all
                </button>

                <label className="checkbox-container">
                  <input type="checkbox" /> Men
                </label>

                <label className="checkbox-container">
                  <input type="checkbox" /> Women
                </label>

                <label className="checkbox-container">
                  <input type="checkbox" /> Baby & Kids
                </label>
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}