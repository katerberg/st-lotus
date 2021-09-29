import React from 'react';
import {styled} from '@mui/system';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import Box from '@mui/material/Box';
import Ruling from './Ruling';

const DraftPickImage = styled('img')({
  width: '100%',
});

export default function Rulings() {
  return (
    <Container maxWidth="md">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'Rulings'}</SpacedHeader>
      <Typography paragraph>{'Over the course of many Vintage Rotisserie Drafts, we have found quite a few edge cases regarding the rules that have needed to be clarified.'}</Typography>
      <Typography paragraph>{'Current rulings and divergences are listed below.'}</Typography>
      <Box sx={{marginBottom: 6}}>
        <Ruling header="Each player gets 45 picks"
          number={1}
        >
          <Typography paragraph>{'Cards are picked in order from first seed through eighth seed, and then from eighth seed back to first seed.'}</Typography>
          <DraftPickImage
            alt="Players sitting around a table with computers drafting cards"
            src={`${process.env.PUBLIC_URL}/draft-order.png`}
          />
          <Typography paragraph>{'Each player may select 45 cards over the course of the draft and may not select any card that has been already taken.'}</Typography>
          <Typography>{'If a player selects a card that has been taken by another player, they may select a different card. If it is noticed several picks later, they may not choose a card that has been taken in the interim and are limited to the remaining cards only.'}</Typography>
        </Ruling>
        <Ruling header="Decks are 40 cards including basics"
          number={2}
        >
          <Typography paragraph>
            {'Players must build a deck containing a minimum of 40 cards. They may include any number of '}
            <Link
              href="https://scryfall.com/card/lea/287/plains"
            >{'Plains'}</Link>
            {', '}
            <Link href="https://scryfall.com/card/lea/288/island">{'Island'}</Link>
            {', '}
            <Link href="https://scryfall.com/card/lea/291/swamp">{'Swamp'}</Link>
            {', '}
            <Link href="https://scryfall.com/card/lea/292/mountain">{'Mountain'}</Link>
            {', '}
            <Link href="https://scryfall.com/card/lea/295/forest">{'Forest'}</Link>
            {', '}
            <Link href="https://scryfall.com/card/tsr/410/wastes">{'Wastes'}</Link>
            {' in addition to the cards that they pick.'}
          </Typography>
          <Typography >
            {'Any cards not in the “Main Deck” of 40 or more cards is considered the “Sideboard” and allows cards such as '}
            <Link href="https://scryfall.com/card/jud/64/death-wish">{'Death Wish'}</Link>
            {' to retrieve them during a game. The “Main Deck” must be selected prior to the first match and must be the same for the first game of all matches in the tournament.'}
          </Typography>
        </Ruling>
        <Ruling header="“Self-tutoring” cards earn the player four copies"
          number={3}
        >
          <Typography>
            {'Cards like '}
            <Link
              href="https://scryfall.com/card/nem/107/nesting-wurm"
            >{'Nesting Wurm'}</Link>
            {' or '}
            <Link href="https://scryfall.com/card/ons/187/avarax">{'Avarax'}</Link>
            {' require a pick to be made in order to play them, but once picked, allow the player to play up to four copies in their pool.'}
          </Typography>
        </Ruling>
        <Ruling header="“Any number” cards cost a single pick"
          number={4}
        >
          <Typography>
            {'Cards like '}
            <Link
              href="https://scryfall.com/card/5dn/58/relentless-rats"
            >{'Relentless Rats'}</Link>
            {' or '}
            <Link href="https://scryfall.com/card/ice/371/snow-covered-island">{'Snow-Covered Island'}</Link>
            {' require a pick to be made in order to play them, but once picked, may be played in any number.'}
          </Typography>
        </Ruling>
      </Box>
    </Container>
  );
}
