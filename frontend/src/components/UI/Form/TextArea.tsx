import { FieldProps } from "formik";
import React from "react";

interface Props extends FieldProps {
  placeholder: string;
  className: string;
}
export const TextArea: React.FC<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ placeholder, field, className }) => {
  return (
    <textarea placeholder={placeholder} {...field} className={className} />
  );
};
