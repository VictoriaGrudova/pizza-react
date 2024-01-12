export enum SortPropertyEnum {
    RATING_DESC = '-rating',
    RATING_ASC = 'rating',
    TITLE_DESC = '-title',
    TITLE_ASC = 'title',
    PRICE_DESC = '-price',
    PRICE_ASC = 'price',
  };
  
export type Isort = {
    name: string;
    sortProperty: SortPropertyEnum,
  }
  
export interface IFilterSlice {
    searchValue: string;
    categories: number;
    sort: Isort;
  }