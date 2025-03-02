'use client'

import PreviewVideo from '@/app/home/PreviewVideo';
import CountDown from '@/app/home/CountDown';
import CardSearch from '@/app/home/card-search/CardSearch';
import Hero from '@/app/home/Hero';
import Follow from '@/app/home/Follow';

export default function App() {
  return (
    <div>
      <Hero />
      <CountDown />
      <CardSearch />
      <Follow />
      <PreviewVideo />
    </div>
  );
}

