
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";


function FoodCard({ food }) {

  const { addToCart } = useContext(CartContext);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();


  return (

    <div className="col-md-4 mb-4">

      <div className="card shadow h-100">


        <img
          src={food.image}
          className="card-img-top"
          alt={food.name}
        />


        <div className="card-body">


          <h5 className="card-title">
            {food.name}
          </h5>


          <p className="card-text">
            {food.description}
          </p>


          <h5>
            ₹ {food.price}
          </h5>


          <button

            className="btn btn-success w-100"

            onClick={() => {

              if (user) {

                addToCart(food);

              }
              else {

                navigate("/login");

              }

            }}

          >

            Add To Cart

          </button>



          <Link

            to={`/food/${food.id}`}

            className="btn btn-outline-primary mt-2 w-100"

          >

            View Details

          </Link>


        </div>


      </div>


    </div>

  );

}


export default FoodCard;

