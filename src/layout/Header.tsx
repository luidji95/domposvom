import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-main animate-header">
      <div className="hamburger-main">
        <span className="hamburger-span span-1"></span>
        <span className="hamburger-span span-2"></span>
        <span className="hamburger-span span-3"></span>
      </div>

      <p className="home">HOME</p>

      <div className="cart-wrapper">
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">0</span>
      </div>
    </div>
  );
};

export default Header;
