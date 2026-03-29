"use client";
import { useState } from "react";
import "./sortDropdown.css";

export default function SortDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <div className="sort-container">
      <button
        className="sort-button"
        onClick={() => setOpen(!open)}
      >
        {selected}
        <span className={`arrow ${open ? "rotate" : ""}`}><i class="ri-arrow-down-s-line"></i></span>
      </button>

      {open && (
        <div className="dropdown-menu">
          {options.map((item) => (
            <div
              key={item}
              className={`dropdown-item ${
                selected === item ? "active" : ""
              }`}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
            >
              {selected === item && <span className="check">✓</span>}
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}