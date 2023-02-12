import * as Yup from 'yup';
import { Grid, Typography } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import { IDetailedSubsection, IBulletPoint } from '../types';

const DetailedSubsection = ({
  subsection,
  namePrefix,
  index,
}: {
  subsection: IDetailedSubsection;
  namePrefix: string;
  index: number;
}) => {
  console.log({ subsection: subsection });
  return (
    <Grid spacing={2}>
      <TextInputField
        label="Subsection Title"
        name={`${namePrefix}.${index}.title`}
        inputProps={{ style: { fontSize: 40 } }}
      />
      <TextInputField label="Subsection Subtitle" name={`${namePrefix}.${index}.subtitle`} />
      <TextInputField label="Date" name={`${namePrefix}.${index}.date`} placeholder="e.g. June 2020 - December 2020" />
      <TextInputField label="Location" name={`${namePrefix}.${index}.location`} />
      {/* TODO Bullets */}
    </Grid>
  );
};

export default DetailedSubsection;
