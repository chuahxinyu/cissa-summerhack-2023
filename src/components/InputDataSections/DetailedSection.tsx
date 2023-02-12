import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, Grid, IconButton, Collapse } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import { IDetailedSection } from '../types';
import DetailedSubsection from './DetailedSubsection';
import DeleteIcon from '@mui/icons-material/Delete';
import { Field, FieldArray } from 'formik';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { INITIAL_DETAILED_SUBSECTION } from '../constants';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface DetailedSectionProps {
  section: IDetailedSection;
  index: number;
  removeFunction: () => void;
  isUpDisabled: boolean;
  isDownDisabled: boolean;
  moveUpFunction: () => void;
  moveDownFunction: () => void;
  isExpanded: boolean;
}

const DetailedSection: React.FC<DetailedSectionProps> = ({
  section,
  index,
  removeFunction,
  isExpanded,
  isUpDisabled,
  isDownDisabled,
  moveUpFunction,
  moveDownFunction,
}) => {
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
              name={`sections.${index}.sectionTitle`}
              placeholder="eg. Skills, Achievements, Publications, Projects"
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
          <FieldArray name={`sections.${index}.subSections`}>
            {({ remove, push, insert }) => (
              <Grid>
                {section.subSections.length > 0 &&
                  section.subSections.map((subsection, subsectionIndex) => (
                    <DetailedSubsection
                      key={subsectionIndex}
                      subsection={subsection}
                      namePrefix={`sections.${index}.subSections`}
                      index={subsectionIndex}
                      removeFunction={() => remove(subsectionIndex)}
                      isUpDisabled={subsectionIndex === 0}
                      isDownDisabled={subsectionIndex === section.subSections.length - 1}
                      moveUpFunction={() => {
                        remove(subsectionIndex);
                        insert(subsectionIndex - 1, subsection);
                      }}
                      moveDownFunction={() => {
                        remove(subsectionIndex);
                        insert(subsectionIndex + 1, subsection);
                      }}
                      isExpanded={subsection.isExpanded}
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
