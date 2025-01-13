import React from "react";
import { Product } from "../../store/productsSlice";
import {
  CurrentPointsPrice,
  CurrentPrice,
  ImageContainer,
  PointsActionContainer,
  PointsPriceContainer,
  ProductImage,
  WasPointsPrice,
  WasPrice,
  CurrentPointsContainer,
  ProductContainer,
  AddButton,
  CashPriceContainer,
  ProductTagContainer,
  ProductTag,
  ProductLabel,
  ProductName,
  ProductDescription,
  ProductLink,
} from "./styles";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const addProductToCart = (product: Product) => {
    // dispatch add to cart
  };

  const showProductDetails = (product: Product) => {
    // dispatch show product details
  };

  return (
    <ProductContainer>
      <ProductLink
        data-testid="show-product-details"
        aria-label="click to view product details"
        onClick={() => showProductDetails(product)}
      >
        <ProductTagContainer>
          {product.tag ? (
            <ProductTag data-testid="product-tag">{product.tag}</ProductTag>
          ) : (
            ""
          )}
        </ProductTagContainer>
        <ProductLabel>
          <ProductName data-testid="product-name">{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductLabel>
        <ImageContainer>
          <ProductImage src={product.image} />
        </ImageContainer>
        <CashPriceContainer>
          <WasPrice
            aria-hidden={product.wasPrice ? false : true}
            data-testid="product-was-cash-price"
          >
            {product.wasPrice ? `$${product.wasPrice.cashPrice.amount}` : " "}
          </WasPrice>
          <CurrentPrice
            data-testid="product-current-cash-price"
            product={product}
          >
            ${product.currentPrice.cashPrice.amount}
          </CurrentPrice>
        </CashPriceContainer>
        <PointsActionContainer>
          <PointsPriceContainer>
            <CurrentPointsContainer>
              <span>Or</span>
              <CurrentPointsPrice
                data-testid="product-current-points-price"
                product={product}
              >
                {product.currentPrice.pointsPrice.amount} PTS
              </CurrentPointsPrice>
            </CurrentPointsContainer>
            <WasPointsPrice
              aria-hidden={product.wasPrice ? false : true}
              data-testid="product-was-points-price"
            >
              {product.wasPrice
                ? `${product.wasPrice.pointsPrice.amount} PTS`
                : " "}
            </WasPointsPrice>
          </PointsPriceContainer>
          <div>
            <AddButton
              data-testid="add-to-cart-button"
              aria-label="click to add product to cart"
              onClick={(e) => {
                e.stopPropagation();
                addProductToCart(product);
              }}
            >
              <div>
                <p>ADD</p>
              </div>
            </AddButton>
          </div>
        </PointsActionContainer>
      </ProductLink>
    </ProductContainer>
  );
};
