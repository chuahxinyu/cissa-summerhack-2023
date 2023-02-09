import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Typography }from '@material-ui/core/';
import TextInputField from "./Forms/TextInputField";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: ""
};

const ERROR_MESSAGE_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .max(15, "Must be 20 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
});


const InputData = () => {
  return (
    <div>
      <Typography variant="h2">1. Your Information</Typography>
      <Formik
        initialValues={INITIAL_FORM_STATE}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}

        validationSchema={ERROR_MESSAGE_SCHEMA}
      >
        {({dirty, isValid}) => (
          <Form>
            <TextInputField label="First Name" name="firstName" placeholder="e.g. Mai"/>
            <TextInputField label="Last Name" name="lastName" placeholder="e.g. Pham"/>
            <TextInputField label="Email" name="email" placeholder="e.g. maiphs@potato.com"/>
            <Button disabled={!dirty || !isValid} type="submit" variant="contained">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputData;