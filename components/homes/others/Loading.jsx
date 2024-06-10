import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// components/Loading.js
export default function Loading(){
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };
  

  
