import React from 'react';

import map from './assets/Icon-map.svg';
import traffic from './assets/Icon-traffic.svg';
import transport from './assets/Transport.svg';

export default function ThirdSection() {
  return (
    <div className="third-section">
      <div className="container-fluid">
        <div className="row d-none d-md-block">
          <div className="col text-center message">
            {`Ok, you're gonna like this`}
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-start px-">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img src={map} className="map" alt="map" />
            <span className="mt-3 card-text">Map style switcher</span>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label">
              <div className="ball"></div>
            </label>
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-end mt-4">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <img src={traffic} className="traffic" alt="traffic" />
            <span className="mt-3 card-text">Real-time trafic date</span>
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <img src={transport} className="transport" alt="transport" />
            <span className="mt-3 card-text text-center">
              Schedule of public transport that is near you
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
