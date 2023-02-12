import { IBulletPoint, IBulletSection } from '../types';
import { Box, Card, CardContent, Checkbox, Collapse, FormControlLabel, IconButton } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import DeleteIcon from '@mui/icons-material/Delete';
import BulletsList from './BulletsList';
import { Field } from 'formik';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const INITIAL_BULLET: IBulletPoint = {
  text: '',
  subBullets: [],
};

interface BulletSectionProps {
  section: IBulletSection;
  index: number;
  removeFunction: () => void;
  isUpDisabled: boolean;
  isDownDisabled: boolean;
  moveUpFunction: () => void;
  moveDownFunction: () => void;
  isExpanded: boolean;
}

const BulletSection: React.FC<BulletSectionProps> = ({
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
              name={`sections.${index}.sectionName`}
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
          <BulletsList bullets={section.bullets} name={`sections.${index}.bullets`} />
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default BulletSection;