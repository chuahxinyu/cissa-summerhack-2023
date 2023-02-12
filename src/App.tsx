import { useState } from 'react';
import ChooseTemplate from './components/ChooseTemplate';
import InputData from './components/InputData';
import Preview from './components/Preview';
import { IResumeData } from './components/types';
import {Container, Card, ThemeProvider} from '@mui/material/';
import theme from './theme';
import './App.css'

function App() {
  const [resumeData, setResumeData] = useState<IResumeData>({
    template: 'Template 1 Name',
    aboutMe: { name: '' },
    sections: [],
  });
  // TODO card padding

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Card>
            <InputData setResumeData={setResumeData} />
          </Card>
          <br /><br />
          <Card>
            <ChooseTemplate setResumeData={setResumeData} />
          </Card>
          <br /><br />
          <Card>
            <Preview resumeData={resumeData} />
          </Card>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;