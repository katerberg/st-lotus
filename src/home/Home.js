import React from 'react';
import PreviewVideo from './PreviewVideo';
import Hero from './Hero';
import Follow from './Follow';
import Archives from './Archives';

function Home() {
  return (
    <div id="home">
      <Hero />
      <PreviewVideo />
      <Follow />
      <Archives/>
    </div>
  );
}

export default Home;
