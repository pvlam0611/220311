import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

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
        <ul>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <a href="https://www.google.com/maps" target="_blank">
              300 Cầu Giấy, Hà Nội
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <a href="tel: 0989008917">+84 989 008 917</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto: vietlam2653@gmail.com">vietlam2653@gmail.com</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEarthAsia} />
            <a href="#" target="_blank">
              http://trungcapchinhtri.edu.vn/
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>Copyright © 2021 By PhamVietLam</p>
      </div>
    </div>
  );
}
