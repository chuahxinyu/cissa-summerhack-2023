import { useState } from 'react';
import ChooseTemplate from './components/ChooseTemplate';
import InputData from './components/InputData';
import Preview from './components/Preview';
import { IResumeData } from './components/types';
import {Card, Grid} from '@mui/material/';
import './App.css'

function App() {
  const [resumeData, setResumeData] = useState<IResumeData>({
    template: 'Template 1 Name',
    aboutMe: { name: '' },
    sections: [],
  });

  return (
    <div className="App">
      <Grid container spacing={8} direction="column" alignItems="center" justifyContent="center" marginLeft="auto" marginRight="auto">
        <Grid item>
          <Card>
            <InputData setResumeData={setResumeData} />
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <ChooseTemplate setResumeData={setResumeData} />
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <Preview resumeData={resumeData} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;