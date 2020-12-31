import React from "react";
import PropTypes from "prop-types";

interface Props {
  src?: string;
  alt?: string;
  title?: string;
  classname?: string;
}
export const Image: React.FC<Props> = ({ src, alt, title, classname }) => {
  return <img src={src} alt={alt} title={title} className={classname} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
