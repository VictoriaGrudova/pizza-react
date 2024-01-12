export type ICartItem = {
    id:number,
    title:string,
    price:number,
    imageUrl:string,
    sizes: number,
    types: string,
    count:number, 
    description?:string
}

export interface ICartSliceState {
  totalPrice: number,
  items: ICartItem[],
}