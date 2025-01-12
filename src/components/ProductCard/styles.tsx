import styled from "@emotion/styled";

export const ProductLink = styled.a`
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 300px;
  background-color: #fafafa;
  padding: 20px 10px;
  position: relative;
`;

export const ProductTagContainer = styled.div`
  height: 26px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProductTag = styled.span`
  background-color: #bff4f2;
  font-family: Ciutadella-Regular, sans-serif;
  padding: 0px 12px;
  font-size: 14px;
  border-bottom-right-radius: 10px;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 26px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  color: #1f3537;
`;

export const ProductLabel = styled.div`
  padding: 10px;
`;

export const ProductName = styled.h4`
  font-family: Ciutadella-Regular, sans-serif;
  margin: 0px auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  overflow: hidden;
  font-size: 18px;
  font-weight: bold;
  color: #777777;
  line-height: 27px;
`;

export const ProductDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #777777;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 260px;
  height: 240px;
  padding: 20px;
`;

export const ProductImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  mix-blend-mode: multiply;
`;

export const WasPrice = styled.div`
  font-family: Ciutadella-Regular, sans-serif;
  text-decoration: line-through;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #636363;
  height: 21px;
`;

export const CurrentPrice = styled.div(
  (props: any) => `
    font-family: Ciutadella-Regular, sans-serif;
    font-size: 24px;
    line-height: 21px;
    font-weight: 500;
    color: ${props.product.wasPrice ? "#c03533" : "#6F6F6F"};
  `
);

export const CashPriceContainer = styled.div`
  padding: 10px;
`;

export const PointsActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  padding: 10px;
`;

export const PointsPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const CurrentPointsContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Ciutadella-Regular, sans-serif;
  font-size: 14px;
  line-height: 21px;
`;

export const WasPointsPrice = styled.div`
  font-family: Ciutadella-Regular, sans-serif;
  text-decoration: line-through;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #636363;
  height: 21px;
`;

export const CurrentPointsPrice = styled.div(
  (props: any) => `
    font-family: Ciutadella-Regular, sans-serif;
    font-size: 16px;
    line-height: 21px;
    font-weight: bold;
    margin-left: 12px;
    color: ${props.product.wasPrice ? "#c03533" : "#6F6F6F"};
  `
);

export const AddButton = styled.button`
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  height: 45px;
  width: 63px;
  background-color: #c03533;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
`;
