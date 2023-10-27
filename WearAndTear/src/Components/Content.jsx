import React from "react";
import { Star,Heart } from "./defaultImages";
import { Best,Hover } from "./defaultText";
function Content(info) {
    return (
      <div className="term">
        <div className="img-container">
          <div className="bestseller-container">
          {info.best}
          </div>
          <img className="image" src={info.img} />
          <Heart />
        </div>
        <div className="spon">{info.spon}</div>
        <div>
          <a href="#" className="title">
            {info.name}
          </a>
        </div>
        <div>
          <p className="color">{info.color}</p>
        </div>
  
        <div className="row">
          <div className="ratingdiv">
            {info.rating}
            <Star />
          </div>
          <div className="avaidiv">({info.availability})</div>
          <div>{info.badge}</div>
        </div>
        <div className="row">
          <div className="costdiv">{info.cost}</div>
          <div className="discountdiv">{info.discount}</div>
          <div className="offerdiv">{info.offer}</div>
        </div>
        <div className="freediv">Free delivery</div>
        <div>{info.save}</div>
        <div>{info.top}</div>
        <Hover />

      </div>
    );
  }
  
export default Content;
