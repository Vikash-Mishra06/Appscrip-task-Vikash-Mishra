import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* TOP ROW: True Centering Layout */}
      <div className="container nav-top">
        
        {/* Left Section (Flex 1) */}
        <div className="nav-side nav-left">
          <img 
            src="/image_99dafc.png" 
            alt="Brand Logo" 
            className="brand-icon" 
          />
        </div>

        {/* Center Section (Fixed/Auto width) */}
        <div className="nav-logo">
          LOGO
        </div>

        {/* Right Section (Flex 1) */}
        <div className="nav-side nav-actions">
          <i className="ri-search-line"></i>
          <i className="ri-heart-3-line"></i>
          <i className="ri-shopping-bag-line"></i>
          <i className="ri-user-line"></i>
          <div className="lang-select">
            <span>ENG</span>
            <i className="ri-arrow-down-s-line"></i>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: Navigation Links */}
      <div className="container nav-bottom">
        <p>SHOP</p>
        <p>SKILLS</p>
        <p>STORIES</p>
        <p>ABOUT</p>
        <p>CONTACT US</p>
      </div>
    </nav>
  );
}