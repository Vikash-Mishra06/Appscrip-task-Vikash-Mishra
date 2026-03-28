import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">LOGO</div>

      <div className="menu">
        <p>SHOP</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>

      <div className="actions">
        <span>Search</span>
        <span>Cart</span>
      </div>

    </nav>
  );
}