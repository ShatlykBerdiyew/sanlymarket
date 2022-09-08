import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import arrRigth from "../../public/array_rigth.png";
import { Card } from "../Card";

export const ProductView = () => {
  const testProducts = useSelector((state) => state.home.discount_products);

  return (
    <div className="product_view">
      <div className="product_view__head">
        <div className="product_view__title">Azyk harytlary</div>
        <div className="product_view__seeAll">
          Hemmesini gor{" "}
          <Image src={arrRigth} width={15} height={10} objectFit="contain" />
        </div>
      </div>
      <div className="product_view__main">
        {testProducts?.length > 0 &&
          testProducts.map((item) => (
            <Card
              key={item.id}
              img={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};
