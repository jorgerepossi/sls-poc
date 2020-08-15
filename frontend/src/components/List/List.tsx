import React, { Fragment } from "react";
import { Navbar } from "./../Navbar";

export const List = ({ data, className, id }: TypeProps): JSX.Element => {
  return (
    <Fragment>
      <ul id={id} className={className}>
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
