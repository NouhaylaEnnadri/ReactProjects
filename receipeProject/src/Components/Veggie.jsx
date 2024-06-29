import React, { useEffect, useState } from "react";
import PopularCarasoul from "./PopularCarasoul";
import { useNavigate } from "react-router-dom";

const Veggie = () => {
  const navigate = useNavigate();
  const [popular, setPopular] = useState([]);
  const getPopular = async () => {
    const check = localStorage.getItem("vegetarian");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div>
      <h3 className="pb-6 pt-6">Vegetarian picks </h3>
      <div className="carousel carousel-center bg-accent bg-opacity-15 space-x-8   rounded-box  p-2 ">
        {popular.map((r, index) => (
          <PopularCarasoul
            key={index}
            img={r.image}
            text={r.title}
            onClick={() => {
              console.log("Clicked on", r.title); // Debugging statement
              navigate(`/Recipe/${r.id}`);


            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Veggie;
