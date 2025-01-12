import { ProductList } from "../ProductList";
import { LayoutContainer } from "./styles";

export const Layout = () => {
  return (
    <LayoutContainer data-testid="layout-container">
      <ProductList></ProductList>
    </LayoutContainer>
  );
};
