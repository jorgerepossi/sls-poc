import React, { Fragment, memo } from "react";
import { NavLink } from "./../NavLink";
import { Icon } from "./../UI/Icon";
import style from "./../styles/Common.module.css";
import { Section } from "../UI/Section";
import Box from "@material-ui/core/Box";
export const List = memo(
  ({
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
              <NavLink
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
  }
);

export const WidgetList = ({ data }: InfoProps): JSX.Element => {
  return (
    <>
      {data.map((info, key) => (
        <Box className="widget-container" key={key}>
          <Box className="infobox">
            <Box className="infobox-wrapper">
              <Box className="media-wrapper iconWrapper">
                <Icon iconimg={info.iconimg} />
              </Box>

              <Box className="content_wrapper">
                <Box className="wgl-infobox-title_wrapper">
                  <h3 className="wgl-infobox_title">{info.title}</h3>
                </Box>
                <Box className="content_inner_wrapper">
                  <Box className="wgl-infobox_content">
                    {info.infoContentFirst}
                    <br />
                    {info.infoContentSecond}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export const InfoList = memo(
  ({ data }: InfoProps): JSX.Element => {
    return (
      <>
        {data.map((info, key) => (
          <Section Display="flex" className="InfoContentFooter" key={key}>
            <Section className="InfoContentFooter_wrapper" Display="flex">
              <Section className="InfoContentFooter_container" Display="flex">
                <Section className="InfoContentFooter_inner" Display="flex">
                  <div className="iconWrapper">
                    <Icon iconimg={info.iconimg} />
                  </div>
                  <div>
                    <p>{info.infoContentFirst}</p>
                    <p>{info.infoContentSecond}</p>
                  </div>
                </Section>
              </Section>
            </Section>
          </Section>
        ))}
      </>
    );
  }
);

interface SocialIconProps extends TypeProps {
  iconimg?: string;
}

export const SocialIcon = memo(
  ({ data, className, id, Flex, Grid, JustifyCenter }: SocialIconProps) => {
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
                  <i className={item.iconimg}></i>
                </a>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    } else {
      return <></>;
    }
  }
);
