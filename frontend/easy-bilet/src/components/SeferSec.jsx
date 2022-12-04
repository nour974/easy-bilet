import React from "react";
import { Link } from "react-router-dom";
import SeferCard from "./SeferCard";

function SeferSec() {
  return (
    <div>
      <div className="mb-3">
        <Link to={'../'} style={{ width: "161px" }} className="btn btn-danger">
          geri gel
        </Link>
      </div>
      <div>
        {
            [1,2,3,4,5,6,7].map(e=> <div className="mt-3"><SeferCard/></div>)
        }
     
      </div>
    </div>
  );
}

export default SeferSec;
