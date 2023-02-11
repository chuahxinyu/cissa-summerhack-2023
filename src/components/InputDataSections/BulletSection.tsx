import { IBulletSection } from '../types';
import * as Yup from 'yup';
import { Grid, Typography } from '@mui/material';
import TextInputField from '../Forms/TextInputField';

const BulletSection = ({ section }: { section: IBulletSection }) => {
  return (
    <Grid container spacing={4} paddingLeft={4}>
      <Grid container item spacing={2} id="bulletSection">
        <Typography variant="h4" paddingTop={5}>
          {section.sectionTitle}
        </Typography>
        <Grid container item direction="column" id="bulletSectionTitleField">
          <Grid item xs>
            <TextInputField label="Bullet Point" name="sectionTitle" placeholder="e.g. Skills" size="small" />
          </Grid>
          <Grid item xs>
            <TextInputField label="Bullet Point" name="sectionTitle" placeholder="e.g. Skills" size="small" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BulletSection;
