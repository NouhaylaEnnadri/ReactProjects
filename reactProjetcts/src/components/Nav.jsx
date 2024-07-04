import React from "react";
import DarkLight from "./DarkLight";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-primary bg-opacity-45 rounded-full ">
        <div className="flex-1 pl-4">
          <Link to={"/"}>
            <span className="text-2xl italic">Noyl</span>
          </Link>
        </div>

        <div className="flex-none ">
          <DarkLight />
        </div>
      </div>
    </div>
  );
};

export default Nav;
