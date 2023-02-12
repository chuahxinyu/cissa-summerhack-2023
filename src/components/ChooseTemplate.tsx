import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { IResumeData, TemplateOptions } from './types';
import '../App.css';

interface ITemplate {
  name: TemplateOptions;
  description: string;
  imagePath?: string;
}

const ChooseTemplate = ({ setResumeData }: { setResumeData: Dispatch<SetStateAction<IResumeData>> }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateOptions>('Template 1 Name');
  const [hoveredTemplate, setHoveredTemplate] = useState('');
  const templates: ITemplate[] = [
    {
      name: 'Template 1 Name',
      description: 'template description...',
      imagePath: '',
    },
    {
      name: 'Template 2 Name',
      description: 'template description...',
      imagePath: '/static/template2.png',
    },
    {
      name: 'Template 3 Name',
      description: 'template description...',
      imagePath: '/static/template3.png',
    },
    {
      name: 'Template 4 Name',
      description: 'template description...',
      imagePath: '/static/template4.png',
    },
  ];
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        1. Choose a Template
      </Typography>
      <Container style={{ width: '100%', overflow: 'auto', display: 'flex' }}>
        {templates.map((template, i) => (
          <Container key={i}>
            <Card
              variant="outlined"
              key={i}
              style={{
                border: `${template.name === selectedTemplate ? '0.2rem solid #3d67ff' : ''}`,
                width: '20rem',
                height: '28rem',
              }}>
              <CardActionArea
                onClick={() => {
                  setSelectedTemplate(template.name);
                  setResumeData((prevState) => ({ ...prevState, template: template.name }));
                }}
                onMouseOver={() => setHoveredTemplate(template.name)}
                style={{
                  width: '20rem',
                  height: '28rem',
                  transition: '0.5s',
                }}>
                <div
                  style={{
                    width: '20rem',
                    height: '28rem',
                    background: `${template.imagePath ? `url(${template.imagePath})` : ''}`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '20rem 28rem',
                    filter: `${template.name === hoveredTemplate ? 'blur(3px)' : ''}`,
                    WebkitFilter: `${template.name === hoveredTemplate ? 'blur(3px)' : ''}`,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: '0.5s',
                  }}></div>
                <CardContent
                  style={{
                    backgroundColor: 'transparent',
                    position: 'relative',
                    opacity: `${template.name === hoveredTemplate || !template.imagePath ? 100 : 0}`,
                    transition: '0.5s',
                  }}>
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
