import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {styled} from '@mui/system';

const StyledImage = styled('img')({
  width: '100%',
});

export default function HowToPlay() {
  return (
    <Container maxWidth="md">
      <Typography paragraph
        sx={{marginTop: 10}}
        variant="h2"
      >{'What is a VRD?'}</Typography>
      <Typography paragraph>{'Rotisserie Draft, a structure borrowed from fantasy baseball, is one of the most skill-intensive and interesting ways to draft in Magic: the Gathering. Instead of opening booster packs, you take some defined group of cards, like a full set of a particular expansion or a cube, and draft those! In our Vintage Rotisserie Drafts, which we call “VRDs”, we draft from a pretty large group of cards - every card that’s legal to play in Vintage!'}</Typography>
      <Typography paragraph
        variant="h3"
      >{'Pick Order'}</Typography>
      <Typography paragraph>{'With eight players, there are eight spots to choose from. We could determine the pick order at random, but we like adding an extra layer of strategy (and, let’s face it, complication) by randomly ordering the players and allowing them, in that order, to choose their spot in the draft.'}</Typography>
      <Typography paragraph>{'But why would anyone choose a spot other than the earliest one available? Well, once we get through the draft order, with each player in succession choosing one card, we reverse the draft order and repeat the process. That means whoever picked first during the first round picks last during the second round! You might know this as a “snake draft”. Therefore, there’s some value to be had in the eighth pick - you might get the last pick in the first round, but you get the the first pick in the second round, and those two picks in a row can have a lot of value.'}</Typography>
      <Typography paragraph
        variant="h3"
      >{'Draft'}</Typography>
      <Typography paragraph>{'Just like in a booster draft, each player picks 45 cards, but because these picks are made one at a time, it tends to take a while - a couple hours, in fact. We take breaks every 15 picks so players can grab a drink or do a quick interview with commentary.'}</Typography>
      <Typography paragraph>{'After all the players have drafted their 45 cards, they build their 40-card decks, adding as many basic lands (Plains, Island, Swamp, Mountain, Forest and Wastes only - if you want Snow lands, you have to draft them!) as they want, just like in any draft. This event doesn’t have continuous construction - maindecks and sideboards are locked in from Round 1 through the end of the event, so building your deck right to start the day is a must.'}</Typography>
      <StyledImage
        alt="Players sitting at a table with computers"
        src={`${process.env.PUBLIC_URL}/draft.jpg`}
      />
      <Typography paragraph
        variant="h3"
      >{'Matches'}</Typography>
      <Typography paragraph>{'The event is played out in round-robin style, with each player battling each other player over the course of the day for a total of seven matches each. Once everyone has played all of their matches, we check the standings to see where everyone placed! Standings are by match record only - any ties are broken by one-game playoffs.'}</Typography>
      <Typography paragraph
        variant="h3"
      >{'Prizes'}</Typography>
      <Typography paragraph>{'In order to enter the St. Lotus VRD, you have to bring a food or drink item worth $50 or more as your buy-in. In the past, this has led players to bring steaks, giant chunks of fancy cheese, and high-end adult beverages.'}</Typography>
      <Typography paragraph>{'After the dust settles, the top 4 players enter one final draft for the prizes, with players getting picks in order as follows:'}</Typography>
      <ul>
        <li><Typography>{'1st: Picks 1, 6, 7, and 8'}</Typography></li>
        <li><Typography>{'2nd: Picks 2 and 5'}</Typography></li>
        <li><Typography>{'3rd: Pick 3'}</Typography></li>
        <li><Typography>{'4th: Pick 4'}</Typography></li>
      </ul>
      <StyledImage
        alt="Alcohol and food on a table"
        src={`${process.env.PUBLIC_URL}/buy-ins.jpg`}
      />
    </Container>
  );
}
