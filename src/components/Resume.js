import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import React, { useState } from 'react'

function Resume() {
      
        // function onDocumentLoadSuccess({ numPages }) {
        //   setNumPages(numPages);
        
    return (
      <div >
        <Document file="../img/WebDev-Resume.pdf">
            <Page />
        </Document>
        <br></br>
        <p>If PDF fails to load, click 'Resume' link in the footer of the page to view resume as a Google Doc.</p>
      </div>
    );
  }
  
  export default Resume;