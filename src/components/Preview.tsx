import { Button, TextField } from "@mui/material";
import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { IResumeData } from "../types/IResumeData";

const Preview = () => {
  var doc = new jsPDF();
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [blobUrl, setBlobUrl] = useState("myfile.pdf");
  const [blobUrl2, setBlobUrl2] = useState("myfile.pdf");
  const [name, setName] = useState("Sample Name");
  const [htmlString, setHtmlString] = useState(
    `<body><style>body {background-color: powderblue;}h1   {color: blue;}p    {color: red;}</style><h1>${name}</h1><p>This is a paragraph.</p></body>`
  );

  useEffect(() => {
    setHtmlString(
      `<body><style>body {background-color: powderblue;}h1   {color: blue;}p    {color: red;}</style><h1>${name}</h1><p>This is a paragraph.</p></body>`
    );
  }, [name]);

  const reloadPreview = async () => {
    // doc.html(htmlString, {
    //   callback: function (doc) {
    //     console.log(doc);
    //     var blobPDF = new Blob([doc.output("blob")], {
    //       type: "application/pdf",
    //     });
    //     var blobUrl = URL.createObjectURL(blobPDF);
    //     setBlobUrl(blobUrl);
    //   },
    //   x: 10,
    //   y: 10,
    // });
    doc.text(`${name}`, 30, 30);
    doc.text("Hello world!", 30, 50);
    setBlobUrl(doc.output("dataurl"));
  };

  const download = () => {
    var doc2 = new jsPDF();
    doc2.html(htmlString, {
      callback: function (doc2: { save: () => void }) {
        doc2.save();
      },
      x: 10,
      y: 10,
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={() => download()}>
        {" "}
        Download
      </Button>
      <h1>Preview</h1>
      <TextField
        required
        id="outlined-required"
        label="name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <hr />
      {blobUrl}
      <Button variant="contained" onClick={() => reloadPreview()}>
        Reload Preview
      </Button>
      <Document
        file={blobUrl}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
          setPageNumber(1);
        }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
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
      </div>
    </div>
  );
};

export default Preview;
