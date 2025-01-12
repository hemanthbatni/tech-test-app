import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import { ProductList } from ".";
import { productsMock } from "../../data/mockData";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.spyOn(global.console, "error").mockImplementation();

it("renders component", () => {
  const initialState = { products: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const product = productsMock.data.search.products[0];
  const { container, getByTestId } = render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );

  expect(container).toMatchSnapshot();
  expect(getByTestId("slider-container")).toBeInTheDocument();
});
