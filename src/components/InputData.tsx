import { Dispatch, SetStateAction } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Button, Grid } from '@mui/material';
import AboutMe from './InputDataSections/AboutMe';
import { IBulletSection, IDetailedSection, IResumeData } from './types';
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
    <Grid container sx={{ px: 7, py: 5 }}>
      <Formik
        enableReinitialize
        initialValues={INITIAL_FORM_STATE}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setResumeData((prevState) => ({
              ...prevState,
              aboutMe: values.aboutMe,
              sections: values.sections,
            }));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={ERROR_MESSAGE_SCHEMA}
      >
        {({ dirty, isValid, values }) => (
          <Form>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <AboutMe isExpanded={values.aboutMe.isExpanded} />
              </Grid>

              <Grid item>
                <FieldArray name="sections">
                  {({ insert, remove, push }) => (
                    <Grid container spacing={3} direction="column">
                      <Grid item>
                        {values.sections.length > 0 &&
                          values.sections.map((section, sectionIndex) =>
                            section.sectionType === 'bullet' ? (
                              <BulletSection
                                key={sectionIndex}
                                section={section}
                                index={sectionIndex}
                                removeFunction={() => remove(sectionIndex)}
                                isExpanded={section.isExpanded}
                                isUpDisabled={sectionIndex === 0}
                                isDownDisabled={
                                  sectionIndex === values.sections.length - 1
                                }
                                moveUpFunction={() => {
                                  remove(sectionIndex);
                                  insert(sectionIndex - 1, section);
                                }}
                                moveDownFunction={() => {
                                  remove(sectionIndex);
                                  insert(sectionIndex + 1, section);
                                }}
                              />
                            ) : (
                              <DetailedSection
                                section={section}
                                index={sectionIndex}
                                key={sectionIndex}
                                removeFunction={() => remove(sectionIndex)}
                                isExpanded={section.isExpanded}
                                isUpDisabled={sectionIndex === 0}
                                isDownDisabled={
                                  sectionIndex === values.sections.length - 1
                                }
                                moveUpFunction={() => {
                                  remove(sectionIndex);
                                  insert(sectionIndex - 1, section);
                                }}
                                moveDownFunction={() => {
                                  remove(sectionIndex);
                                  insert(sectionIndex + 1, section);
                                }}
                              />
                            ),
                          )}
                      </Grid>
                      <Grid container item style={{ textAlign: 'center' }}>
                        <Grid item xs={6}>
                          <Button
                            variant="outlined"
                            onClick={() => push(INITIAL_BULLET_SECTION)}
                            startIcon={<AddCircleOutlineIcon />}
                          >
                            Add Bullet Section
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="outlined"
                            onClick={() => push(INITIAL_DETAILED_SECTION)}
                            startIcon={<AddCircleOutlineIcon />}
                          >
                            Add Detailed Section
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </FieldArray>
              </Grid>

              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                  disabled={!isValid}
                  type="submit"
                  variant="contained"
                  startIcon={<ReplayIcon />}
                >
                  Reload
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default InputData;
