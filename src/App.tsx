import { useEffect, useState } from 'react';
import { INITIAL_FORM_STATE } from './components/constants';
import Header from './components/Header';
import ChooseTemplate from './components/ChooseTemplate';
import InputData from './components/InputData';
import Preview from './components/Preview';
import { IResumeData } from './components/types';
import {
  Container,
  Card,
  CardHeader,
  Grid,
  ThemeProvider,
} from '@mui/material/';
import theme from './theme';
import Footer from './components/Footer';

function App() {
  const RESUME_DATA_INITIAL: IResumeData = {
    template: 'Template 1 Name',
    ...INITIAL_FORM_STATE,
  };
  const [resumeData, setResumeData] =
    useState<IResumeData>(RESUME_DATA_INITIAL);

  useEffect(() => {
    const data = localStorage.getItem('resumeData');
    console.log({ parse: data });
    if (data !== null) {
      setResumeData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('resumeData');
    console.log({ stringify: data });
    if (
      (resumeData !== RESUME_DATA_INITIAL && data !== null) ||
      data === null
    ) {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }
  }, [resumeData]);

  console.log({ resumeDataApp: resumeData });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Grid container id="tes" alignItems="center">
            <Grid item style={{ textAlign: 'center' }} xs={12}>
              <Header />
            </Grid>
          </Grid>
          <Card>
            <CardHeader title="1. Choose a Template" />
            <ChooseTemplate setResumeData={setResumeData} />
          </Card>
          <br />
          <br />
          <Card>
            <CardHeader title="2. Your Information" />
            <InputData setResumeData={setResumeData} resumeData={resumeData} />
          </Card>
          <br />
          <br />
          <Card>
            <CardHeader title="3. Preview" />
            <Preview resumeData={resumeData} />
          </Card>
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
