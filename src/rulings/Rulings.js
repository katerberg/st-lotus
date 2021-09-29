import React from 'react';
import {styled} from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import Box from '@mui/material/Box';
import Ruling from './Ruling';

const DraftPickImage = styled('img')({
  width: '100%',
});

const StyledList = styled('ul')({
  marginTop: 0,
  marginBottom: 0,
});

export default function Rulings() {
  const bannedCards = [
    {name: 'Amulet of Quoz', link: 'https://scryfall.com/card/ice/308/amulet-of-quoz'},
    {name: 'Bronze Tablet', link: 'https://scryfall.com/card/atq/42/bronze-tablet'},
    {name: 'Contract From Below', link: 'https://scryfall.com/card/lea/96/contract-from-below'},
    {name: 'Darkpact', link: 'https://scryfall.com/card/lea/99/darkpact'},
    {name: 'Demonic Attorney', link: 'https://scryfall.com/card/lea/102/demonic-attorney'},
    {name: 'Jeweled Bird', link: 'https://scryfall.com/card/arn/66/jeweled-bird'},
    {name: 'Rebirth', link: 'https://scryfall.com/card/leg/200/rebirth'},
    {name: 'Tempest Efreet', link: 'https://scryfall.com/card/leg/166/tempest-efreet'},
    {name: 'Timmerian Fiends', link: 'https://scryfall.com/card/hml/58/timmerian-fiends'},
    {name: 'Invoke Prejudice', link: 'https://scryfall.com/card/leg/62/invoke-prejudice'},
    {name: 'Cleanse', link: 'https://scryfall.com/card/me3/5/cleanse'},
    {name: 'Stone-Throwing Devils', link: 'https://scryfall.com/card/arn/33/stone-throwing-devils'},
    {name: 'Pradesh Gypsies', link: 'https://scryfall.com/card/6ed/244/pradesh-gypsies'},
    {name: 'Jihad', link: 'https://scryfall.com/card/arn/5/jihad'},
    {name: 'Imprison', link: 'https://scryfall.com/card/leg/107/imprison'},
    {name: 'Crusade', link: 'https://scryfall.com/card/3ed/15/crusade'},
    {name: 'Chaos Orb', link: 'https://scryfall.com/card/lea/235/chaos-orb'},
    {name: 'Falling Star', link: 'https://scryfall.com/card/leg/145/falling-star'},
    {name: 'Shahrazad', link: 'https://scryfall.com/card/arn/10/shahrazad'},
    {name: 'Adriana\'s Valor', link: 'https://scryfall.com/card/cn2/1/adrianas-valor'},
    {name: 'Advantageous Proclamation', link: 'https://scryfall.com/card/cns/1/advantageous-proclamation'},
    {name: 'Assemble the Rank and Vile', link: 'https://scryfall.com/card/cn2/2/assemble-the-rank-and-vile'},
    {name: 'Backup Plan', link: 'https://scryfall.com/card/cns/2/backup-plan'},
    {name: 'Brago\'s Favor', link: 'https://scryfall.com/card/cns/3/bragos-favor'},
    {name: 'Double Stroke', link: 'https://scryfall.com/card/cns/4/double-stroke'},
    {name: 'Echoing Boon', link: 'https://scryfall.com/card/cn2/3/echoing-boon'},
    {name: 'Emissary\'s Ploy', link: 'https://scryfall.com/card/cn2/4/emissarys-ploy'},
    {name: 'Hired Heist', link: 'https://scryfall.com/card/cn2/5/hired-heist'},
    {name: 'Hold the Perimeter', link: 'https://scryfall.com/card/cn2/6/hold-the-perimeter'},
    {name: 'Hymn of the Wilds', link: 'https://scryfall.com/card/cn2/7/hymn-of-the-wilds'},
    {name: 'Immediate Action', link: 'https://scryfall.com/card/cns/5/immediate-action'},
    {name: 'Incendiary Dissent', link: 'https://scryfall.com/card/cn2/8/incendiary-dissent'},
    {name: 'Iterative Analysis', link: 'https://scryfall.com/card/cns/6/iterative-analysis'},
    {name: 'Muzzio\'s Preparations', link: 'https://scryfall.com/card/cns/7/muzzios-preparations'},
    {name: 'Natural Unity', link: 'https://scryfall.com/card/cn2/9/natural-unity'},
    {name: 'Power Play', link: 'https://scryfall.com/card/cns/8/power-play'},
    {name: 'Secret Summoning', link: 'https://scryfall.com/card/cns/9/secret-summoning'},
    {name: 'Secrets of Paradise', link: 'https://scryfall.com/card/cns/10/secrets-of-paradise'},
    {name: 'Sentinel Dispatch', link: 'https://scryfall.com/card/cns/11/sentinel-dispatch'},
    {name: 'Sovereign\'s Realm', link: 'https://scryfall.com/card/cn2/10/sovereigns-realm'},
    {name: 'Summoner\'s Bond', link: 'https://scryfall.com/card/cn2/11/summoners-bond'},
    {name: 'Unexpected Potential', link: 'https://scryfall.com/card/cns/12/unexpected-potential'},
    {name: 'Weight Advantage', link: 'https://scryfall.com/card/cn2/12/weight-advantage'},
    {name: 'Worldknit', link: 'https://scryfall.com/card/cns/13/worldknit'},
  ];


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
        <Ruling header="All cards not legal in Vintage are banned"
          number={3}
        >
          <Typography paragraph>
            {'Any cards that are '}
            <Link href="https://magic.wizards.com/en/game-info/gameplay/rules-and-formats/banned-restricted">{'banned in Vintage'}</Link>
            {' are also banned in St Lotus tournaments. As of October 2, 2021 (St Lotus #7), this includes the following:'}
          </Typography>
          <Typography>
            <Grid container>
              <Grid item
                md={4}
                xs={12}
              >
                <StyledList>
                  {bannedCards.slice(0, Math.floor(bannedCards.length / 3)).map(card => <li key={card.name}><Link href={card.link}>{card.name}</Link></li>)}
                </StyledList>
              </Grid>
              <Grid item
                md={4}
                xs={12}
              >
                <StyledList>
                  {bannedCards.slice(Math.floor(bannedCards.length / 3), Math.floor(2 * bannedCards.length / 3)).map(card => <li key={card.name}><Link href={card.link}>{card.name}</Link></li>)}
                </StyledList>
              </Grid>
              <Grid item
                md={4}
                xs={12}
              >
                <StyledList>
                  {bannedCards.slice(Math.floor(2 * bannedCards.length / 3), bannedCards.length).map(card => <li key={card.name}><Link href={card.link}>{card.name}</Link></li>)}
                </StyledList>
              </Grid>
            </Grid>
          </Typography>
        </Ruling>
        <Ruling header="“Self-tutoring” cards earn the player four copies"
          number={4}
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
          number={6}
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
