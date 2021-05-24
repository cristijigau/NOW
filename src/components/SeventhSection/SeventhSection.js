import React, { useRef, useEffect } from 'react';

import VanillaTilt from 'vanilla-tilt';

import apple from './assets/Apple logo.svg';
import graph from './assets/carpool-graph.svg';
import iPhone from './assets/iPhone_X.png';
import android from './assets/play_market.svg';

export default function SeventhSection() {
  const tilt = useRef(null);
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30
  };
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div className="seventh-section">
      <div className="container-fluid first-container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="phone">
            <img src={iPhone} className="iPhone" alt="iPhone" />
            <img ref={tilt} src={graph} className="graph" alt="graph" />
          </div>
          <div className="col-12 d-flex flex-column justify-content-center join-message">
            <h1 className="text-center">Join the band</h1>
            <p className="text-center">
              a fresh way to share the road and make new connections
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid second-container">
        <div className="row links d-flex align-items-center flex-column flex-md-row justify-content-md-center">
          <div className="col-12 logo-container mx-md-3">
            <img src={apple} className="apple" alt="apple" />
            <span className="text-center">Download for iOS</span>
          </div>
          <div className="col-12 logo-container mx-md-3">
            <img src={android} className="android" alt="android" />
            <span className="text-center">Download for Android</span>
          </div>
        </div>
      </div>
      <div className="container-fluid orange-container"></div>
    </div>
  );
}
