import { Dispatch, SetStateAction } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Grid, Typography } from '@material-ui/core/';
import AboutMe from './InputDataSections/AboutMe';
import { IAboutMeSection, IResumeData } from './types';
import DetailedSection from './InputDataSections/DetailedSection';

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

const InputData = ({ setResumeData }: { setResumeData: Dispatch<SetStateAction<IResumeData>> }) => {
  return (
    <Container>
      <Typography variant="h2">1. Your Information</Typography>
      <Formik
        initialValues={INITIAL_FORM_STATE}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values);
            setResumeData((prevState) => ({ ...prevState, aboutMe: values }));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={ERROR_MESSAGE_SCHEMA}>
        {({ dirty, isValid }) => (
        <Form>
          <Grid container spacing={6}>
            <AboutMe />
            <DetailedSection name="Education" titlesName="Educational Institution" hasDate={true} hasLocation ={true} />
            <DetailedSection name="Experience" titlesName="Company/Institution" subtitlesName="Role" hasDate={true} hasLocation ={true} />
            <Button disabled={!dirty || !isValid} type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Form>
        )}
      </Formik>
    </Container>
  );
};

export default InputData;