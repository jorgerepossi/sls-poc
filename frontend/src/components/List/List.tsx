import React, { Fragment } from "react";
import { Navbar } from "./../Navbar";
import { Icon } from "./../UI/Icon";
import style from "./../styles/Common.module.css";

export const List = ({
  data,
  className,
  id,
  Flex,
  Grid,
  JustifyCenter,
}: TypeProps): JSX.Element => {
  const classes = [
    Flex && ` ${style.Flex}`,
    Grid && ` ${style.Grid}`,
    JustifyCenter && ` ${style.JustifyCenter}`,
    className,
  ];
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

export const Info: React.FC<InfoType> = ({ data, className }): JSX.Element => {
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

interface SocialIconProps extends TypeProps {
  iconimg?: string;
}

export const SocialIcon = ({
  data,
  className,
  id,
  Flex,
  Grid,
  JustifyCenter,
  iconimg,
}: SocialIconProps) => {
  const classes = [
    Flex && ` ${style.Flex}`,
    Grid && ` ${style.Grid}`,
    JustifyCenter && ` ${style.JustifyCenter}`,
    className,
  ];

  if (data) {
    return (
      <Fragment>
        <ul id={id} className={classes.join(" ")}>
          {data.map((item, key) => (
            <li key={key}>
              <a href={item.to}>
                <Icon iconimg={item.iconimg} />
              </a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  } else {
    return <div></div>;
  }
};
