import { useState } from 'react';
import ChooseTemplate from './components/ChooseTemplate';
import InputData from './components/InputData';
import Preview from './components/Preview';
import { IResumeData } from './components/types';
import {Container, Card, Grid} from '@mui/material/';
import './App.css'

function App() {
  const [resumeData, setResumeData] = useState<IResumeData>({
    template: 'Template 1 Name',
    aboutMe: { name: '' },
    sections: [],
  });

  return (
    <div className="App">
      <Container>
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
    </div>
  );
}

export default App;