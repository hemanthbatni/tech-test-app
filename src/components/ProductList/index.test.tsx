import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import productsReducer from "../../store/productsSlice";
import { ProductList } from ".";

it("renders component", () => {
  const mockStore = configureStore({
    reducer: {
      products: productsReducer,
    },
  });

  const { container, getByTestId } = render(
    <Provider store={mockStore}>
      <ProductList />
    </Provider>
  );

  expect(container).toMatchSnapshot();
  expect(getByTestId("slider-container")).toBeInTheDocument();
});
