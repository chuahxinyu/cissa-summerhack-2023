import { useEffect, useState } from 'react';
import ChooseTemplate from './components/ChooseTemplate';
import { INITIAL_FORM_STATE } from './components/constants';
import InputData from './components/InputData';
import Preview from './components/Preview';
import { IResumeData } from './components/types';

function App() {
  const RESUME_DATA_INITIAL: IResumeData = {
    template: 'Template 1 Name',
    ...INITIAL_FORM_STATE,
  };
  const [resumeData, setResumeData] = useState<IResumeData>(RESUME_DATA_INITIAL);

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
    if ((resumeData !== RESUME_DATA_INITIAL && data !== null) || data === null) {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }
  }, [resumeData]);

  console.log({ resumeDataApp: resumeData });

  return (
    <div className="App">
      <ChooseTemplate setResumeData={setResumeData} />
      <InputData setResumeData={setResumeData} resumeData={resumeData} />
      <Preview resumeData={resumeData} />
    </div>
  );
}

export default App;
