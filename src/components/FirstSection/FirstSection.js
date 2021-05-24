import React from 'react';

import fun from './assets/fun.svg';
import phone from './assets/phone.png';

export default function FirstSection() {
  return (
    <div className="first-section" id="Now">
      <div className="container">
        <div className="row welcome-message d-none d-md-block">
          <div className="col-12 text-center">
            carpooling made <span className="strong"> easy,</span>
          </div>
          <div className="col-12 text-center">
            <span className="strong">safe </span>and{' '}
            <img src={fun} className="fun" alt="fun" /> for
            <span className="strong italic"> everyone</span>
          </div>
        </div>
        <div className="row welcome-message d-block d-md-none">
          <div className="col-12 text-center">carpooling made</div>
          <div className="col-12 text-center">
            <span className="strong">easy,</span>
            <span className="strong"> safe </span>and{' '}
            <img src={fun} className="fun" alt="fun" /> for
          </div>
          <div className="col-12 text-center">
            <span className="strong italic"> everyone</span>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center mt-4 mt-md-2 phone-container">
            <img src={phone} className="phone" alt="fun" />
            <div className="gradient"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
