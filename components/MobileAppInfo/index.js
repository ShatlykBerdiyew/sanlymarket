import React from "react";

import fonImage from "../../public/Phone1.png";
import appStore from "../../public/App_store.png";
import googlePlay from "../../public/Google_play.png";
import barcode from "../../public/barcode_1.png";
import Image from "next/image";

export const MobileAppsInfo = () => {
  return (
    <div className="mobileAppsInfo">
      <div className="mobileAppsInfo__img">
        <Image src={fonImage} width={296} height={300} objectFit="contain" />
      </div>
      <div className="mobileAppsInfo__store">
        <p>Наше мобильное приложение</p>
        <div className="mobileAppsInfo__store_apps">
          <Image src={appStore} width={155} height={50} objectFit="contain" />
          <Image src={googlePlay} width={155} height={50} objectFit="contain" />
        </div>
      </div>
      <div className="mobileAppsInfo__barcode">
        <Image src={barcode} width={146} height={146} objectFit="contain" />
      </div>
    </div>
  );
};
