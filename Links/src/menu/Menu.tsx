import React, { ComponentType, ReactComponentElement } from "react";

interface Link {
  link: string;
  name: string;
  children?: React.ReactNode;
}
//Czy ja musze dodawac to children do interfejsu? Jest jakas inna opcja?
const Menu = ({ name, link }: Link) => {
  return (
    <div data-name={name} data-link={link}>
      {name.toUpperCase()}
    </div>
  );
};

export default Menu;
