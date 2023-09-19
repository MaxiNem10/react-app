import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const cartStorageString = localStorage.getItem("cart");

const initialState = [];

export const makeOrder = createAsyncThunk("cart/makeOrder", async (orderData) => {
  return axios.post("http://localhost:1337/api/orders", orderData).then((r) => r.data);
});

export const cartSlice = createSlice({
  name: "cart",
  // initialState: cartStorageString
  //   ? JSON.parse(cartStorageString)
  //   : initialState,
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      let itemToAdd = action.payload;
      let index = state.findIndex((item) => item.food.id === itemToAdd.id);
      if (index >= 0) {
        state[index].qty++;
      } else {
        state.push({ qty: 1, food: itemToAdd });
      }
    },
    clearCart: (state) => {
      state.length = 0;
    },
    increaseItemQty: (state, action) => {
      let index = state.findIndex((item) => item.food.id === action.payload);
      state[index].qty++;
    },
    decreaseItemQty: (state, action) => {
      let index = state.findIndex((item) => item.food.id === action.payload);
      state[index].qty--;
      if (!state[index].qty) state.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(makeOrder.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.length = 0;
    });
    builder.addCase(makeOrder.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(makeOrder.rejected, (state, action) => {
      state.loading = "rejected";
    });
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, increaseItemQty, decreaseItemQty } =
  cartSlice.actions;

export default cartSlice.reducer;