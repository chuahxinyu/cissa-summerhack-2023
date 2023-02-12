import { Dispatch, SetStateAction } from 'react';
import { IResumeData } from '../components/types';

export interface IGenerateTemplateProps {
  resumeDataCopy: IResumeData;
  setBlobUrl: Dispatch<SetStateAction<string>>;
}
