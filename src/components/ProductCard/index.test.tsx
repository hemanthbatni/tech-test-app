import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import { ProductCard } from ".";
import { productsMock } from "../../data/mockData";

jest.spyOn(global.console, "error").mockImplementation();

it("renders component", () => {
  const product = productsMock.data.search.products[0];
  const { container, getByTestId } = render(<ProductCard product={product} />);

  expect(container).toMatchSnapshot();
  expect(getByTestId("show-product-details")).toBeInTheDocument();
});

it("renders correct on sale product details", () => {
  const product = productsMock.data.search.products[0];
  const { container, getByTestId } = render(<ProductCard product={product} />);

  expect(getByTestId("show-product-details")).toBeInTheDocument();
  expect(getByTestId("product-tag").innerHTML).toEqual("sale");
  expect(getByTestId("product-name").innerHTML).toEqual(
    "Prohibition Liquor Company"
  );
  expect(getByTestId("product-was-cash-price").innerHTML).toEqual("$200");
  expect(getByTestId("product-current-cash-price").innerHTML).toEqual("$119");
  expect(getByTestId("product-was-points-price").innerHTML).toEqual(
    "25000 PTS"
  );
  expect(getByTestId("product-current-points-price").innerHTML).toEqual(
    "15000 PTS"
  );
  expect(getByTestId("add-to-cart-button")).toBeInTheDocument();
  expect(getByTestId("add-to-cart-button")).toBeEnabled();
});

it("renders correct normal product details", () => {
  const product = productsMock.data.search.products[2];
  const { container, getByTestId } = render(<ProductCard product={product} />);

  expect(getByTestId("show-product-details")).toBeInTheDocument();
  expect(getByTestId("product-was-cash-price").innerHTML).toEqual(" ");
  expect(getByTestId("product-was-points-price").innerHTML).toEqual(" ");
});
