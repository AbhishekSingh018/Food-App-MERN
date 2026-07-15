
import { Link } from "react-router-dom";

function Home() {

  return (

    <>

      {/* Hero Section */}

      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-md-6">

            <h1 className="display-3 fw-bold">
              Delicious Food,
              <br />
              Delivered Fast 🍔
            </h1>


            <p className="lead mt-4 text-muted">

              Fresh and tasty meals prepared with quality
              ingredients and delivered straight to your
              doorstep.

            </p>


            <div className="mt-4">

              <Link
                to="/menu"
                className="btn btn-primary btn-lg me-3"
              >
                Order Now
              </Link>


              <Link
                to="/menu"
                className="btn btn-outline-dark btn-lg"
              >
                View Menu
              </Link>

            </div>


          </div>



          <div className="col-md-6 text-center">


            <img

              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700"

              alt="Delicious Food"

              className="img-fluid rounded shadow"

            />


          </div>


        </div>


      </div>



      {/* Features Section */}


      <div className="container py-5">


        <h2 className="text-center mb-5">

          Why Choose Us?

        </h2>



        <div className="row text-center">


          <div className="col-md-4 mb-4">


            <div className="card shadow h-100 p-4">


              <h1>🍕</h1>


              <h4>
                Fresh Food
              </h4>


              <p>
                Made with fresh ingredients and great taste.
              </p>


            </div>


          </div>





          <div className="col-md-4 mb-4">


            <div className="card shadow h-100 p-4">


              <h1>🚚</h1>


              <h4>
                Fast Delivery
              </h4>


              <p>
                Quick delivery at your doorstep.
              </p>


            </div>


          </div>





          <div className="col-md-4 mb-4">


            <div className="card shadow h-100 p-4">


              <h1>⭐</h1>


              <h4>
                Best Quality
              </h4>


              <p>
                Delicious meals at affordable prices.
              </p>


            </div>


          </div>


        </div>


      </div>


    </>

  );

}


export default Home;

