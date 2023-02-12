import { Box, Card, CardContent, Grid, IconButton } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import { IDetailedSubsection } from '../types';
import BulletsList from './BulletsList';
import DeleteIcon from '@mui/icons-material/Delete';

const DetailedSubsection = ({
  subsection,
  namePrefix,
  index,
  removeFunction,
}: {
  subsection: IDetailedSubsection;
  namePrefix: string;
  index: number;
  removeFunction: () => void;
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ width: '100%' }}>
            <TextInputField
              label="Subsection Title"
              name={`${namePrefix}.${index}.title`}
              inputProps={{ style: { fontSize: 40 } }}
            />
          </Box>
          <IconButton aria-label="delete" color="error" onClick={removeFunction}>
            <DeleteIcon />
          </IconButton>
        </Box>
        <Grid spacing={2}>
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
