import { Grid, Typography } from '@mui/material';
import DetailedSubsection from './DetailedSubsection';

interface DetailedSectionProps {
  name: string;
  titlesName: string;
  subtitlesName?: string;
  hasDate?: boolean;
  hasLocation?: boolean;
}

const defaultProps: DetailedSectionProps = {
  name: "Section name",
  titlesName: "Section titles name",
  hasDate: false,
  hasLocation: false,
};

const DetailedSection: React.FC<DetailedSectionProps> = ({name, titlesName, subtitlesName, hasDate, hasLocation}) => {
  return (
    <Grid container item spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">{name}</Typography>
        </Grid>
        <DetailedSubsection titlesName={titlesName} subtitlesName={subtitlesName} hasDate={hasDate} hasLocation={hasLocation}/>
    </Grid>
  );
};

export default DetailedSection;