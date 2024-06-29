import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Searched = () => {
  const [Search, setSearch] = useState([]);
  let params = useParams();
  const navigate = useNavigate();

  const getSearch = async (search) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&query=${search}`
    );
    const data = await api.json();
    setSearch(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getSearch(params.search);
    console.log(params.search);
  }, [params.search]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Search.map((r, index) => (
        <div
          key={index}
          className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          onClick={() => {
            console.log("Clicked on", r.title);
            navigate(`/Recipe/${r.id}`);
          }}
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

export default Searched;
