import React, { useState } from "react";

import { mail, 
         mailGif, 
         telephone, 
         telephoneGif, 
         hours, 
         hoursGif, 
         addressPizza, 
         addressPizzaGif 
        } from "../assets";
        
import FooterItems from "./FooterItems";

export interface IIcon {
  default:string,
  hover:string
}

export interface IIcons {
  adress: IIcon,
  workingHours:IIcon,
  telephone:IIcon,
  mail:IIcon
}

const Footer:React.FC = () => {
  const icons:IIcons = {
    adress: {
      default:addressPizza,
      hover:addressPizzaGif
    },
    workingHours: {
      default:hours,
      hover:hoursGif
    },
    telephone: {
      default:telephone,
      hover:telephoneGif
    },
    mail: {
      default:mail,
      hover:mailGif
    }
  };
  
  const [addressSrc, setAddressSrc] = useState(icons.adress.default);
  const [hoursSrc, setHourssSrc] = useState(icons.workingHours.default);
  const [telephoneSrc, setTelephonesSrc] = useState(icons.telephone.default);
  const [mailSrc, setMailSrc] = useState(icons.mail.default);

  return (
    <footer className="footer">
      <div className="bottombar">
        <FooterItems icon={icons.adress} address={addressSrc} setAddress={setAddressSrc}/>
        <FooterItems icon={icons.workingHours} address={hoursSrc} setAddress={setHourssSrc}/>
        <FooterItems icon={icons.telephone} address={telephoneSrc} setAddress={setTelephonesSrc}/>
        <FooterItems icon={icons.mail} address={mailSrc} setAddress={setMailSrc}/>
      </div>
    </footer>
  );
};

export default Footer;
