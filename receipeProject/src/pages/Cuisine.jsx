import React, { useEffect, useState } from "react";
import { Category, Nav, Search } from "../Components";
import { useParams, useNavigate } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const getCuisine = async (cuisineType) => {
    const check = localStorage.getItem(`cuisine-${cuisineType}`);
    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_API_KEY
        }&cuisine=${cuisineType}`
      );
      const data = await api.json();
      localStorage.setItem(`cuisine-${cuisineType}`, JSON.stringify(data.results));
      setCuisine(data.results);
      console.log(data.results);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cuisine.map((r, index) => (
        <div
          onClick={() => {
            console.log("Clicked on", r.title);
            navigate(`/Recipe/${r.id}`);
          }}
          key={index}
          className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <img src={r.image} className="rounded-box w-full" alt={r.title} />
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center p-4">
            <h2 className="bg-accent bg-opacity-20 text-white p-2 rounded-sm text-xs sm:text-sm md:text-sm lg:text-xs xl:text-xs font-medium truncate">
              {r.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cuisine;
