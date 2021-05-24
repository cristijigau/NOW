import React, { useState } from 'react';

import driverImage from './assets/driver.png';
import passengerImage from './assets/passenger.png';

export default function SecondSection({ setCurrent }) {
  const [buttonValue, setbuttonValue] = useState(true);
  const display = buttonValue ? (
    <>
      <div className="col-12 d-flex justify-content-center">
        <p className="message">{`See who's driving and ask to join`}</p>
      </div>
      <div className="col-12 d-flex justify-content-center">
        {' '}
        <img src={passengerImage} className="passenger" alt="passenger" />
      </div>
    </>
  ) : (
    <>
      <div className="col-12 d-flex justify-content-center">
        {' '}
        <img src={driverImage} className="driver" alt="driver" />
      </div>
      <div className="col-12 d-flex justify-content-center">
        {' '}
        <span className="driver-text">
          Set your route, time, and available seats
        </span>
      </div>
    </>
  );
  return (
    <div className="container-fluid second-section" id="How to ride">
      <div className="row main-container">
        <div className="col-12 d-flex justify-content-center blabla">
          <div className="row button-switch-container">
            <div className="col-6">
              <div
                className={`btn rounded ${buttonValue ? 'active' : ' '}`}
                onClick={() => {
                  setbuttonValue(!buttonValue);
                  setCurrent('How to ride');
                }}
              >
                Passenger
              </div>
            </div>
            <div className="col-6">
              <div
                className={`btn rounded ${!buttonValue ? 'active' : ' '}`}
                onClick={() => {
                  setbuttonValue(!buttonValue);
                  setCurrent('How to drive');
                }}
              >
                Driver
              </div>
            </div>
          </div>
        </div>
        {display}
      </div>
    </div>
  );
}
