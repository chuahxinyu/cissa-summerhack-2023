import { Grid } from '@mui/material';
import { FieldArray } from 'formik';
import { INITIAL_BULLET } from '../constants';
import TextInputField from '../Forms/TextInputField';
import { IBulletPoint } from '../types';
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from '@mui/system';

const BulletsList = ({ bullets, name }: { bullets: IBulletPoint[]; name: string }) => {
  return (
    <FieldArray name={name}>
      {({ remove, push }) => (
        <Grid container item direction="column" id="bulletSectionTitleField">
          {bullets.map((bullet, bulletIndex) => (
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '1rem' }}>
              <CircleIcon style={{ fontSize: '0.5rem' }} />
              <Box sx={{ width: '100%' }}>
                <TextInputField
                  key={bulletIndex}
                  label=""
                  name={`${name}.${bulletIndex}.text`}
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
              </Box>
            </Box>
          ))}
        </Grid>
      )}
    </FieldArray>
  );
};

export default BulletsList;
