import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Container, Grid, Typography }from '@material-ui/core/';
import TextInputField from "./Forms/TextInputField";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  profile: ""
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
    <Container>
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
              <Grid container spacing={3}>

                <Grid container item spacing={2} id="name">
                  <Grid item xs={12}>
                    <Typography>Name</Typography>
                  </Grid>
                  <Grid item xs>
                    <TextInputField label="First Name" name="firstName" placeholder="e.g. Mai"/>
                  </Grid>
                  <Grid item xs>
                    <TextInputField label="Last Name" name="lastName" placeholder="e.g. Pham"/>
                  </Grid>
                </Grid>

                <Grid container item spacing={2} id="contactDetails">
                  <Grid item xs={12}>
                    <Typography>Contact details</Typography>
                  </Grid>
                  <Grid item xs>
                    <TextInputField label="Email" name="email" placeholder="e.g. maiphs@potato.com"/>
                  </Grid>
                  <Grid item xs>
                    <TextInputField label="Phone" name="email" placeholder="e.g. 0411111111"/>
                  </Grid>
                  <Grid item xs>
                    <TextInputField label="Address" name="address" placeholder="e.g. 111 Potato Rd, Potato, POT 3000"/>
                  </Grid>
                </Grid>
                
                <Grid container item spacing={2} id="profile">
                <Grid item xs={12}>
                    <Typography>Profile</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextInputField label="Profile" name="profile" placeholder="e.g. Second year undergraduate student seeking internships in media and communications..."/>
                  </Grid>
                </Grid>

              </Grid>
              
              <Button disabled={!dirty || !isValid} type="submit" variant="contained">Submit</Button>
            </Form>
          )}
        </Formik>
    </Container>
  );
};

export default InputData;