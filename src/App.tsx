import { useState } from 'react';
import ChooseTemplate from './components/ChooseTemplate/ChooseTemplate';
import InputData from './components/InputData';
import Preview from './components/Preview';
import { IResumeData } from './components/types';

function App() {
  const [resumeData, setResumeData] = useState<IResumeData>({
    template: 'Template 1 Name',
    aboutMe: { name: '' },
    sections: [],
  });

  return (
    <div className="App">
      <InputData setResumeData={setResumeData} />
      <ChooseTemplate setResumeData={setResumeData} />
      <Preview resumeData={resumeData} />
    </div>
  );
}

export default App;
