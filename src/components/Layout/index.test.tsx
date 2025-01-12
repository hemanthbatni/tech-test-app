import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import { Layout } from ".";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.spyOn(global.console, "error").mockImplementation();

it("renders component", () => {
  const initialState = { products: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const { container, getByTestId } = render(
    <Provider store={store}>
      <Layout />
    </Provider>
  );

  expect(container).toMatchSnapshot();
  expect(getByTestId("layout-container")).toBeInTheDocument();
});
