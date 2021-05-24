import React from 'react';

import mockImage from './assets/mock.png';

export default function FourthSection() {
  return (
    <div className="fourth-section">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center message mt-2">Augumented reality</div>
          <div className="col image d-flex justify-content-center">
            <img src={mockImage} className="mock" alt="mock" />
          </div>
        </div>
      </div>
    </div>
  );
}
