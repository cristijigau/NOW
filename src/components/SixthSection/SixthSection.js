import React from 'react';

import video from './assets/bg-video.mp4';

export default function SixthSection() {
  return (
    <div className="sixth-section">
      <div className="container-fluid">
        <div className="row">
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="content d-flex flex-column  justify-content-end">
            <h1>
              now - is a fresh way to share the road and make new coneections.
            </h1>
            <p>Choose to drive or ride with people already going your way.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
