import React, { useState } from "react";
import { GiFullPizza, GiHamburger, GiChopsticks } from "react-icons/gi";
import { MdRamenDining } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-start cursor-pointer space-x-4">
      {/* Italian */}
      <NavLink
        to="/cuisine/Italian"
        className={({ isActive }) =>
          `mt-2 flex items-center space-x-2 bg-opacity-20 rounded-full p-2 ${
            isActive ? "bg-primary " : "bg-accent "
          }`
        }
      >
        <GiFullPizza className="text-2xl" />
        <p className="text-sm">Italian</p>
      </NavLink>

      {/* American */}
      <NavLink
        to="/cuisine/American"
        className={({ isActive }) =>
          `mt-2 flex items-center space-x-2 bg-opacity-20 rounded-full p-2 ${
            isActive ? "bg-primary " : "bg-accent "
          }`
        }
      >
        <GiHamburger className="text-2xl" />
        <p className="text-sm">American</p>
      </NavLink>

      {/* Thai */}
      <NavLink
        to="/cuisine/Thai"
        className={({ isActive }) =>
          `mt-2 flex items-center space-x-2 bg-opacity-20 rounded-full p-2 ${
            isActive ? "bg-primary " : "bg-accent "
          }`
        }
      >
        <MdRamenDining className="text-2xl" />
        <p className="text-sm">Thai</p>
      </NavLink>

      {/* Japanese */}
      <NavLink
        to="/cuisine/Japanese"
        className={({ isActive }) =>
          `mt-2 flex items-center space-x-2 bg-opacity-20 rounded-full p-2 ${
            isActive ? "bg-primary " : "bg-accent "
          }`
        }
      >
        <GiChopsticks className="text-2xl" />
        <p className="text-sm">Japanese</p>
      </NavLink>
    </div>
  );
};

export default Category;
