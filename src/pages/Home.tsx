import React, { useCallback } from "react";
import { useEffect } from "react";
import qs from 'qs';
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCategories,   
         selectSearchValue,
         selectSort,
} from "../store/slices/filter/selectors";
  
import { setCategoryId } from "../store/slices/filter/slice";
import { fetchPizzas } from "../store/slices/pizza/slice";
import { getPizzas } from "../store/slices/pizza/selectors";
import { useAppDispatch } from "../store";
import {  HeroSection, 
          NotFoundBlock, 
          Sort, PizzaBlock, 
          Skeleton, 
          Categories
        } from "../components"; 


export const Home:React.FC = () => {
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);
  const sort = useSelector(selectSort);
  const searchValue = useSelector(selectSearchValue);
  const { items, status } = useSelector(getPizzas);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty:sort.sortProperty,
      categories,
    });
    navigate(`?${queryString}`)
  },[categories, sort, searchValue])

  const onChangeCat = useCallback((i:number) => {
    dispatch(setCategoryId(i));
  },[])

  const getPizza = () => {
    const category = categories > 0 ? `category=${categories}` : "";
    const order = sort.sortProperty.includes('-') ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        category,
        order,
        sortBy,
        search
      })
    );


  };

  useEffect(() => {
    getPizza();
  }, [categories, sort, searchValue]);

  const pizzas = items
    .filter((pizza:any) => {
      return (
        pizza.title.toLowerCase().includes(searchValue.toLowerCase()) ?? true
      );
    })
    .map((pizza:any) => <PizzaBlock key={pizza.id} {...pizza} />);

  const skeleton = [...new Array(6)].map((_, id) => <Skeleton key={id} />);

  return (
    <div className="container">
      <HeroSection/>
      <div className="content__top">
        <Categories
          value={categories}
          onChangeCategories={onChangeCat}
        />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {status === "error" ? (
        <NotFoundBlock/>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeleton : pizzas}
        </div>
      )}
    </div>
  );
};
