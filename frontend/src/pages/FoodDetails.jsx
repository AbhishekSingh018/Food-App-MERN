
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";

import foods from "../data/Foods";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function FoodDetails() {
    const { id } = useParams();

    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const { user } = useContext(AuthContext);
    const food = foods.find(
        (item) => item.id === Number(id)
    );
    if (!food) {

        return (
            <div className="container mt-5">
                <h2>
                    Food Not Found
                </h2>
            </div>

        );
    }
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img
                        src={food.image}
                        alt={food.name}
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-6">
                    <h1>
                        {food.name}
                    </h1>
                    <p className="mt-3">
                        {food.description}
                    </p>
                    <h3>
                        ₹ {food.price}
                    </h3>
                    <button
                        onClick={() => {

                            if (user) {

                                addToCart(food);
                            }
                            else {

                                navigate("/login");

                            }
                        }}
                        className="btn btn-success mt-3"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>

    );
}
export default FoodDetails;
