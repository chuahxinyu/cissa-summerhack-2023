import { IBulletPoint, IBulletSection } from '../types';
import { Box, Card, CardContent, IconButton } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import DeleteIcon from '@mui/icons-material/Delete';
import BulletsList from './BulletsList';

const INITIAL_BULLET: IBulletPoint = {
  text: '',
  subBullets: [],
};

interface BulletSectionProps {
  section: IBulletSection;
  index: number;
  removeFunction: () => void;
}

const BulletSection: React.FC<BulletSectionProps> = ({ section, index, removeFunction }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <BulletsList bullets={section.bullets} name={`sections.${index}.bullets`} />
      </CardContent>
    </Card>
  );
};

export default BulletSection;
