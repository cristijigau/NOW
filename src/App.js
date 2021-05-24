import React, { useState } from 'react';

import {
  Navigation,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  SeventhSection,
} from './components';

function App() {
  const [current, setCurrent] = useState('Now');
  return (
    <div className="App">
      <Navigation current={current} setCurrent={setCurrent} />
      <FirstSection />
      <SecondSection setCurrent={setCurrent} />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </div>
  );
}

export default App;
