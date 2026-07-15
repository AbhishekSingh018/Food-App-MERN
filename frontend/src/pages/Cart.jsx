import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity
  } = useContext(CartContext);
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Your Cart
      </h1>
      {
        cart.length === 0 ?
          <div className="text-center">
            <h3>
              Your Cart is Empty
            </h3>
            <p>
              Add some delicious food from our menu.
            </p>
          </div>
          :
          <>
            {
              cart.map((item) => (
                <div
                  key={item.id}
                  className="card mb-3 shadow"
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-md-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{
                          height: "180px",
                          width: "100%",
                          objectFit: "cover"
                        }}
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <h3>
                          {item.name}
                        </h3>
                        <p>
                          Price: ₹ {item.price}
                        </p>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                "decrease"
                              )
                            }
                          >
                            -
                          </button>
                          <span className="mx-3 fs-5">

                            {item.quantity}

                          </span>

                          <button
                            className="btn btn-success"

                            onClick={() =>
                              updateQuantity(
                                item.id,
                                "increase"
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <h5 className="mt-3">

                          Total:
                          ₹ {item.price * item.quantity}

                        </h5>
                        <button
                          className="btn btn-outline-danger mt-2"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
            <div className="card shadow p-4 mt-4">
              <h2>
                Grand Total:
                ₹ {total}
              </h2>
              <button
                className="btn btn-primary mt-3"
                onClick={() => {
                  alert("Order placed successfully!");
                }}
              >
                Place Order
              </button>
            </div>
          </>
      }
    </div>
  );
}
export default Cart;