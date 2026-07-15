import { useState } from "react";

import foods from "../data/foods";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";


function Menu() {


  const [search,setSearch] = useState("");


  const filteredFoods = foods.filter((food)=>


    food.name
    .toLowerCase()
    .includes(search.toLowerCase())


  );


  return (

    <div className="container mt-5">


      <h1 className="text-center mb-4">
        Our Menu
      </h1>


      <SearchBar
        search={search}
        setSearch={setSearch}
      />


      <div className="row">


        {
          filteredFoods.map((food)=>(

            <FoodCard
              key={food.id}
              food={food}
            />

          ))
        }


      </div>


    </div>

  );

}


export default Menu;