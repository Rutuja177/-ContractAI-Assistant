import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import sample from '../assets/Lorem_ipsum.pdf';
import Toolbar from './Toolbar';
import AIAssistModal from './modal';

// Set workerSrc to use PDF.js worker, it's required for the library to work
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Start with first page
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

return (
    <main>
    {/* toolbar content */}
    <Toolbar/>
    <div>
    </div>
        <div className="items-center mt-1 h-full ml-4">
            <div className="inline-block justify-center">
                <Document
                    file={sample} // Replace with your PDF file path or URL
                    onLoadSuccess={onDocumentLoadSuccess}
                    onClick={()=>{setIsModalOpen(true)}}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </div>
        <div className="flex justify-center items-center mb-4">
            <button 
                className="bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                onClick={() => setPageNumber(pageNumber - 1)} 
                disabled={pageNumber <= 1}>
                Previous
            </button>
            <span className="inline-block bg-gray-200 text-gray-700 py-2 px-4">
                Page {pageNumber} of {numPages}
            </span>
            <button 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                onClick={() => setPageNumber(pageNumber + 1)} 
                disabled={pageNumber >= numPages}>
                Next
            </button>
        </div>
        <AIAssistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
);
};

export default PDFViewer;