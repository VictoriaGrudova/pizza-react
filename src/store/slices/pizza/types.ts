export type IPizza = {
    id:number | string; 
    title:string; 
    price:number; 
    imageUrl:string; 
    sizes:number; 
    types:string;
  };
  
export type FetchPizzasArgs = {
    category: string, 
    order: string, 
    sortBy: string, 
    search: string, 
  }
  
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
  }
  
export interface IFetchPizzas {
    items:IPizza[];
    status: Status;
  };