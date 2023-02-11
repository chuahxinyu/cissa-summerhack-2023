import * as Yup from 'yup';
import {Grid, Typography } from '@material-ui/core/';
import TextInputField from '../Forms/TextInputField';
import { IDetailedSubsection, BulletPoint} from '../types';

const INITIAL_FORM_STATE: IDetailedSubsection = {
    title: '',
    subtitle: '',
    date: '',
    location: '',
    bullets: [] as Array<BulletPoint>,
};

interface DetailedSubsectionProps {
  titlesName: string;
  subtitlesName?: string;
  hasDate?: boolean;
  hasLocation?: boolean;
}

const defaultProps: DetailedSubsectionProps = {
  titlesName: "title",
  hasDate: false,
  hasLocation: false,
};

// title:

const DetailedSubsection: React.FC<DetailedSubsectionProps> = ({titlesName, subtitlesName, hasDate, hasLocation}) => {
  return (
    <Grid container item spacing={2}>
        <Grid item xs={12}>
          <TextInputField label={titlesName} name="title"/>
        </Grid>

        {subtitlesName !== undefined &&
          <Grid item xs={6}>
            <TextInputField label={subtitlesName} name="subtitle"/>
          </Grid>
        }

        {hasDate &&
          <Grid item xs>
            <TextInputField label="Date" name="date" placeholder="e.g. June 2020 - December 2020"/>
          </Grid>
        }
        
        {hasLocation &&
          <Grid item xs>
            <TextInputField label="Location" name="location" />
          </Grid>
        }

        <Grid item xs={12}>
          <TextInputField label="Description" name="description" />
        </Grid>
      </Grid>
  );
};
// TODO: find out how to replace one description box to BulletSections

export default DetailedSubsection;