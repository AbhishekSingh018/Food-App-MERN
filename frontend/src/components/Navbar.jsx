import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { cart, clearCart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    clearCart();
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand food-logo" to="/">
          <span>🍕</span> Food<span>App</span>
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menu"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/menu">
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link cart-link" to="/cart">
                🛒 Cart
                <span className="cart-badge">
                  {cart.length}
                </span>
              </Link>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <span className="welcome-user">
                    👋 Welcome, {user.name}
                  </span>
                </li>

                <li className="nav-item">
                  <button
                    className="logout-btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="login-btn"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="signup-btn"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;