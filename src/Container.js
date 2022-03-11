import React from "react";
import Navigations from "./components/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Travels from "./components/travel";
import "./base.css";
import "./grid.css";
import "./style.css";

export default function Container() {
  return (
    <>
      <div>
        <h1>We have the best tours</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
          convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae
          cursus mi hendrerit nec.
        </p>
      </div>
      <div>
        <div>
          <Travels />
        </div>
        <div>
          <h1>MALDIVES DELUXE PACKAGE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae
            cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt
            ultrices, tortor augue gravida lectus, et efficitur enim justo vel
            ligula.
          </p>
          <button>BOOK NOW ...</button>
        </div>
      </div>
      <div className="message__image">
        <div className="message__form">
          <h1>GET IN TOUCH</h1>
          <div>Name</div>
          <div>E-mail</div>
          <div>Subject</div>
          <div>Message</div>
          <input SEND MESSAGE />
        </div>
      </div>
    </>
  );
}
