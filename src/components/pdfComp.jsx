import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import ben from '../images/ben.pdf'

function PdfComp() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  let size;



  if(window.innerWidth >= 1024){
    size = 1000;
  }else if(window.innerWidth < 1024 && window.innerWidth >= 700){

    size = 600;

  }else if(window.innerWidth < 700){

    size = 300;
    
  }

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

  return (

    <>
        <Document file={ben} onLoadSuccess={onDocumentLoadSuccess}>

            <p>
                Page {pageNumber} of {numPages}
            </p>

            {
                Array.apply(null,Array(numPages)).map((x,i)=>i+1).map((page,i)=>{
                    return(
                        <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} key={i} width={size} renderMode='svg'/>
                    )
                })
            }

            
        </Document>
    </>
     
    
  );
}


export default PdfComp