import React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import DeckPreview from './DeckPreview';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import Grid from '@mui/material/Grid';

export default function Decks() {
  const link =
    'https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=6604930';
  const decks = [
    {
      number: 12,
      image:
        'https://cards.scryfall.io/art_crop/front/3/b/3b1e92b4-6e53-4dba-a572-c67e01965ac5.jpg?1562785076',
      date: new Date('2023-07-30'),
      text: 'Mason showed up with a target on his back in a field that was deeply hoping to hold him back from his fourth win. Mike pushed him into play-off match after being the only player in the field to take him down',
    },
    {
      number: 11,
      image:
        'https://cards.scryfall.io/art_crop/front/8/d/8d727b9b-6114-414d-9172-16b6e1db41cc.jpg?1562921228',
      date: new Date('2023-04-01'),
      text: 'A newcomer to VRD, but an expert Legacy-enthusiast, managed to win the whole thing with a nearly undefeated record. Michael Reed piloted a Consultation list jam-packed with tutors through a field that eschewed',
    },
    {
      number: 10,
      image:
        'https://cards.scryfall.io/art_crop/front/c/c/cc5338e1-26a6-466e-9393-788f69370e15.jpg?1673308519',
      date: new Date('2023-01-15'),
      text: 'Andrew Swift took down his first event by skillfully piloting a Blue-White control deck full of many of the standard slots, but with some spicy additions made possible by a robust mana-base. Among the two splash colors',
    },
    {
      number: 9,
      image:
        'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/f/2f8f22fb-7291-4517-9b15-e98501f2856b.jpg?1562702491',
      date: new Date('2022-08-13'),
      text: 'Mason Lange solidified his position as winningest drafter ever with his third victory on the back of powerful blue cards in a field that largely eschewed blue. There were many multi-colored decks that fought',
    },
    {
      number: 8,
      image:
        'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg?1616182088',
      date: new Date('2022-03-26'),
      text: 'Mason Lange came back and tied the record of two VRD championships with a blue tempo deck (with some white), featuring flash creatures and many of the best cards ever printed. Managing to snag both Time Walk and',
    },
    {
      number: 7,
      image:
        'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/f/6f9ea46a-411f-40ce-a873-a905180093f4.jpg?1559591470',
      date: new Date('2021-10-02'),
      text: 'Brandon Curry took the tournament with a planeswalker heavy deck. He managed to squeak out a win against Eric Levine’s Eldrazi and Taxes list. This draft really showed the power of continuous board-control and',
    },
    {
      number: 6,
      image:
        'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/6/965c33c3-0c68-4516-b8b0-5a0552ed44b6.jpg?1562926815',
      date: new Date('2021-07-31'),
      text: 'Mason Lange won the event with a strategy often spurned at these events: playing creatures and turning them sideways. Although opening with his traditional strategy of early discard, he quickly pivoted off of',
    },
    {
      number: 5,
      image:
        'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/4/94dcff94-9f25-4ca9-a1f1-5d97de4ab9df.jpg?1562865937',
      date: new Date('2020-02-01'),
      text: 'John Ryan Hamilton took down the “Queen of VRD”, Elaine Cao, using her own technology against her. Having seen the power of Arcane Savant in the previous draft, he prioritized Aether Searcher over all else',
    },
    {
      number: 4,
      image:
        'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/e/0e7466e5-9443-4b38-a7e9-e0d615a35667.jpg?1576381686',
      date: new Date('2019-11-24'),
      text: 'Elaine Cao became the first (and at the time only) player to win two VRDs, and managed to do it in back-to-back tournaments, largely with the same base of cards. The innovation that she brought to the table this time was',
    },
    {
      number: 3,
      image:
        'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/b/3bfcbeab-7a1e-4dcf-99bf-98f42c2b6a6f.jpg?1562285424',
      date: new Date('2019-08-25'),
      text: 'Elaine Cao took Stephen’s innovative planeswalker approach to the format and turned the knob to 11. She ended up drafting seven walkers along with plenty of stack-based interaction and solid interaction, which',
    },
    {
      number: 2,
      image:
        'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/b/8b94f4c6-b518-43b3-be52-e889d1f3ea38.jpg?1562879525',
      date: new Date('2019-06-09'),
      text: 'In a field full of decks that all performed well, Daniel Zielinski took first place by drafting fast Blue interaction early, and then surprising the table by picking up Infect cards in round 22. This strategy has',
    },
    {
      number: 1,
      image:
        'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/d/7da23b15-dfb8-4267-9b33-d7a4c035c434.jpg?1562863289',
      date: new Date('2019-02-03'),
      text: 'The first streamed VRD since Shotgun Lotus shut down nearly four years earlier. All of us were first time drafters and had so much to learn. Naveen Balaji ended up teaching us the power of Time Vault and Tinker',
    },
  ];
  return (
    <Container maxWidth="lg">
      <SpacedHeader component="h1" sx={{marginTop: 10}} variant="h2">
        {'St Lotus Decks'}
      </SpacedHeader>
      <Grid container>
        {decks.map((deck) => (
          <Grid item key={deck.number} md={6} xs={12}>
            <DeckPreview {...deck} />
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Box
        sx={{
          width: '100%',
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Container>
          <Typography
            sx={{
              marginBottom: 2,
            }}
            variant="h3"
          >
            {'Other Drafts'}
          </Typography>
          <Typography paragraph>
            {
              'Over the past ten years, there have been numerous VRDs that have not been streamed. These drafts provide a really interesting look at how other people approach the format. The stats from various groups around the world really can show how different cards perform as new strategies are introduced, rise, and fall in popularity.'
            }
          </Typography>
          <Box sx={{textAlign: 'center'}}>
            <Button
              color="secondary"
              href={link}
              size="large"
              startIcon={<FontAwesomeIcon icon={faFile} />}
              variant="contained"
            >
              {'See drafts from outside St Lotus'}
            </Button>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
