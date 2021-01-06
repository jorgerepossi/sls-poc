import React from "react";
import PropTypes from "prop-types";

interface Props {
  src?: any;
  alt?: string;
  title?: string;
  className?: string;

}
export const Image: React.FC<Props> = ({
  src,
  alt,
  title,
  className,

}) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
     
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
