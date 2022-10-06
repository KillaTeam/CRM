import { React, useState } from "react";
import "../scss/ButtonNav.scss";
import local from "../assets/local.ts";
import { NavLink } from 'react-router-dom';


const ButtonNav = () => {
  const [btnState, setBtnState] = useState(false);

  const svg = local.svg.map((unit) => unit);
  const to = local.to.map((unit)=>unit);

  let togleClassCheck = btnState ? " active" : ' common';
  let togleFillCheck = 'black';

  return (
    <div className="container">
      {local.buttons.map((name, index) => (
        <NavLink className={`btn${togleClassCheck}`} to={to[index]} key={index}>
          <img src={svg[index]} className='img__big margin'  alt="SVG" fill={togleFillCheck} stroke={togleFillCheck} />
          {name}
          { console.log(index)}
        </NavLink>
      ))}
      
    </div>
  );
};

export default ButtonNav;