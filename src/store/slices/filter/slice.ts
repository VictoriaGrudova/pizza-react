import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilterSlice, Isort, SortPropertyEnum } from "./types";



const initialState: IFilterSlice = {
  searchValue: '',
  categories: 0,
  sort: {
    name: "popularity",
    sortProperty: SortPropertyEnum.RATING_ASC, 
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categories = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSort: (state, action:PayloadAction<Isort>) => {
      state.sort = action.payload;
    },

  },
});

export const { setCategoryId, setSort, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
