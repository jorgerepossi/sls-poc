import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const IconStyled = styled.span`
  &.icon {
    display: inline-block;
    transition: 0.4s;
  }
  &.icon {
    border-radius: 50%;
  }
  &.icon {
    width: 1em;
    height: 1em;
    box-sizing: content-box;
    font-weight: normal;
  }
  &.icon {
    display: inline-block;
    line-height: 1;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    color: #818a91;
    font-size: 50px;
    text-align: center;
  }

  &.icon {
    font-size: 23px;
    margin: 0px 28px 0px 16px;
    padding: 15.5px 15.5px 15.5px 15.5px;
    border-width: 0px 0px 0px 0px;
  }

  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    transition: 0.4s;
    z-index: -1;
    border-radius: inherit;
  }
`;

const Icon = (props) => {
  return (
    <IconStyled className="icon">
      <i className={props.iconimg} name={props.iconimg}></i>
    </IconStyled>
  );
};

const IonIcon = (props) => {
  return (
    <IconStyled className="icon">
      <ion-icon name={props.name} className={props.class}></ion-icon>
    </IconStyled>
  );
};

export { Icon, IonIcon };

Icon.propTypes = {
  iconimg: PropTypes.string.isRequired,
};

IonIcon.propTypes = {
  name: PropTypes.string.isRequired,
};
