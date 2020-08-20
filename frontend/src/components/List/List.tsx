import React, { Fragment } from "react";
import { Navbar } from "./../Navbar";
import { Icon } from "./../UI/Icon";
import style from "./../styles/Common.module.css";
import { Section } from "../UI/Section";

export const List = ({
  data,
  className,
  listClass,
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
          <li key={key} className={listClass}>
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

export const Info = ({ data, iconimg }: InfoProps): JSX.Element => {
  return (
    <>
      {data.map((info, key) => (
        <Section Display="flex" className="InfoContentFooter" key={key}>
          <div>
            <Icon iconimg={info.iconimg} />
          </div>
          <div>
            <p>{info.infoContentFirst}</p>
            <p>{info.infoContentSecond}</p>
          </div>
        </Section>
      ))}
    </>
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
