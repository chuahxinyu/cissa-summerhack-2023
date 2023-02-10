import { useState } from 'react';
import ChooseTemplate from './components/ChooseTemplate';
import InputData from './components/InputData';
import Preview from './components/Preview';
import { IResumeData } from './components/types';

function App() {
  const [resumeData, setResumeData] = useState<IResumeData>({
    template: 'Template 1 Name',
    aboutMe: { name: '' },
    sections: [],
  });
  const [count, setCount] = useState<number>(1);

  return (
    <div className="App">
      <p>resumeData: {JSON.stringify(resumeData, null, 2)}</p>
      <hr></hr>
      <InputData setResumeData={setResumeData} />
      <hr></hr>
      <ChooseTemplate />
      <hr></hr>
      <Preview resumeData={resumeData} />
    </div>
  );
}

export default App;
