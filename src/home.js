import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PreviewVideo from './PreviewVideo';
import Hero from './Hero';
import Follow from './Follow';

function Home() {
  return (
    <div id="home">
      <Hero />
      <PreviewVideo />
      <Follow />
      <Container>
        <Typography>{'If you’re hungry for even more information, you can find '}<a href="https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=1478098107">{'archives of past VRDs here'}</a>{' and '}<a href="https://challonge.com/users/katerberg/tournaments">{'view our tournament brackets right here.'}</a></Typography>
      </Container>
    </div>
  );
}

export default Home;
