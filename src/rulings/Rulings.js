import React from 'react';
import {styled} from '@mui/system';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import BannedCards from './BannedCards';
import SpacedHeader from '../common/SpacedHeader';
import Box from '@mui/material/Box';
import Ruling from './Ruling';

const DraftPickImage = styled('img')({
  width: '100%',
});

export default function Rulings() {
  return (
    <Container maxWidth="lg">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'Rulings'}</SpacedHeader>
      <Typography paragraph>{'Over the course of many Vintage Rotisserie Drafts, we have found quite a few edge cases regarding the rules that have needed to be clarified.'}</Typography>
      <Typography paragraph>{'Current rulings and divergences are listed below.'}</Typography>
      <Box sx={{marginBottom: 6}}>
        <Ruling defaultExpanded
          header="Each player gets 46 picks"
          number={1}
          updated="2021-10-02"
        >
          <Typography paragraph>{'Cards are picked in order from first seed through eighth seed, and then from eighth seed back to first seed.'}</Typography>
          <DraftPickImage
            alt="Players sitting around a table with computers drafting cards"
            src={`${process.env.PUBLIC_URL}/draft-order.png`}
          />
          <Typography paragraph>{'Each player may select 46 cards over the course of the draft and may not select any card that has been already taken.'}</Typography>
          <Typography paragraph>{'If a player selects a card that has been taken by another player, they may select a different card. If it is noticed several picks later, they may not choose a card that has been taken in the interim and are limited to the remaining cards only.'}</Typography>
          <Typography paragraph
            variant="body2"
          >{'2021-10-02: Changed to 46 picks instead of 45 to prevent first and last pick going to first seed.'}</Typography>
        </Ruling>
        <Ruling header="Decks are 40 cards"
          number={2}
          updated="2021-10-02"
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
          <Typography paragraph>
            {'Any cards not in the “Main Deck” of 40 or more cards is considered the “Sideboard” and allows cards such as '}
            <Link href="https://scryfall.com/card/jud/64/death-wish">{'Death Wish'}</Link>
            {' to retrieve them during a game. The “Main Deck” must be selected prior to the first match and must be the same for the first game of all matches in the tournament.'}
          </Typography>
          <Typography paragraph
            variant="body2"
          >{'2021-10-02: Added “Wastes” to the list of free cards.'}</Typography>
        </Ruling>
        <Ruling header="All cards not legal in Vintage are banned"
          number={3}
          updated="2019-02-03"
        >
          <Typography paragraph>
            {'Any cards that are '}
            <Link href="https://magic.wizards.com/en/game-info/gameplay/rules-and-formats/banned-restricted">{'banned in Vintage'}</Link>
            {' are also banned in St Lotus tournaments. As of January 8, 2022 (St Lotus #8), this includes the following:'}
          </Typography>
          <BannedCards />
        </Ruling>
        <Ruling header="“Self-tutoring” cards earn the player four copies"
          number={4}
          updated="2019-09-08"
        >
          <Typography paragraph>
            {'Cards like '}
            <Link
              href="https://scryfall.com/card/nem/107/nesting-wurm"
            >{'Nesting Wurm'}</Link>
            {' or '}
            <Link href="https://scryfall.com/card/ons/187/avarax">{'Avarax'}</Link>
            {' require a pick to be made in order to play them, but once picked, allow the player to play up to four copies in their pool.'}
          </Typography>
        </Ruling>
        <Ruling header="“Draft” cards do not function"
          number={5}
          updated="2021-08-01"
        >
          <Typography paragraph>
            {'Cards that reference “draft” such as '}
            <Link
              href="https://scryfall.com/card/cns/59/cogwork-spy"
            >{'Cogwork Spy'}</Link>
            {' do not have an effect because during a rotisserie draft, cards are “picked” rather than “drafted”.'}
          </Typography>
          <Typography paragraph>
            {'Similarly, cards that reference “packs” such as '}
            <Link
              href="https://scryfall.com/card/cns/55/canal-dredger"
            >{'Canal Dredger'}</Link>
            {' do not have a useful function since there are no packs that are picked from.'}
          </Typography>
          <Typography paragraph>
            <Link
              href="https://scryfall.com/card/cns/61/deal-broker"
            >{'Deal Broker'}</Link>
            {' still functions as it would during a booster draft.'}
          </Typography>
        </Ruling>
        <Ruling header="“Any number” cards cost a single pick"
          number={6}
          updated="2021-10-02"
        >
          <Typography paragraph>
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
