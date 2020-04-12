import React from "react";

export default function Loading() {
  return (
    <div className='d-flex justify-content-center h-100'>
      <div className="spinner-border text-light align-self-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
