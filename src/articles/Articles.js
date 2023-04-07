import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import React from 'react';
import ArticlePreview from './ArticlePreview';
import Grid from '@mui/material/Grid';

export default function Articles() {
  return (
    <Container maxWidth="lg">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'Articles'}</SpacedHeader>
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
        >
            <ArticlePreview author="Stephen Hagan"
              date={new Date(2022, 8, 19)}
              heading="Cast from Exile: Exploring Faldorn"
              image="https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/b/6ba78cd7-a3b6-4ef2-b6b7-3416c0ba61f1.jpg?1655088896"
              link="/articles/2022-09-19/Cast From Exile"
              text="This article begins with a love of impulse draw. If you are not aware, impulse draw has become the name for the effect commonly found in red where cards are exiled from the top of your deck with the ability to be cast either the same turn, or some point in the feature. Wizards has begun what looks like a heavy lean into impulse in recent sets with cards such as Valakut Exploration, Atsushi, the Blazing Sky, Experimental Synthesizer"
            />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
            <ArticlePreview author="CommonOpponent"
              date={new Date(2022, 5, 21)}
              heading="Deep Dive: Workshop Aggro"
              image="https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/2/72c1a731-7854-42b1-8719-ac3c2a269c1f.jpg?1562637545"
              link="/articles/2022-06-21/Deep Dive Workshop Aggro"
              text="Fundamental to understanding any meta-game is a familiarity with the capabilities, limitations, and weaknesses of the most aggressive viable strategies. Vintage Rotisserie Draft is no different, so I’d like to give a thorough look at a class of aggressive decks with many common threads, but best described as Mishra’s Workshop-based aggressive decks. Artifact-heavy decks have sprung up across Magic’s history of formats, meaning"
            />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
            <ArticlePreview author="Dom Harvey"
              date={new Date(2022, 3, 3)}
              heading="How I Won My VRD"
              image="https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/0/e0139f60-d48e-46fb-9f5a-1e3d7558c834.jpg?1559591444"
              link="/articles/2022-04-03/How I Won My VRD"
              text="Rotisserie Drafts sound like they might grow old fast - a static card pool that is only marginally shaken up by most new sets and lacks the variety that the random contents of packs gives to normal booster draft. In practice, Vintage Rotisserie Draft has remained popular over the years and as soon as you try it you see why - it's a format of endless possibilities where the public information of the drafting process creates"
            />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
            <ArticlePreview author="CommonOpponent"
              date={new Date(2021, 11, 9)}
              heading="Your First VRD"
              image="https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/9/091eb13d-9318-4b12-9f94-6276b11981d1.jpg?1624591842"
              link="/articles/2021-12-09/Your First VRD"
              text="Vintage Rotisserie Draft can be an intimidating format to approach. The name Vintage evokes in many players a sense of overwhelming dread, not simply because of the sheer volume of the card pool, but for the misconception that most games of Vintage are super fast one or two turn affairs. It’s certainly true that some games can be decided quickly, but more often than not you will have an interactive game, possibly even one"
            />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
            <ArticlePreview author="Mark Katerberg"
              date={new Date(2021, 10, 25)}
              heading="Combos in VRD"
              image="https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/4/f4459187-de64-456f-bb66-56dea40d5c3e.jpg?1562057371"
              link="/articles/2021-11-25/Combos in VRD"
              text="Vintage Rotisserie Draft is well known as a format where combo decks can run rampant. While aggressive and controlling strategies often rely on redundancy (either of threats or of answers), combination decks generally rely on a few powerful pieces, with replaceable filtering pieces that aid in finding the crucial parts that are needed to win the game"
            />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
            <ArticlePreview author="Stephen Hagan"
              date={new Date(2021, 10, 6)}
              heading="Planeswalkers in VRD"
              image="https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/8/c8817585-0d32-4d56-9142-0d29512e86a9.jpg?1598304029"
              link="/articles/2021-11-06/Planeswalkers in VRD"
              text="After St. Lotus VRD 7 there is some discussion about the ascendancy of planeswalker cards to the top of the format. Brandon Curry’s powerful Balance/planeswalker deck was built around getting a 3 mana walker of some type (Oko, Thief of Crowns, Teferi, Time Raveler, or Dovin, Hand of Control) out on turn 2 as often as he could. Packing 8 maindeck walkers his strategy carried him to a 5-2 + a play off win against Eric Levine’s"
            />
        </Grid>
      </Grid>
    </Container>
  );
}
