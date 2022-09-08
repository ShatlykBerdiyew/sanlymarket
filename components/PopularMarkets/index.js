import Image from "next/image";
import React from "react";
import marker1 from "../../public/popular_market_1.png";
import marker2 from "../../public/popular_markets_2.png";
import marker3 from "../../public/popular_markets_3.png";
import marker4 from "../../public/popular_markets_4.png";

export const PopularMarkets = () => {
    return(<div className="popular_markets">
        <div className="popular_markets__title">Popular Magazinlar</div>
        <div className="popular_markets__main">
            <div className="popular_markets__item">
                <Image src={marker1} layout="responsive" />
            </div>
            <div className="popular_markets__item">
                <Image src={marker2} layout="responsive" />
            </div>
            <div className="popular_markets__item">
                <Image src={marker3} layout="responsive" />
            </div>
            <div className="popular_markets__item">
                <Image src={marker4} layout="responsive" />
            </div>
            <div className="popular_markets__item">
                <Image src={marker1} layout="responsive" />
            </div>
            <div className="popular_markets__item">
                <Image src={marker2} layout="responsive" />
            </div>
            <div className="popular_markets__item">
                <Image src={marker3} layout="responsive" />
            </div>
            <div className="popular_markets__item">
                <Image src={marker4} layout="responsive" />
            </div>
        </div>
        <div className="popular_markets__see_all">
            <div className="btn_see_all">
            Показать все
            </div>
        </div>
    </div>);
}