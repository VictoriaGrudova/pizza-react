import { ICartItem } from "../store/slices/cart/types";

export const calcTotalPrice = (items:ICartItem[]) => {
    return Math.floor(
      items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0) * 100
    ) / 100;
};