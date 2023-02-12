import { IBulletPoint, IBulletSection } from '../types';
import { Box, Card, CardContent, Grid, IconButton } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import { FieldArray } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <FieldArray name={`sections.${index}.bullets`}>
          {({ remove, push }) => (
            <Grid container item direction="column" id="bulletSectionTitleField">
              {section.bullets.map((bullet, bulletIndex) => (
                <TextInputField
                  key={bulletIndex}
                  label=""
                  name={`sections.${index}.bullets.${bulletIndex}.text`}
                  placeholder="e.g. Coding Languages: TypeScript, C++, Java, Python"
                  size="small"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      push(INITIAL_BULLET);
                    }
                    if (e.key === 'Tab') {
                      console.log('Tab');
                    }
                  }}
                />
              ))}
            </Grid>
          )}
        </FieldArray>
      </CardContent>
    </Card>
  );
};

export default BulletSection;
