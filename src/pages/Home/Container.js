import React from "react";
import Travels from "../../components/travel";
import Offers from "../../components/offer";
import Comments from "../../components/comment";
import "../../styles/base.css";
import "../../styles/grid.css";
import "../../styles/style.css";

export default function Container() {
  return (
    <>
      <div className="home__background">
        <h1> Discover</h1>
        <h1>the world</h1>
        <button>explore now...</button>
      </div>
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
        <div>
          <h1>THE BEST OFFERS WITH ROOMS</h1>
          <div>
            <Offers />
          </div>
        </div>
        <div>
          <h1>WHAT OUR CLIENTS SAY ABOUT US</h1>
          <Comments />
        </div>
      </div>
      <div className="message__image">
        <div className="message__form">
          <h1>GET IN TOUCH</h1>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Message" />
          <button> SEND MESSAGE </button>
        </div>
      </div>
    </>
  );
}
