import { Button, Grid, Typography } from '@mui/material';
import jsPDF from 'jspdf';
import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { IResumeData } from './types';
import { testTemplate } from '../templates/testTemplate';
import { generateTemplate1, template1 } from '../templates/template1';
import { removeSpaces } from '../utils/removeSpaces';
import { generateTemplate2 } from '../templates/template2';

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
      return generateTemplate1({
        resumeDataCopy: resumeDataCopy,
        setBlobUrl: setBlobUrl,
      });
    } 
    // else if (template === 'Template 2 Name') {
    //   return generateTemplate2({
    //     resumeDataCopy: resumeDataCopy,
    //     setBlobUrl: setBlobUrl,
    //   });
    // } 
    else {
      return generateTemplate1({
        resumeDataCopy: resumeDataCopy,
        setBlobUrl: setBlobUrl,
      });
    }
  };

  const reloadPreview = async () => {
    // Get Template and Remove Spaces from resumeData
    const template = resumeData.template;
    const resumeDataCopy: IResumeData = removeSpaces(
      JSON.parse(JSON.stringify(resumeData)),
    );
    const doc = generatePdf();
    const blobPDF = new Blob([doc.output('blob')], {
      type: 'application/pdf',
    });
    const blobUrl = URL.createObjectURL(blobPDF);
    console.log(blobUrl);
    setBlobUrl(blobUrl);
  };

  return (
    <Grid
      container
      item
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ px: 7, py: 5 }}
    >
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
        <Button
          variant="contained"
          component="a"
          href={blobUrl}
          download="Resume.pdf"
        >
          Download
        </Button>
      </Grid>
    </Grid>
  );
};

export default Preview;
