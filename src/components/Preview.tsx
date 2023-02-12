import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { IResumeData } from './types';
import { testTemplate } from '../templates/testTemplate';
import { generateTemplate1, template1 } from '../templates/template1';
import { removeSpaces } from '../utils/removeSpaces';
import jsPDF from 'jspdf';

const Preview = ({ resumeData }: { resumeData: IResumeData }) => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [blobUrl, setBlobUrl] = useState<string>('');

  /**
   * Automatically reload preview when resume data changes.
  */
 useEffect(() => {
   reloadPreview();
  }, [resumeData]);

  const generatePdf = (): jsPDF => {
    // Get Template and Remove Spaces from resumeData
    const template = resumeData.template;
    const resumeDataCopy: IResumeData = removeSpaces(
      JSON.parse(JSON.stringify(resumeData)),
    );
    if (template === 'Template 1 Name') {
      return generateTemplate1({resumeDataCopy: resumeDataCopy, setBlobUrl: setBlobUrl})
    } else {
      const doc = new jsPDF();
      doc.text(['string1', 'string2', 'string3'], 10, 10);
      return doc;
    }
  }

  const reloadPreview = async () => {
    // Get Template and Remove Spaces from resumeData
    const template = resumeData.template;
    const resumeDataCopy: IResumeData = removeSpaces(
      JSON.parse(JSON.stringify(resumeData)),
    );
    const doc = generatePdf()
    let blobPDF = new Blob([doc.output('blob')], {
    type: 'application/pdf',
    });
    const blobUrl = URL.createObjectURL(blobPDF);
    setBlobUrl(blobUrl);
  };
  
  const download = () => {
    const doc: jsPDF = generatePdf()
    doc.save('Resume.pdf');
  };

  return (
    <Container>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <Typography variant="h1">
            3. Download your resume
          </Typography>
        </Grid>

        <Grid container item spacing={2} direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <Document
              file={blobUrl}
              onLoadSuccess={({ numPages }) => {
                setNumPages(numPages);
                setPageNumber(1);
              }}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Grid>

          <Grid item>
            <Typography variant="body1">
              Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </Typography>
          </Grid>

          <Grid container item alignItems="center" justifyContent="center">
            <Button
              type="button"
              disabled={pageNumber <= 1}
              onClick={() => {
                setPageNumber((prevPage) => prevPage - 1);
              }}
            >
              Previous
            </Button>
            <Button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={() => {
                setPageNumber((prevPage) => prevPage + 1);
              }}
            >
              Next
            </Button>
          </Grid>

          <Grid item>
            <Button variant="contained" onClick={() => download()}>
              Download
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Preview;
