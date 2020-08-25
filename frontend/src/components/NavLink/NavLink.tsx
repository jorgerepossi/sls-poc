import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavLink = ({
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
}: NavbarProps): JSX.Element => {
  let location = useLocation();
  let isActive = location.pathname === to;
  let allClassName =
    className + (isActive ? ` ${activeClassName} ` : ` ${inactiveClassName} `);

  return (
    <Link
      className={allClassName}
      to={to}
      alt={alt}
      title={title}
      onClick={onClick}
      {...rest}
    >
      {sitelink}
    </Link>
  );
};
