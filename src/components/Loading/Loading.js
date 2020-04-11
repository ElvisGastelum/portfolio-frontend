import React from "react";

export default function Loading() {
  return (
    <div className='d-flex justify-content-center h-100'>
      <div class="spinner-border text-light align-self-center" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
