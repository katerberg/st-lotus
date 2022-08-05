import React from 'react';
import PreviewVideo from './PreviewVideo';
import CountDown from './CountDown';
import CardSearch from './card-search/CardSearch';
import Hero from './Hero';
import Follow from './Follow';

function Home() {
  return (
    <div>
      <Hero />
      <CountDown />
      <CardSearch startingSearchText="Black Lotus"/>
      <Follow />
      <PreviewVideo />
    </div>
  );
}

export default Home;
