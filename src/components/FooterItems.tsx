import React, { SetStateAction } from "react";
import { IIcon } from "./Footer";

interface IFooterItemProps {
  icon:IIcon,
  address:string,
  setAddress: React.Dispatch<SetStateAction<string>>
}

const FooterItems: React.FC<IFooterItemProps> = ({icon, address, setAddress}) => {
  return (
    <div className="bottombar__item">
      <div className="icon">
        <img
          src={address}
          onMouseOver={() => setAddress(icon.hover)}
          onMouseLeave={() => setAddress(icon.default)}
          alt="address"
        />
      </div>
      <span>
        Restaurant St, Delicious City, <br /> London 9578, UK
      </span>
    </div>
  );
};

export default FooterItems;
