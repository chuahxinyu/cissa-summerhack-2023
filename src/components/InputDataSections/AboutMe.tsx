import * as Yup from 'yup';
import { Grid } from '@mui/material';
import { IAboutMeSection } from '../types';
import TextInputField from '../Forms/TextInputField';

const INITIAL_FORM_STATE: IAboutMeSection = {
  name: '',
  lastName: '',
  email: '',
  phoneNo: '',
  address: '',
  jobTitle: '',
  profile: '',
};

const ERROR_MESSAGE_SCHEMA = Yup.object().shape({
  name: Yup.string().max(15, 'Must be 20 characters or less'),
  lastName: Yup.string().max(20, 'Must be 20 characters or less'),
  email: Yup.string().email('Invalid email address'),
  phoneNo: Yup.number().typeError('Must be a number'),
  address: Yup.string(),
  jobTitle: Yup.string(),
  profile: Yup.string(),
});

const AboutMe = () => {
  return (
    <Grid container item spacing={0} id="aboutMe">
      <Grid container item spacing={2} id="name">
        <Grid item xs>
          <TextInputField label="First Name" name="aboutMe.name" placeholder="e.g. Mai" />
        </Grid>
        <Grid item xs>
          <TextInputField label="Last Name" name="aboutMe.lastName" placeholder="e.g. Pham" />
        </Grid>
      </Grid>
      <Grid container item spacing={2} id="contactDetails">
        <Grid item xs>
          <TextInputField label="Email" name="aboutMe.email" placeholder="e.g. maiphs@potato.com" />
        </Grid>
        <Grid item xs>
          <TextInputField label="Phone" name="aboutMe.phoneNo" placeholder="e.g. 0411111111" />
        </Grid>
        <Grid item xs>
          <TextInputField label="Address" name="aboutMe.address" placeholder="e.g. 111 Potato Rd, Potato, POT 3000" />
        </Grid>
      </Grid>

      <Grid container item spacing={2} id="jobTitleField">
        <Grid item xs>
          <TextInputField label="Job Title" name="aboutMe.jobTitle" placeholder="e.g. Graphic Designer" />
        </Grid>
      </Grid>

      <Grid container item spacing={2} id="profileField">
        <Grid item xs>
          <TextInputField
            label="Profile"
            name="profile"
            placeholder="e.g. Second year Media and Communications looking for opportunities in..."
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
