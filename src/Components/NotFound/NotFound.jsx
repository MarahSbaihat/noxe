import React from 'react';
import style from './NotFound.module.css';

function NotFound() {
  return (
    <>
      <div className="row d-flex align-items-center w-100 vh-100">
        <div className="col-md-6">
        <img className='w-75 h-75 d-flex align-content-center' src="/error.png" alt="error not found" />
        </div>
        <div className="col-md-6">
          <div className="h1">
            NOT FOUND
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound