import { Box, Card, CardContent, Checkbox, Collapse, FormControlLabel, Grid, IconButton } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import { IDetailedSubsection } from '../types';
import BulletsList from './BulletsList';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Field } from 'formik';

const DetailedSubsection = ({
  subsection,
  namePrefix,
  index,
  removeFunction,
  isUpDisabled,
  isDownDisabled,
  moveUpFunction,
  moveDownFunction,
  isExpanded,
}: {
  subsection: IDetailedSubsection;
  namePrefix: string;
  index: number;
  removeFunction: () => void;
  isUpDisabled: boolean;
  isDownDisabled: boolean;
  moveUpFunction: () => void;
  moveDownFunction: () => void;
  isExpanded: boolean;
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Field
            type="checkbox"
            name={`${namePrefix}.${index}.isExpanded`}
            aria-label="Expand/Collapse"
            as={FormControlLabel}
            control={<Checkbox />}
          />
          <Box sx={{ width: '100%' }}>
            <TextInputField
              label="Subsection Title"
              name={`${namePrefix}.${index}.title`}
              inputProps={{ style: { fontSize: 40 } }}
            />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <IconButton aria-label="move up" disabled={isUpDisabled} onClick={moveUpFunction}>
              <KeyboardArrowUpIcon />
            </IconButton>
            <IconButton aria-label="move down" disabled={isDownDisabled} onClick={moveDownFunction}>
              <KeyboardArrowDownIcon />
            </IconButton>
            <IconButton aria-label="delete" color="error" onClick={removeFunction}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
        <Collapse in={isExpanded}>
          <Grid>
            <TextInputField label="Subsection Subtitle" name={`${namePrefix}.${index}.subtitle`} size="small" />
            <TextInputField label="Location" name={`${namePrefix}.${index}.location`} size="small" />
            <TextInputField label="Start Date" name={`${namePrefix}.${index}.startDate`} size="small" />
            <TextInputField label="End Date" name={`${namePrefix}.${index}.endDate`} size="small" />

            <BulletsList bullets={subsection.bullets} name={`${namePrefix}.${index}.bullets`} />
          </Grid>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default DetailedSubsection;
