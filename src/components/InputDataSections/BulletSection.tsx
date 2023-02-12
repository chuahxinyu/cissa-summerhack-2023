import { IBulletSection } from '../types';
import * as Yup from 'yup';
import { Grid, Typography } from '@mui/material';
import TextInputField from '../Forms/TextInputField';

const BulletSection = ({ section }: { section: IBulletSection }) => {
  return (
    <Grid container spacing={3} id="bulletSection">
      <Grid item xs={12}>
        <Typography variant="h4">
          {section.sectionTitle}
        </Typography>

        <Grid container item spacing={0} id="bulletSectionTitleField">
          <Grid item xs={12}>
            <TextInputField
              label="Bullet Point"
              name="sectionTitle"
              placeholder="e.g. Skills"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInputField
              label="Bullet Point"
              name="sectionTitle"
              placeholder="e.g. Skills"
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BulletSection;