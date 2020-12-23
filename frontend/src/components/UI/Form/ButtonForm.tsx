import { FieldProps } from "formik";
import React from "react";

interface Props extends FieldProps {
  children: any;
  className: string;
}
export const ButtonForm: React.FC<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, field, className }) => {
  return (
    <span>
      <button type="submit" className={className} {...field} value="">
        {children}
      </button>
    </span>
  );
};
