import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  to?:string;
  className?:string;
  activeClassName?:boolean;
  inactiveClassName?:boolean;
  exact?:string; 
  sitelink?:string;
  alt?:string;
  title?:string;
  target?:string;
  onClick?: Function, 
}

export const Navbar: React.FC<NavbarProps> = ({
  to,
  className,
  activeClassName,
  inactiveClassName,
  exact,
  sitelink,
  alt,
  title,
  target,
  onClick,
  ...rest
}): JSX.Element => {
  let location = useLocation();
  let isActive = location.pathname === to;
  let allClassName = className + (isActive ? ` ${activeClassName} ` : ` ${inactiveClassName} `);

  return <Link className={allClassName} to={to} alt={alt} title={title} onClick={onClick} {...rest}>
       {sitelink}
  </Link>;
};
