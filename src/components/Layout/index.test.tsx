import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import productsReducer from "../../store/productsSlice";
import { Layout } from ".";

it("renders component", () => {
  const mockStore = configureStore({
    reducer: {
      products: productsReducer,
    },
  });
  const { container, getByTestId } = render(
    <Provider store={mockStore}>
      <Layout />
    </Provider>
  );

  expect(container).toMatchSnapshot();
  expect(getByTestId("layout-container")).toBeInTheDocument();
});
