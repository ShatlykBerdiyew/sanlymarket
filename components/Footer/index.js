import Image from "next/image";
import React from "react";
import logo from "../../public/footer_logo.png";

export const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Image src={logo} width={155} height={40} objectFit="contain" />
          <p>©2022 Sanly Market</p>
        </div>
        <div className="footer_servises">
          <ul>
            <li>Магазины</li>
            <li>Объявления</li>
            <li>Услуги</li>
            <li>О нас</li>
          </ul>
        </div>

        <div className="footer_address">
          <ul>
            <li>Asgabat 10 yyl Abadancylyk kocesi jay yazgy aybolek</li>
            <li>sanlymarket</li>
            <li>sanlymarket@gmail.com</li>
          </ul>
        </div>
        <div className="footer_phone_number">
          <ul>
            <li>+993 65 667788</li>
            <li>+993 63 987654</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
