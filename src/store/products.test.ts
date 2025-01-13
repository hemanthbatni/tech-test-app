import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
  Product,
  ProductsState,
} from "./productsSlice";
import { productsMock } from "../mock/mockData";

const mockProducts: Product[] = productsMock.data.search.products;

describe("productsSlice reducer", () => {
  const initialState: ProductsState = {
    products: [],
    status: "idle",
    error: null,
  };

  it("should return the initial state", () => {
    expect(productsReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle fetchProducts.pending", () => {
    const action = { type: fetchProducts.pending.type };
    const state = productsReducer(initialState, action);
    expect(state.status).toBe("pending");
  });

  it("should handle fetchProducts.fulfilled", () => {
    const action = {
      type: fetchProducts.fulfilled.type,
      payload: mockProducts,
    };
    const state = productsReducer(initialState, action);
    expect(state.status).toBe("succeeded");
    expect(state.products).toEqual(mockProducts);
  });

  it("should handle fetchProducts.rejected", () => {
    const action = {
      type: fetchProducts.rejected.type,
      error: { message: "Error message" },
    };
    const state = productsReducer(initialState, action);
    expect(state.status).toBe("rejected");
    expect(state.error).toBe("Error message");
  });
});

describe("fetchProducts async thunk", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        products: productsReducer,
      },
    });
  });

  it("should dispatch pending, fulfilled and update the state", async () => {
    // Check initial state
    let state: ProductsState = store.getState().products;
    expect(state.status).toBe("idle");
    expect(state.products).toEqual([]);

    // Dispatch async thunk
    await store.dispatch(fetchProducts());

    // Check the updated state after fetch
    state = store.getState().products;
    expect(state.status).toBe("succeeded");
    expect(state.products).toEqual(mockProducts);
  });

  it('should not dispatch fetchProducts if status is not "idle"', async () => {
    // Manually set the status to "pending"
    store.dispatch({ type: fetchProducts.pending.type });

    const action = await store.dispatch(fetchProducts());
    const state = store.getState().products;
    expect(state.status).toBe("pending");
    expect(action.meta.requestStatus).toBe("rejected");
  });
});

describe("productsSlice selectors", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        products: productsReducer,
      },
    });
  });

  it("selectAllProducts should return the list of products", () => {
    // Set state with some products
    store.dispatch({
      type: fetchProducts.fulfilled.type,
      payload: mockProducts,
    });

    const products = selectAllProducts(store.getState());
    expect(products).toEqual(mockProducts);
  });

  it("selectProductsStatus should return the current status", () => {
    store.dispatch({ type: fetchProducts.pending.type });

    const status = selectProductsStatus(store.getState());
    expect(status).toBe("pending");
  });

  it("selectProductsError should return the error message", () => {
    store.dispatch({
      type: fetchProducts.rejected.type,
      error: { message: "Error message" },
    });

    const error = selectProductsError(store.getState());
    expect(error).toBe("Error message");
  });
});
