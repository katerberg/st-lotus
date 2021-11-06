/* eslint-disable react/jsx-no-literals*/
import React from 'react';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';
import Link from '@mui/material/Link';

const SubSectionHeader = styled(Typography)({
  marginTop: '20px',
  marginBottom: '20px',
});

const StyledIFrame = styled('iframe')({
  display: 'block',
  margin: '20px auto',
  borderStyle: 'none',
  maxWidth: '100%',
});

const CardImage = styled('img')({
  maxWidth: '400px',
});

export default function PlaneswalkersInVrd() {
  return (
    <Container maxWidth="lg" >
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'Planeswalkers in VRD'}</SpacedHeader>
      <Typography
        color="text.secondary"
        sx={{marginBottom: '20px', marginLeft: '20px'}}
        variant="subtitle1"
      >{'Written by: Stephen Hagan on December 6, 2021'}</Typography>
      <Typography paragraph>After St. Lotus 7 there is some discussion about the ascendency of planeswalker cards to the top of the format. Brandon Curry’s powerful <Link href="https://scryfall.com/card/lea/3/balance">{'Balance'}</Link>/planeswalker deck was built around getting a 3 mana walker of some type (<Link href="https://scryfall.com/card/eld/197/oko-thief-of-crowns">Oko, Thief of Crowns</Link>, <Link href="https://scryfall.com/card/war/221/teferi-time-raveler">Teferi, Time Raveler</Link>, or <Link href="https://scryfall.com/card/war/229/dovin-hand-of-control">Dovin, Hand of Control</Link>) out on turn 2 as often as he could. Packing 8 maindeck walkers his strategy carried him to a 5-2 + a play off win against Eric Levine’s Eldrazi list. Walkers as a part of the format are a discussion that is near and dear to my heart as I feel like my performance in St. Lotus 2 alongside Elaine Cao’s performance in 2, 3, 4, and 5 really showcased the power of the youngest card-type.</Typography>
      <StyledIFrame allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="315"
        src="https://www.youtube-nocookie.com/embed/r25ZU6cVIIc"
        title="YouTube video player"
        width="560"
      />
      <Typography paragraph>{'In that draft, the first after War of the Spark (WAR) was available, after first picking Black Lotus, I grabbed both Narset, Parter of Veils and Karn, the Great Creator on the “wheel” after pack two. Of course, this was not just me foreseeing their future in the format, it was also the first draft after a bunch of the strongest walkers to ever be printed came out. Prior to WAR, in St. Lotus 1, there were only six planeswalkers picked, with the highest among those being Jace, the Mind Sculptor in round 4. The next highest was Ugin, the Spirit Dragon in Round 15. St. Lotus 2 featured 20 (including two flip walkers).'}</Typography>
      <Typography paragraph>{'St. Lotus 2 featured myself with five main deck planeswalkers and Elaine with five as well. We both finished a strong 5-2 record, part of a three way tie with Dan Zielinski’s powerful infect deck. Elaine would go on to win St. Lotus 3 and 4, and tie for first (losing in the finals) at St. Lotus 5. Each of her decks featured powerful walker-backed strategies (3 had seven walkers, 4 had six, and 5 had five). While walker strategies are popular in St. Lotus drafts, two recent discord based asynchronous drafts featured ten and fourteen walkers respectively, proving that the strength of planeswalkers is also evident outside of the home of Pointersaurus.'}</Typography>
      <Typography paragraph>{'So why the rise? The power that these planeswalkers bring to the table is that they are often more difficult to answer in a format that tends towards more combos and fewer creatures, the static abilities on WAR-Walkers are potent effects, and they offer reliable effects over several turns. They offer a consistent threat that takes special cards to answer, and as of yet the drafts have not started heavily taking those cards (I am looking at you Fracture).'}</Typography>
      <SubSectionHeader
        component="h2"
        variant="h3"
      >{'Honorable Mentions'}</SubSectionHeader>
      <Typography paragraph>{'So, who are the walkers I respect the most? I am glad that I told you to ask. Here is my St. Lotus special analysis of the Top 10 VRD Planeswalkers and a few honorable mentions. In the analysis I will list some stats with each walker just for some reference point. Sample sizes are still pretty low for VRD and with the massive meta-shifts from newer design we can question whether those stats are worth anything at all, but they at least give us a small amount of info about how the cards have been perceived by more people than me. The stat line will consist of a drafted/possible drafted number, followed by a W/L record for decks with it, and then an average draft spot. So for example if I were going to discuss Davriel, Rogue Shadowmage (a massively underestimated card drafted by Elaine in St. Lotus 5) the stat line would like this (1/20, 6-1, 353).'}</Typography>
      <SubSectionHeader
        component="h3"
        variant="h4"
      >{'Wrenn and Six'}</SubSectionHeader>
      <CardImage src="https://c1.scryfall.com/file/scryfall-cards/png/front/4/a/4a706ecf-3277-40e3-871c-4ba4ead16e20.png?1582053605" />
      <Typography paragraph>{'Wrenn and Six (10/20, 30-27, 168) has been picked in St. Lotus as high as round 2, but overall average has been closer to round 21. I have this powerful tree-borg on the outside looking in because I don’t think I’ve seen it come together yet as a total package. No one deck consistently gets enough fetches to make her shine super strong there, and her real power of recurring Strip Mine and Wasteland has yet to be fully realized. She is pretty good at picking off Thalias and Dark Confidants, but compared to our other walkers she just doesn’t carry the weight. But she is close.'}</Typography>
      <SubSectionHeader
        component="h3"
        variant="h4"
      >{'Nissa, Who Shakes the World'}</SubSectionHeader>
      <CardImage src="https://c1.scryfall.com/file/scryfall-cards/normal/front/f/8/f857bbe4-5619-4733-a0c7-69700f2ef4f3.jpg?1618426283" />
      <Typography paragraph>{'Nissa, Who Shakes the World (4/20, 11-18, 329) doesn’t look like much when we consider the draft stats, but the card is scary and the presence of the newer card Yavimaya, Cradle of Growth increases her power significantly in more decks than just Mono-Green. The threat of constant 3/3 hasty vigilance creatures was a powerful tool for Brandon’s St. Lotus 7 run, and the mana doubling with Yavimaya can’t be overlooked. I think this is a card on the rise.'}</Typography>
      <SubSectionHeader
        component="h3"
        variant="h4"
      >{'Daretti, Scrap Savant'}</SubSectionHeader>
      <CardImage src="https://c1.scryfall.com/file/scryfall-cards/png/front/f/a/fa393eeb-bccc-453c-b783-6b0ff445c3a6.png?1625193660" />
      <Typography paragraph>{'Daretti, Scrap Savant (10/37, 15-18, 261) is lowered somewhat because in many ways artifact strategies are easy to hate out. But as an extra Goblin Welder effect who can also dig for cards and fill the yard, I think Daretti is massively underutilized. Even Reanimator strategies should take a look at Daretti as they can pitch cards repeatedly with him and reuse cheap mana for a variety of artifact creatures.'}</Typography>
      <SubSectionHeader
        component="h3"
        variant="h4"
      >{'Liliana of the Veil'}</SubSectionHeader>
      <CardImage src="https://c1.scryfall.com/file/scryfall-cards/png/front/e/6/e653437e-2e56-4443-aec5-5bb7d8860238.png?1547516945" />
      <Typography paragraph>{'Liliana of the Veil (43/49, 89-113, 138) is an honorable mention so close that she was moved on and off my top 10 at least twice. She is powerful removal and hand hate, and while she affects your hand as well, you get to plan for it in the build stage to break parity. In my experience drafting her twice, I have found her a bit slow at times, but when backed by the right amount of discard she is a force to be reckoned with.'}</Typography>
    </Container>
  );
}
