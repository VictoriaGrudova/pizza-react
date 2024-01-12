import React from 'react';

type ICategories = {
  value:number,
  onChangeCategories: (index:number) => void
};

const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Mix'];

const Categories:React.FC<ICategories> = React.memo(({value, onChangeCategories}) => {

    return (
      <div className="categories">
        <ul>
          {
            categories.map((cat, index) => 
              <li 
                key={cat}
                onClick={() => onChangeCategories(index)} 
                className={value === index ? 'active' : ''}
              >{cat}
              </li>)
          }
        </ul>
      </div>
    );
  })

export default Categories  