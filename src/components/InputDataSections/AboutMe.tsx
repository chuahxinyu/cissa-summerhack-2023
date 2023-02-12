import * as Yup from 'yup';
import { Box, Card, CardContent, Checkbox, Collapse, FormControlLabel, Grid, Typography } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import { Field } from 'formik';

const AboutMe = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Field
            type="checkbox"
            name="aboutMe.isExpanded"
            aria-label="Expand/Collapse"
            as={FormControlLabel}
            control={<Checkbox />}
          />
          <Typography variant="h4">About Me</Typography>
        </Box>
      <Collapse in={isExpanded}>
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
          <TextInputField label="Profile" name="aboutMe.profile" placeholder="e.g. Second year Media and Communications looking for opportunities in..." />
        </Grid>
      </Grid>
      </Collapse>
      </CardContent>
    </Card>
  );
};

export default AboutMe;