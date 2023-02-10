import { Button, TextField } from '@mui/material';
import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { IResumeData } from './types';
import { testTemplate } from '../templates/testTemplate';

const Preview = ({ resumeData }: { resumeData: IResumeData }) => {
  var doc = new jsPDF();
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [blobUrl, setBlobUrl] = useState('');
  const [jsonString, setJsonString] = useState(
    `{
    "template": "test",
    "aboutMe": {
      "name": "hank green",
      "email": "test@test.com",
      "phoneNo": "123456789",
      "jobTitle": "test job title"
    }, 
    "sections": [] 
}`,
  );

  const [htmlString, setHtmlString] = useState('');

  const reloadPreview = async () => {
    // const removedWhitespace = jsonString.replace(/\s/g, ''); // &nbsp;
    // console.log(removedWhitespace);
    // const resumeData = JSON.parse(removedWhitespace);
    // console.log(JSON.stringify(resumeData, null, 2));

    const htmlStringTemp = testTemplate(resumeData);
    setHtmlString(htmlStringTemp);
    console.log({ htmlStringTemp: htmlStringTemp, htmlString: htmlString });

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
    <div>
      <Button variant="contained" onClick={() => download()}>
        Download
      </Button>
      <h1>Preview</h1>

      {/* <TextField
          id="outlined-multiline-static"
          label="JSON Input"
          multiline
          rows={10}
          value={jsonString}
          onChange={(e) => setJsonString(e.currentTarget.value)}
        /> */}
      {blobUrl}
      <Button variant="contained" onClick={() => reloadPreview()}>
        Reload Preview
      </Button>
      <Document
        file={blobUrl}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
          setPageNumber(1);
        }}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
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
      </div>
    </div>
  );
};

export default Preview;
