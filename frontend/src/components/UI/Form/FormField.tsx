import { Field, FieldProps } from "formik";
import React from "react";

interface Props extends FieldProps {
  placeholder: string;
  className: string;
}
export const FormField: React.FC<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ placeholder, field, className }) => {
  return <Field placeholder={placeholder} {...field} className={className} />;
};
