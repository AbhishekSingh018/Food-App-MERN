
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";


function Navbar() {

  const { cart, clearCart } = useContext(CartContext);

  const { user, logout } = useContext(AuthContext);



  const handleLogout = () => {

    clearCart();

    logout();

  };



  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">


        <Link className="navbar-brand" to="/">

          Food App

        </Link>



        <button

          className="navbar-toggler"

          data-bs-toggle="collapse"

          data-bs-target="#menu"

        >

          <span className="navbar-toggler-icon"></span>

        </button>



        <div

          className="collapse navbar-collapse"

          id="menu"

        >


          <ul className="navbar-nav ms-auto">



            <li className="nav-item">

              <Link

                className="nav-link"

                to="/"

              >

                Home

              </Link>

            </li>




            <li className="nav-item">

              <Link

                className="nav-link"

                to="/menu"

              >

                Menu

              </Link>

            </li>





            <li className="nav-item">

              <Link

                className="nav-link"

                to="/cart"

              >

                Cart ({cart.length})

              </Link>

            </li>





            {
              user ? (

                <>

                  <li className="nav-item">

                    <span className="nav-link">

                      Welcome {user.name}

                    </span>

                  </li>




                  <li className="nav-item">

                    <button

                      className="btn btn-danger mt-1"

                      onClick={handleLogout}

                    >

                      Logout

                    </button>

                  </li>


                </>


              )

                :

                (

                  <>

                    <li className="nav-item">

                      <Link

                        className="nav-link"

                        to="/login"

                      >

                        Login

                      </Link>

                    </li>




                    <li className="nav-item">

                      <Link

                        className="nav-link"

                        to="/signup"

                      >

                        Signup

                      </Link>

                    </li>


                  </>

                )

            }



          </ul>


        </div>


      </div>


    </nav>

  );

}


export default Navbar;

