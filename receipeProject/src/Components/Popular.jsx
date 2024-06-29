import React, { useEffect, useState } from "react";
import PopularCarasoul from "./PopularCarasoul";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate();

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div>
      <h3 className="pb-6 pt-6">Popular picks </h3>
      <div className="carousel carousel-center bg-primary bg-opacity-15  rounded-box space-x-8    p-2">
        {popular.map((r, index) => (
          <PopularCarasoul
            key={index}
            img={r.image}
            text={r.title}
            onClick={() => {
              console.log("Clicked on", r.title);
              navigate(`/Recipe/${r.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
