import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productList.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
} from "./productsSlice";
import { ProductCard } from "../ProductCard";

export const ProductList = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const produtsStatus = useAppSelector(selectProductsStatus);
  const produtsError = useAppSelector(selectProductsError);

  useEffect(() => {
    if (produtsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [produtsStatus, dispatch]);

  return (
    <div data-testid="slider-container" className="slider-container">
      <Slider {...settings}>
        {products?.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </Slider>
    </div>
  );
};
