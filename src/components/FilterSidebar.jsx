import "./filterSidebar.css";

export default function FilterSidebar() {
  const filterCategories = [
    "IDEAL FOR", "OCCASION", "WORK", "FABRIC", 
    "SEGMENT", "SUITABLE FOR", "RAW MATERIALS", "PATTERN"
  ];

  return (
    <aside className="sidebar">
      <div className="customizable-section">
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
          CUSTOMIZABLE
        </label>
      </div>

      {filterCategories.map((cat) => (
        <div key={cat} className="filter-group">
          <div className="filter-header">
            <span className="filter-title">{cat}</span>
            {/* Using the Remix Icon here */}
            <i className="ri-arrow-down-s-line filter-arrow"></i>
          </div>
          <p className="filter-subtitle">All</p>
          
          {cat === "IDEAL FOR" && (
             <div className="filter-options">
                <button className="unselect-btn">Unselect all</button>
                <label className="checkbox-container"><input type="checkbox" /> Men</label>
                <label className="checkbox-container"><input type="checkbox" /> Women</label>
                <label className="checkbox-container"><input type="checkbox" /> Baby & Kids</label>
             </div>
          )}
        </div>
      ))}
    </aside>
  );
}