import Image from "next/image";
import React from "react";

import cart_icon from "../../public/cart_icon.png";

export const Card = ({ img, title, price }) => {
  return (
    <div className="card">
      <div className="card__img">
        <Image src={img} width={220} height={220} objectFit="contain" />
      </div>
      <div className="card__info">
        <div className="card__title">{title}</div>
        <div className="card__price">
          {price}TMT
          <div className="cart_icon">
            <Image src={cart_icon} layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};
