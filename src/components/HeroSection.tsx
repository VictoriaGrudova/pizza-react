import React from "react";
import pizzaHero from "../assets/img/kisspng-sausage-pizza-margherita-hamburger-calzone-sausage-pizza-5a7f9cdf698d78.5827570315183126714324.png";
import leef from "../assets/img/shape-6.png";

const HeroSection:React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <p className="hero-subtitle">Eat And Savor </p>
        <h2>Supper delicious Pizza in town!</h2>
        <p className="hero__text">
          Savor the perfect blend of cheesy goodness and delectable toppings on
          our mouthwatering pizza, offering a bite-sized taste of culinary
          bliss!
        </p>
      </div>
      <div className="hero__banner">
        <img src={pizzaHero} />
        <img src={leef} className="shape move-anim" />
      </div>
    </div>
  );
};

export default HeroSection;
