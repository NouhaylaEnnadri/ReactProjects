import React from "react";
import DarkLight from "./DarkLight";

import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar pt-6 bg-opacity-5 rounded-full ">
        <div className="flex-1 pt-2">
          <Link to={"/"}>
            <div className="flex items-center">
              <GiKnifeFork className="text-2xl" />
              <span className="ml-1 text-xl italic">delicous</span>
            </div>
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
