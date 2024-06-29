import React from "react";
import { GiFullPizza, GiHamburger, GiChopsticks } from "react-icons/gi";
import { MdRamenDining } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Category = () => {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-start cursor-pointer space-x-4">
      {/*italien*/}
      <NavLink to={"cuisine/Italian"}>
        <div className="mt-2 flex items-center space-x-2 bg-accent bg-opacity-20 rounded-full p-2">
          <GiFullPizza className="text-2xl text-primary" />
          <p className="text-sm">Italien</p>
        </div>
      </NavLink>

      {/*usa*/}
      <NavLink to={"cuisine/American"}>
        <div className=" mt-2 flex items-center space-x-2 bg-accent bg-opacity-20 rounded-full p-2">
          <GiHamburger className="text-2xl text-primary" />
          <p className="text-sm">Americain</p>
        </div>
      </NavLink>

      {/*thai*/}
      <NavLink to={"cuisine/Thai"}>
        <div className=" mt-2 flex items-center space-x-2 bg-accent bg-opacity-20 rounded-full p-2">
          <MdRamenDining className="text-2xl text-primary" />
          <p className="text-sm">Thai</p>
        </div>
      </NavLink>

      {/*jap*/}
      <NavLink to={"cuisine/Japanese"}>
        <div className=" mt-2 flex items-center space-x-2 bg-accent bg-opacity-20 rounded-full p-2">
          <GiChopsticks className="text-2xl text-primary" />
          <p className="text-sm">Jap</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Category;
