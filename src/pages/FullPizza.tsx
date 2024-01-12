import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { addItem } from "../store/slices/cart/slice";
import { ICartItem } from "../store/slices/cart/types";
import { useAppDispatch } from "../store";


const FullPizza: React.FC = () => {
  const {id} = useParams();

  const typeNames = ['thin','traditional'];
    
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const [pizza, setPizza] = useState<{
    id:number
    imageUrl:string;
    title:string;
    description:string;
    price:number;
    types:number[];
    sizes:number[];
  }>({
    id:0,
    imageUrl:'',
    title:'',
    description:'',
    price:0,
    types:[],
    sizes:[],
  });

  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    const item = {
      count:0,
      imageUrl:pizza.imageUrl,
      title:pizza.title,
      price:pizza.price,
      types: typeNames[activeType],
      sizes: pizza.sizes[activeSize],
    }
    dispatch(addItem(item as ICartItem))
  };

  useEffect(() => {
    async function fetchPizza(){
        try{
           const {data} = await axios.get('https://64f22b280e1e60602d24d894.mockapi.io/pizzas/' + id);
           setPizza(data);
        }catch(error){
            alert('ERROR')
        }
    }
    fetchPizza();
  },[]);

  if(pizza.price === 0){
    return <h2 style={{textAlign:"center"}}>loading...</h2>
  }

  return (
    <div className="fullPizzaContainer">
      <img src={pizza.imageUrl} className="pizzaImage"/>
      <div className="pizzaInfo">
        <h2>{pizza.title}</h2>
        <p>
          {pizza.description}
        </p>
        <h4>{pizza.price}$</h4>
        {<div className="pizza-block__selector">
          <ul>
            {pizza.types.map((type) => <li
                key={type}
                onClick={() => setActiveType(type)}
                className={activeType === type? 'active' : ''}
            >{typeNames[type]}</li>)}
          </ul>
          <ul>
            {pizza.sizes.map((size,indx) => <li
                key={size}
                onClick={() => setActiveSize(indx)}
                className={activeSize === indx ? 'active' : ''}
            >{size} см. </li>)}
          </ul>
        </div>}
        <div className="cart__bottom-buttons">
        <Link to="/" className="button button--outline button--add go-back-btn">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Come back</span>
        </Link>
        <button onClick={onClickAdd} className="button pay-btn"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullPizza;
