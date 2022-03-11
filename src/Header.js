import React from "react";
import Navigations from "./components/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./base.css";
import "./grid.css";
import "./style.css";

export default function Header() {
  return (
    <>
      <div>
        <div>
          <img src="./images/logo_title.ico" />
          <h1>TRAVELIX</h1>
        </div>
        <div className="home__navigations">
          <Navigations />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <br />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="home__background">
          <h1> Discover</h1>
          <h1>the world</h1>
        </div>
      </div>
    </>
  );
}
