import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function FoodCard({ food }) {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    addToCart(food);

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2500);
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="food-card h-100">

        {/* Food Image */}
        <div className="food-image-wrapper">
          <img
            src={food.image}
            className="food-image"
            alt={food.name}
          />

          <span className="food-price">
            ₹{food.price}
          </span>
        </div>

        {/* Card Content */}
        <div className="food-card-body">

          <h5 className="food-title">
            {food.name}
          </h5>

          <p className="food-description">
            {food.description}
          </p>

          <div className="food-actions">

            <button
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </button>

            <Link
              to={`/food/${food.id}`}
              className="details-btn"
            >
              View Details →
            </Link>

          </div>

        </div>

        {/* Success Notification */}
        {showMessage && (
          <div className="cart-toast">
            <span>✓</span>
            <div>
              <strong>{food.name}</strong>
              <small>Added to cart successfully!</small>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default FoodCard;