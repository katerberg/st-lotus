import React from 'react';
import PreviewVideo from './PreviewVideo';
import CountDown from './CountDown';
import Hero from './Hero';
import Follow from './Follow';

function Home() {
  return (
    <div>
      <Hero />
      <CountDown />
      <PreviewVideo />
      <Follow />
    </div>
  );
}

export default Home;
