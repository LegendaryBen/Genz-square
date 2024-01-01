import React from 'react'
import { pdfjs } from 'react-pdf';
import PdfComp from './pdfComp';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString(); 



const Viewer = ({hide}) => {
    return (
        <div className='Viewer'>
            <div className="hide-pdf">
                <span className="material-symbols-outlined" onClick={()=>{hide(false)}}>cancel</span>
            </div>
            <div className="hold-pdf">
                <div className='arrange'>
                    <PdfComp/>
                </div>
                
            </div>
        </div>
    )
}

export default Viewer
