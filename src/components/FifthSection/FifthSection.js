import React from 'react';

import the from './assets/the.svg';

export default function FifthSection() {
  return (
    <div className="fifth-section">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col"></div>
          <img src={the} className="the" alt="the" />
        </div>
      </div>
    </div>
  );
}
