import React from "react";
import Navigations from "../../components/navigation";
import Search from "../../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../../styles/base.css";
import "../../styles/grid.css";
import "../../styles/style.css";

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
          <Search />
        </div>
      </div>
    </>
  );
}
