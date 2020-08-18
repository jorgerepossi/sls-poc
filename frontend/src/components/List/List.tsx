import React, { Fragment } from "react";
import { Navbar } from "./../Navbar";
import style from "./../styles/Common.module.css";

export const List = ({ data, className, id, Flex, Grid, JustifyCenter }: TypeProps): JSX.Element => {
  const classes = [
    Flex && ` ${style.Flex}`,
    Grid && ` ${style.Grid}`,
    JustifyCenter && ` ${style.JustifyCenter}`, className,];
  return (
    <Fragment>
      <ul id={id} className={classes.join(" ")}>
        {data.map((item, key) => (
          <li key={key}>
            <Navbar
              activeClassName="active"
              inactiveClassName="false"
              to={item.to}
              className="menu"
              sitelink={item.sitelink}
              title={item.seo}
              alt={item.seo}
            />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export const Info = ({ data, className }: InfoType): JSX.Element => {
  
  return (
    <div className={className}>
      {data.map((info, key) => (
        <div key={key}>
          <p>{info.infoContentFirst}</p>
          <p>{info.infoContentSecond}</p>
        </div>
      ))}
    </div>
  );
};

export const SocialIcon = ({ data }) =>{
  return(
    <ul>
      {data.map((item, key)=>(
        <li key={key} >{item.name}</li>
      ))}
    </ul>
  )
}
