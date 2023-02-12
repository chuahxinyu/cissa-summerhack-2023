import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, Grid, IconButton, Collapse } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import { IDetailedSection } from '../types';
import DetailedSubsection from './DetailedSubsection';
import DeleteIcon from '@mui/icons-material/Delete';
import { Field, FieldArray } from 'formik';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { INITIAL_DETAILED_SUBSECTION } from '../constants';

interface DetailedSectionProps {
  section: IDetailedSection;
  index: number;
  removeFunction: () => void;
  isExpanded: boolean;
}

const DetailedSection: React.FC<DetailedSectionProps> = ({ section, index, removeFunction, isExpanded }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Field
            type="checkbox"
            name={`sections.${index}.isExpanded`}
            aria-label="Expand/Collapse"
            as={FormControlLabel}
            control={<Checkbox />}
          />
          <Box sx={{ width: '100%' }}>
            <TextInputField
              label="Section Name"
              name={`sections.${index}.sectionName`}
              placeholder="eg. Skills, Achievements, Publications, Projects"
            />
          </Box>
          <IconButton aria-label="delete" color="error" onClick={removeFunction}>
            <DeleteIcon />
          </IconButton>
        </Box>
        <Collapse in={isExpanded}>
          <FieldArray name={`sections.${index}.subSections`}>
            {({ remove, push }) => (
              <Grid direction="column" spacing={2}>
                {section.subSections.length > 0 &&
                  section.subSections.map((subsection, subsectionIndex) => (
                    <DetailedSubsection
                      key={subsectionIndex}
                      subsection={subsection}
                      namePrefix={`sections.${index}.subSections`}
                      index={subsectionIndex}
                      removeFunction={() => remove(subsectionIndex)}
                    />
                  ))}
                <Button
                  variant="outlined"
                  onClick={() => {
                    console.log('push subsection');
                    push(INITIAL_DETAILED_SUBSECTION);
                  }}
                  startIcon={<AddCircleOutlineIcon />}>
                  Add Detailed Subsection
                </Button>
              </Grid>
            )}
          </FieldArray>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default DetailedSection;
