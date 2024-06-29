import React, { useEffect, useState } from "react";
import { MdOutlineLocationSearching } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  let param = useParams();
  const navigate = useNavigate();
  useEffect(() => {}, [input]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("input", { input });
      navigate(`/search/${input}`);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative w-full max-w-2xl">
        <input
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          type="text"
          placeholder="Search ..."
          className="input input-bordered input-accent w-full pl-12 py-2 text-lg"
          style={{ paddingLeft: "3rem" }}
        />
        <MdOutlineLocationSearching
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"
          size={24}
        />
      </div>
    </div>
  );
};

export default Search;
