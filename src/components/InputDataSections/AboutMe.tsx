import { Dispatch, SetStateAction } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Grid, Typography } from '@material-ui/core/';
import TextInputField from '../Forms/TextInputField';
import { IAboutMeSection, IResumeData } from '../types';

const INITIAL_FORM_STATE: IAboutMeSection = {
  name: '',
  lastName: '',
  email: '',
  phoneNo: '',
  address: '',
  jobTitle: '',
};

const ERROR_MESSAGE_SCHEMA = Yup.object().shape({
  name: Yup.string().max(15, 'Must be 20 characters or less'),
  lastName: Yup.string().max(20, 'Must be 20 characters or less'),
  email: Yup.string().email('Invalid email address'),
  phoneNo: Yup.number().typeError('Must be a number'),
  address: Yup.string(),
  jobTitle: Yup.string(),
});

const AboutMe = () => {
  return (
    <Grid container spacing={4} paddingLeft={4}>
      <Grid container item spacing={2} id="aboutMe">
        <Typography variant="h4" paddingTop={5}>
          About You
        </Typography>
        <Grid container item spacing={2} id="name">
          <Grid item xs>
            <TextInputField label="First Name" name="name" placeholder="e.g. Mai" />
          </Grid>
          <Grid item xs>
            <TextInputField label="Last Name" name="lastName" placeholder="e.g. Pham" />
          </Grid>
        </Grid>
        <Grid container item spacing={2} id="contactDetails">
          <Grid item xs>
            <TextInputField label="Email" name="email" placeholder="e.g. maiphs@potato.com" />
          </Grid>
          <Grid item xs>
            <TextInputField label="Phone" name="phoneNo" placeholder="e.g. 0411111111" />
          </Grid>
          <Grid item xs>
            <TextInputField label="Address" name="address" placeholder="e.g. 111 Potato Rd, Potato, POT 3000" />
          </Grid>
        </Grid>
        <Grid container item spacing={2} id="jobTitleField">
          <Grid item xs={12}>
            <Typography>Job Title</Typography>
          </Grid>
          <Grid item xs>
            <TextInputField label="Job Title" name="jobTitle" placeholder="e.g. Graphic Designer" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
