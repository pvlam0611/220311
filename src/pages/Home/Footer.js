import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import "../../styles/base.css";
import "../../styles/grid.css";
import "../../styles/style.css";

export default function Footer() {
  return (
    <div>
      <div>
        <div>
          <img src="./images/logo_title.ico" />
          <h1>TRAVELIX</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna.
          Integer eleme ntum orci eu vehicula pretium.
        </p>
      </div>
      <div>
        <h2>CONTACT INFO</h2>
        <div>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            <a href="https://www.google.com/maps" target="_blank">
              300 Cầu Giấy, Hà Nội
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <a href="tel: 0989008917">+84 989 008 917</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto: vietlam2653@gmail.com">vietlam2653@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEarthAsia} />
            <a href="#" target="_blank">
              http://trungcapchinhtri.edu.vn/
            </a>
          </p>
        </div>
      </div>
      <div>
        <p>Copyright © 2021 By PhamVietLam</p>
      </div>
    </div>
  );
}
