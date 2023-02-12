import { Dispatch, SetStateAction } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Grid, Typography } from '@mui/material';
import AboutMe from './InputDataSections/AboutMe';
import { IResumeData } from './types';
import BulletSection from './InputDataSections/BulletSection';
import DetailedSection from './InputDataSections/DetailedSection';
import ReplayIcon from '@mui/icons-material/Replay';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { INITIAL_BULLET_SECTION, INITIAL_DETAILED_SECTION } from './constants';

const ERROR_MESSAGE_SCHEMA = Yup.object().shape({
  name: Yup.string().max(15, 'Must be 20 characters or less'),
  lastName: Yup.string().max(20, 'Must be 20 characters or less'),
  email: Yup.string().email('Invalid email address'),
  phoneNo: Yup.number().typeError('Must be a number'),
  address: Yup.string(),
  jobTitle: Yup.string(),
});

const InputData = ({
  setResumeData,
  resumeData,
}: {
  setResumeData: Dispatch<SetStateAction<IResumeData>>;
  resumeData: IResumeData;
}) => {
  const INITIAL_FORM_STATE: IResumeData = {
    aboutMe: resumeData.aboutMe,
    sections: resumeData.sections,
  };
  return (
    <Container>
      <Typography variant="h2">1. Your Information</Typography>
      <Formik
        enableReinitialize
        initialValues={INITIAL_FORM_STATE}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setResumeData((prevState) => ({ ...prevState, aboutMe: values.aboutMe, sections: values.sections }));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={ERROR_MESSAGE_SCHEMA}>
        {({ dirty, isValid, values }) => (
          <Form>
            <AboutMe />
            <FieldArray name="sections">
              {({ insert, remove, push }) => (
                <Grid>
                  {values.sections.length > 0 &&
                    values.sections.map((section, i) =>
                      section.sectionType === 'bullet' ? (
                        <BulletSection section={section} index={i} key={i} />
                      ) : (
                        <DetailedSection
                          name="Education"
                          titlesName="Educational Institution"
                          hasDate={true}
                          hasLocation={true}
                          key={i}
                        />
                      ),
                    )}
                  <Button
                    variant="outlined"
                    onClick={() => push(INITIAL_BULLET_SECTION)}
                    startIcon={<AddCircleOutlineIcon />}>
                    Add Bullet Section
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => push(INITIAL_DETAILED_SECTION)}
                    startIcon={<AddCircleOutlineIcon />}>
                    Add Detailed Section
                  </Button>
                </Grid>
              )}
            </FieldArray>
            <Button disabled={!isValid} type="submit" variant="contained" startIcon={<ReplayIcon />}>
              Reload
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default InputData;
