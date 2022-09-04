import Image from "next/image";
import React from "react";
import SanlyMarkerLogo from "../../public/SanlyMarket-Logo.png";
import menuIcon from "../../public/menu_icon.png";
import searchIcon from "../../public/find_icon.png";
import likeIcon from "../../public/like_icon.png";
import cartIcon from "../../public/cart_icon.png";
import arrowDown from "../../public/array_down.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__line_1">
        <div className="header__line_1__sec1">
          <Image
            src={SanlyMarkerLogo}
            width={115}
            height={30}
            objectFit="contain"
          />
          <div className="category_btn_section">
            <div className="category_btn">
              <Image src={menuIcon} width={18} height={12} />
              <span>Категории</span>
            </div>
          </div>
        </div>
        <div className="header__line_1__sec2">
          <input type="text" placeholder="Поиск" />
          <Image src={searchIcon} width={18} height={18} objectFit="contain" />
        </div>
        <div className="header__line_1__sec3">
          <div className="header__line_1__sec3__group_1">
            <div className="sing-in_btn">Вход</div>
            <div className="header__line_1__sec3_icons">
              <Image
                src={likeIcon}
                width={18}
                height={15}
                objectFit="contain"
              />
              <Image
                src={cartIcon}
                width={21}
                height={21}
                objectFit="contain"
              />
            </div>
          </div>

          <div className="language_btn">
            <span>TM</span>
            <Image src={arrowDown} width={15} height={8} objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="header__line_2">
        <div className="header__line_2__sec1">
          <div className="language_btn">
            <span>Ашхабад</span>
            <Image src={arrowDown} width={15} height={8} objectFit="contain" />
          </div>
        </div>
        <div className="header__line_2__sec2">
          <div className="nav_link_item border_bottom_green">Магазины</div>
          <div className="nav_link_item">Объявления</div>
          <div className="nav_link_item">Услуги</div>
          <div className="nav_link_item">Requests</div>
        </div>
        <div className="header__line_2__sec3"></div>
      </div>
    </div>
  );
};
