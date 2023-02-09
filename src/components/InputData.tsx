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
  phoneNo: "",
  address: "",
  jobTitle: ""
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
  phoneNo: Yup.number()
    .min(10, "Not a valid phone number")
    .max(10, "Not a valid phone number")
    .typeError("Must be a number")
    .required("Required"),
  address: Yup.string()
    .required("Required"),
  jobTitle: Yup.string()
    .required("Required")
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
              <Grid container spacing={4}>
                <Grid container item spacing={3} id="aboutMe">

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
                      <TextInputField label="Phone" name="phoneNo" placeholder="e.g. 0411111111"/>
                    </Grid>
                    <Grid item xs>
                      <TextInputField label="Address" name="address" placeholder="e.g. 111 Potato Rd, Potato, POT 3000"/>
                    </Grid>
                  </Grid>

                  <Grid container item spacing={2} id="jobTitleField">
                    <Grid item xs={12}>
                      <Typography>Job Title</Typography>
                    </Grid>
                    <Grid item xs>
                      <TextInputField label="Job Title" name="jobTitle" placeholder="e.g. Graphic Designer"/>
                    </Grid>
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