import React from "react";
import PropTypes from "prop-types";

const Icon = (props) => {
  return <i className={props.iconimg} name={props.iconimg}></i>;
};

const IonIcon = (props) => {
  return <ion-icon name={props.name} className={props.class}></ion-icon>;
};

export { Icon, IonIcon };

Icon.propTypes = {
  iconimg: PropTypes.string.isRequired,
};

IonIcon.propTypes = {
  name: PropTypes.string.isRequired,
};
