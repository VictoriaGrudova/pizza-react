import { RootState } from "../..";

export const selectSort = (state: RootState) => state.filter.sort;
export const selectSearchValue = (state: RootState) => state.filter.searchValue;
export const selectCategories = (state: RootState) => state.filter.categories;