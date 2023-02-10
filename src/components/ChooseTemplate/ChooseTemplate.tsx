import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent, Container, Grid } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { IResumeData } from '../types';
import '../App.css';

const ChooseTemplate = ({ setResumeData }: { setResumeData: Dispatch<SetStateAction<IResumeData>> }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('Template 1 Name');
  const templates = [
    {
      name: 'Template 1 Name',
      description: 'template description...',
      imagePath: '',
    },
    {
      name: 'Template 2 Name',
      description: 'template description...',
      imagePath: '',
    },
    {
      name: 'Template 3 Name',
      description: 'template description...',
      imagePath: '',
    },
    {
      name: 'Template 4 Name',
      description: 'template description...',
      imagePath: '',
    },
  ];
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        2. Choose a Template
      </Typography>
      <Container style={{ width: '100%', overflow: 'auto', display: 'flex' }}>
        {templates.map((template, i) => (
          <Container>
            <Card
              variant="outlined"
              key={i}
              style={{ border: `${template.name === selectedTemplate ? `0.2rem solid #3d67ff` : ``}` }}>
              <CardActionArea onClick={() => setSelectedTemplate(template.name)}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {template.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {template.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default ChooseTemplate;
