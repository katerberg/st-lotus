import React from 'react';

function Home() {
  return (
    <div id="home">
      <h1>{'Home'}</h1>
      <p>{'Welcome to the home of St. Lotus, a Vintage Rotisserie Draft series based in St. Louis, MO!'}</p>
      <p>{'We run a Vintage Rotisserie Draft with a rotating roster of local players approximately once per quarter. If you’re invested in learning more about Vintage Rotisserie Draft, read the rules here!'}</p>
      <p>{'Our next event will be on February 1st, 2019, with the stream starting at 8:30 AM US Central Time.'}</p>
      <p>{'We stream our events on Twitch along with periodic draft recaps, set reviews, and other format-related discussions in between. '}<a href="https://www.twitch.tv/stlotusmtg">{'Follow us now so you don’t miss a stream!'}</a></p>
      <p>{'If you want to watch our archived events, '}<a href="https://www.youtube.com/channel/UCpwS9X2A-5pmo1txhyD7eoA">{'check out our YouTube channel'}</a>{', where you can see our past VRDs.'}</p>
      <p><a href="https://www.twitter.com/stlotusmtg">{'Follow us on Twitter'}</a>{' to get updates about upcoming events, participate in giveaways, and be part of great discussions. If you want even more places to talk about Vintage Rotisserie Draft, why not '}<a href="https://discord.gg/nxBPYXn">{'join the VRD Discord right here'}</a>{' as well?'}</p>
      <p>{'If you’re hungry for even more information, you can find '}<a href="https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=1478098107">{'archives of past VRDs here'}</a>{' and '}<a href="https://challonge.com/users/katerberg/tournaments">{'view our tournament brackets right here.'}</a></p>
    </div>
  );
}

export default Home;
