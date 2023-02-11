import { IBulletPoint, IBulletSection } from '../types';
import { Grid, Typography } from '@mui/material';
import TextInputField from '../Forms/TextInputField';
import { FieldArray } from 'formik';

const INITIAL_BULLET: IBulletPoint = {
  text: '',
  subBullets: [],
};

const BulletSection = ({ section, index }: { section: IBulletSection; index: number }) => {
  return (
    <Grid container spacing={4}>
      <Grid container item spacing={2} id="bulletSection">
        <TextInputField
          label="Section Name"
          name={`sections.${index}.sectionName`}
          placeholder="eg. Skills, Achievements, Publications, Projects"
        />
        <FieldArray name={`sections.${index}.bullets`}>
          {({ insert, remove, push }) => (
            <Grid container item direction="column" id="bulletSectionTitleField">
              {section.bullets.map((bullet, bulletIndex) => (
                <TextInputField
                  key={bulletIndex}
                  label="Bullet Point"
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
      </Grid>
    </Grid>
  );
};

export default BulletSection;
