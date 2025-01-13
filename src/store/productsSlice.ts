import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { createAppAsyncThunk } from "../app/withTypes";
import { productsMock } from "../mock/mockData";

// Define a type for the slice state
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: string | null;
  wasPrice?: {
    cashPrice: {
      currencyCode: string;
      amount: number;
    };
    pointsPrice: {
      amount: number;
    };
  };
  currentPrice: {
    cashPrice: {
      currencyCode: string;
      amount: number;
    };
    pointsPrice: {
      amount: number;
    };
  };
}

export interface ProductsState {
  products: Product[];
  status: "idle" | "pending" | "succeeded" | "rejected";
  error: string | null;
}

export const fetchProducts = createAppAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data: Product[] = productsMock.data.search.products;
    return data;
  },
  {
    condition(arg, thunkApi) {
      const postsStatus = selectProductsStatus(thunkApi.getState());
      if (postsStatus !== "idle") {
        return false;
      }
    },
  }
);

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Save the fetched posts into state
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message ?? "Unknown Error";
      });
  },
});

export default productsSlice.reducer;

export const selectAllProducts = (state: RootState) => state.products.products;

export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectProductsError = (state: RootState) => state.products.error;
