import { Box, Button, Container, TextField, Typography } from '@mui/material';
import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { IResumeData } from './types';
import { testTemplate } from '../templates/testTemplate';
import { template1 } from '../templates/template1';
import { removeSpaces } from '../utils/removeSpaces';

const Preview = ({ resumeData }: { resumeData: IResumeData }) => {
  var doc = new jsPDF();
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [blobUrl, setBlobUrl] = useState('');

  /**
   * Automatically reload preview when resume data changes.
   */
  useEffect(() => {
    reloadPreview();
  }, [resumeData]);

  const reloadPreview = async () => {
    // Get Template and Remove Spaces from resumeData
    const template = resumeData.template;
    const resumeDataCopy: IResumeData = removeSpaces(JSON.parse(JSON.stringify(resumeData)));

    // Generate HTML String based on Template
    let htmlStringTemp = testTemplate(resumeDataCopy);
    if (template === 'Template 1 Name') {
      htmlStringTemp = template1(resumeDataCopy);
    }

    // Create Document Blob usng HTML and jsPdf
    doc.html(htmlStringTemp, {
      callback: function (doc) {
        let blobPDF = new Blob([doc.output('blob')], {
          type: 'application/pdf',
        });
        let blobUrl = URL.createObjectURL(blobPDF);
        setBlobUrl(blobUrl);
      },
      x: 10,
      y: 10,
    });
  };

  const download = () => {
    doc.save();
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        3. Download your resume
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        minHeight="100vh">
        <Document
          file={blobUrl}
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            setPageNumber(1);
          }}>
          <Page pageNumber={pageNumber} />
        </Document>
        <Typography variant="body1">
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </Typography>
        <div>
          <Button
            type="button"
            disabled={pageNumber <= 1}
            onClick={() => {
              setPageNumber((prevPage) => prevPage - 1);
            }}>
            Previous
          </Button>
          <Button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={() => {
              setPageNumber((prevPage) => prevPage + 1);
            }}>
            Next
          </Button>
          <Button variant="contained" onClick={() => download()}>
            Download
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default Preview;
