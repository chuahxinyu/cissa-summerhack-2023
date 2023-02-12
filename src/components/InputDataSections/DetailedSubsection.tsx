import { Card, CardContent, Grid } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import { IDetailedSubsection, IBulletPoint } from '../types';
import BulletsList from './BulletsList';

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
    <Card variant="outlined">
      <CardContent>
        <Grid spacing={2}>
          <TextInputField
            label="Subsection Title"
            name={`${namePrefix}.${index}.title`}
            inputProps={{ style: { fontSize: 40 } }}
          />
          <TextInputField label="Subsection Subtitle" name={`${namePrefix}.${index}.subtitle`} size="small" />
          <TextInputField label="Location" name={`${namePrefix}.${index}.location`} size="small" />
          <TextInputField label="Start Date" name={`${namePrefix}.${index}.startDate`} size="small" />
          <TextInputField label="End Date" name={`${namePrefix}.${index}.endDate`} size="small" />

          <BulletsList bullets={subsection.bullets} name={`${namePrefix}.${index}.bullets`} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DetailedSubsection;
