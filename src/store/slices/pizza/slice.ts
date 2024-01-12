import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchPizzasArgs, IFetchPizzas, IPizza, Status } from "./types";



export const fetchPizzas = createAsyncThunk<IPizza[], FetchPizzasArgs>(
  "pizzas/fetchPizzasStatus",
  async(params) => {
    const { category, order, sortBy, search } = params;
    const res = await axios.get(
      `https://64f22b280e1e60602d24d894.mockapi.io/pizzas?&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return res.data;
  }
);

const initialState:IFetchPizzas = {
  items: [],
  status: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IPizza[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
        state.items = [];
        state.status = Status.LOADING;
      });
    builder.addCase(fetchPizzas.fulfilled, (state, action:PayloadAction<IPizza[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      });
    builder.addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      })

  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;