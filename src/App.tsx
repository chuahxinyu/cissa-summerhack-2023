import { useEffect, useState } from 'react';
import ChooseTemplate from './components/ChooseTemplate';
import InputData from './components/InputData';
import Preview from './components/Preview';
import { IResumeData } from './components/types';

function App() {
  const RESUME_DATA_INITIAL: IResumeData = {
    template: 'Template 1 Name',
    aboutMe: { name: '' },
    sections: [],
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
      <InputData setResumeData={setResumeData} resumeData={resumeData} />
      <ChooseTemplate setResumeData={setResumeData} />
      <Preview resumeData={resumeData} />
    </div>
  );
}

export default App;
