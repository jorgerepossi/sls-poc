import { Box } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import "./ContactForm.scss";
import { FormField } from "./FormField";
import { TextArea } from "./TextArea";

interface Values {
  firstName: string;
  email: string;
  message: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const ContactForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Box>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          message: "",
        }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ values }) => (
          <Form id="formContent">
            <Box className="form-contact_wrapper-inputs">
              <Box className="form-control-wrap">
                <Field
                  name="firstName"
                  placeholder="Your Name *"
                  component={FormField}
                  className="form-control"
                  type="text"
                />
              </Box>
              <Box className="form-control-wrap">
                <Field
                  name="email"
                  placeholder="Your Email *"
                  component={FormField}
                  className="form-control"
                  type="text"
                />
              </Box>
            </Box>
            <Box className="textarea">
              <Field
                name="message"
                placeholder="Message..."
                component={TextArea}
                className="form-control"
              />
            </Box>
            <Box className="iconWrapper">
              <span>
                <button type="submit" className="submit">
                  Post A Comment
                </button>
              </span>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
