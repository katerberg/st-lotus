/* eslint-disable no-undef -- Moxfield is global */
import {styled} from '@mui/system';
import ManaCost from '@/common/mana-cost/ManaCost';
import React from 'react';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import hagan from './authors/hagan.jpg';

const FullWidthImage = styled('img')({
  maxWidth: '100%',
});

const SubSectionHeader = styled(Typography)({
  marginTop: '20px',
  marginBottom: '20px',
});

export default function Faldorn() {


  return (
    <Container maxWidth="lg" >
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'Cast from Exile: Exploring Faldorn'}</SpacedHeader>
      <Typography
        color="text.secondary"
        sx={{marginBottom: '20px', marginLeft: '20px'}}
        variant="subtitle1"
      >{'Written by: Stephen Hagan on September 19, 2022'}</Typography>
  <Typography paragraph>This article begins with a love of impulse draw. If you are not aware, impulse draw has become the name for the effect commonly found in red where cards are exiled from the top of your deck with the ability to be cast either the same turn, or some point in the feature. Wizards has begun what looks like a heavy lean into impulse in recent sets with cards such as <Link href="https://scryfall.com/card/znr/174/valakut-awakening-valakut-stoneforge">Valakut Exploration</Link>, <Link href="https://scryfall.com/card/neo/134/atsushi-the-blazing-sky">Atsushi, the Blazing Sky</Link>, <Link href="https://scryfall.com/card/neo/138/experimental-synthesizer">Experimental Synthesizer</Link>, and VRD aggressive stand out, <Link href="https://scryfall.com/card/clb/801/laelia-the-blade-reforged">Laelia, the Blade Reforged</Link>. The effect has also become a bigger player in Commander with last year’s Rakdos All-Star from the Forgotten Realms set, <Link href="https://scryfall.com/card/afc/2/prosper-tome-bound">Prosper, Tome-Bound</Link>.</Typography>
  <Typography paragraph><Link href="https://scryfall.com/card/afc/2/prosper-tome-bound">Prosper</Link> himself has been a card I’ve discussed with my fellow VRD enthusiast Brandon (Dr. Peepeepoopoo MD) Curry as a potentially powerful card, with both coming to the same conclusion that <ManaCost manaCost="{4}" /> is too much of a cost to make it work. More recently, in Wizards new foray into D&amp;D, they published <Link href="https://scryfall.com/card/clb/647/faldorn-dread-wolf-herald">Faldorn, Dread Wolf Herald</Link>, a card that I instantly fell in love with. The card provides a growing board state which is built around a type of card advantage and that seems pretty powerful. My commander list for <Link href="https://scryfall.com/card/clb/647/faldorn-dread-wolf-herald">Faldorn</Link> is storm-based and pretty powerful:</Typography>
  <iframe
    frameBorder="0"
    id="moxfield-frame-edh"
    onLoad={moxfieldOnLoad}
    src="https://www.moxfield.com/embed/tf6k-GJqSUyK-3cbSCXk_A"
    width="100%"
  />
  <Typography paragraph>VRD does not get to use such powerful effects as <Link href="https://scryfall.com/card/clb/799/jeskas-will">Jeska’s Will</Link> as well as commander does. My love affair with <Link href="https://scryfall.com/card/clb/647/faldorn-dread-wolf-herald">Faldorn</Link> and her wolves led to a pretty detailed and intense discord theory discussion asking “can this card work?” That discussion becomes this article.</Typography>

<SubSectionHeader
  component="h2"
  variant="h3"
>Trade-Offs</SubSectionHeader>
<Typography fontWeight={700}>Strengths:</Typography>
<ul>
<li><Typography>Built in card advantage</Typography></li>
<li><Typography>Gains board advantage for playing impulse draw</Typography></li>
<li><Typography>Gains more advantage for Cascade and Adventure</Typography></li>
<li><Typography>Plays well with powerful cards such as <Link href="https://scryfall.com/card/clb/801/laelia-the-blade-reforged">Laelia</Link>, <Link href="https://scryfall.com/card/eld/138/robber-of-the-rich">Robber of the Rich</Link>, and <Link href="https://scryfall.com/card/mh2/138/ragavan-nimble-pilferer">Ragavan</Link>.</Typography></li>
<li><Typography>In <ManaCost manaCost="{R}"/><ManaCost manaCost="{G}"/> so access to fast mana</Typography></li>
</ul>

<Typography fontWeight={700}>Disadvantages:</Typography>
<ul>
<li><Typography>No haste</Typography></li>
<li><Typography>Impulse draw can backfire if you hit powerful cards early you can’t cast yet</Typography></li>
<li><Typography>Less powerful when not coming out of a command zone predictably</Typography></li>
</ul>

<Typography paragraph>The last disadvantage is one that is particularly important for discussion. There are a lot of strong legendary creatures with build around abilities that do amazing things as commanders because you know you have access to them at almost any time, other than <Link href="https://scryfall.com/card/iko/11/drannith-magistrate">Drannith Magistrate</Link> shenanigans. Many of those might not translate over to VRD because the card is just one in 40 and you are not going to always have access to them. An example is the planeswalker <Link href="https://scryfall.com/card/2x2/169/aminatou-the-fateshifter">Aminatou</Link> who I have great love for and does very powerful combos, but I’ve never made the jump with her because without her on demand, she is far less impressive as an engine. The potential difference for <Link href="https://scryfall.com/card/clb/647/faldorn-dread-wolf-herald">Faldorn</Link> is the fact that you are already building around card advantage and powerful effects such as Cascade and Adventure.</Typography>

<SubSectionHeader
  component="h2"
  variant="h3"
>Theory Lists</SubSectionHeader>
<Typography paragraph>I asked a few folks to make some theory lists after the discussion. Ones that I could share here to highlight a few ways that <Link href="https://scryfall.com/card/clb/647/faldorn-dread-wolf-herald">Faldorn</Link> or focusing on casting from exile might play out. Before I share the lists a few important notes.</Typography>
<Typography paragraph>This is all theoretical. You never know how something will run until you test it, these could end up 1-6 or worse the dread 0-7. I just don’t happen to think they will. Theory lists are always weird because you make assumptions about what cards you can get and what cards you cannot. Sometimes the cards just do not go your way.</Typography>
<SubSectionHeader
  component="h3"
  variant="h4"
>Sti</SubSectionHeader>
<Typography paragraph>Sti, our friend from across the pond, brings us a <ManaCost manaCost="{R}" /><ManaCost manaCost="{U}" /><ManaCost manaCost="{G}" /> list that looks to play a tempo strategy with a solid card advantage suite.</Typography>
  <iframe
    frameBorder="0"
    id="moxfield-frame-sti"
    onLoad={moxfieldOnLoad}
    src="https://www.moxfield.com/embed/vTNoq0SHikmz89ZvvRR7fg"
    width="100%"
  />
<Typography paragraph>Sti makes a fair assumption that he can get <Link href="https://scryfall.com/card/vma/8/mox-ruby">Mox Ruby</Link> and <Link href="https://scryfall.com/card/vma/2/time-walk">Time Walk</Link>. Both of these seem pretty straight forward and reasonable. His theory list leaves off duals/fetches. But looking at the rest of the list I think it is fair to assume we would be able to grab a few to make our mana more consistent. Getting the <ManaCost manaCost="{1}"/> mana draw spells and all the key pieces might be a challenge, but I think overall this list looks reasonable. I would probably worry less about fetches and grab my duals later to make sure I got all the key pieces I wanted.</Typography>
<Typography paragraph>What makes this deck potentially work for me is that the aggressive pieces are all pretty strong on their own. You can win without ever drawing <Link href="https://scryfall.com/card/clb/647/faldorn-dread-wolf-herald">Faldorn</Link>, but if you do get a turn 2 <Link href="https://scryfall.com/card/clb/647/faldorn-dread-wolf-herald">Faldorn</Link> to stick you are going to put down a lot of wolves through <Link href="https://scryfall.com/card/clb/801/laelia-the-blade-reforged">Laelia</Link>, <Link href="https://scryfall.com/card/mh2/292/shardless-agent">Shardless</Link>, <Link href="https://scryfall.com/card/2x2/184/bloodbraid-elf">Bloodbraid</Link>, and the Adventure spells. I really like the inclusion of <Link href="https://scryfall.com/card/clb/682/tlincalli-hunter-retrieve-prey">Tlincalli Hunter</Link>, which you are pretty much playing for the rebuy Adventure half. But if you do get to the creature itself, lots of upside.</Typography>
<Typography paragraph>The goldfishes I’ve done of the deck felt powerful. I probably want another bounce spell for the tempo but I particularly like the <Link href="https://scryfall.com/card/isd/181/garruk-relentless-garruk-the-veil-cursed">Garruk Relentless</Link> as a card that can take over a game and break a stalled board. <Link href="https://scryfall.com/card/clb/804/outpost-siege">Outpost Siege</Link> is probably the one I would question the most, though if the card gets rolling it is going to be hard to lose.</Typography>

<SubSectionHeader
  component="h3"
  variant="h4"
>DrPeepeepoopooMD</SubSectionHeader>
<Typography paragraph>Next up we have the aforementioned DrPeepeepoopooMD. The good Doctor did not provide a finished deck list, but in a fashion true to how his brain works, a collection of the cards that he would draft and left me to build around. I didn’t. Instead we will discuss the cards as a whole and see what strategies he was leaning into.</Typography>

  <iframe
    frameBorder="0"
    id="moxfield-frame-brandon"
    onLoad={moxfieldOnLoad}
    src="https://www.moxfield.com/embed/oCiLf2RTp0qW31BeIwvXNQ"
    width="100%"
  />
<Typography paragraph>First thing we see is that we are in <ManaCost manaCost="{R}" /><ManaCost manaCost="{U}" /><ManaCost manaCost="{G}" />, the same as Sti. I think <Link href="https://scryfall.com/card/eld/39/brazen-borrower-petty-theft">Brazen Borrower</Link> and <Link href="https://scryfall.com/card/mh2/292/shardless-agent">Shardless Agent</Link> are potentially too powerful to not include. For our first round in his theory list we see he is assuming the <Link href="https://scryfall.com/card/vma/1/ancestral-recall">Ancestral Recall</Link> spot. I think if you had recall this would be a solid type of list to go into, as you are not competing over the tons of counterspells but still having good solid blue lines of play. Getting <Link href="https://scryfall.com/card/mh2/138/ragavan-nimble-pilferer">Ragavan</Link> after <Link href="https://scryfall.com/card/vma/1/ancestral-recall">Ancestral</Link> is probably a stretch with how things have been going of late, but it is not unheard of. I really like the focus on DFC Lands here to make sure we are hitting our lands but making flood less impactful. He can also choose to play <Link href="https://scryfall.com/card/2x2/147/food-chain">Food Chain</Link> combos as a possible iteration, which gives him good value out of getting cards exiled before he can cast them if he loses <Link href="https://scryfall.com/card/avr/68/misthollow-griffin">Griffin</Link> or <Link href="https://scryfall.com/card/emn/7/eternal-scourge">Scourge</Link>. There is not a built in pay off for infinite mana from those, but you will almost always have the mana for what you need.</Typography>

<SubSectionHeader
  component="h3"
  variant="h4"
>Stephen Hagan</SubSectionHeader>
  <iframe
    frameBorder="0"
    id="moxfield-frame-hagan"
    onLoad={moxfieldOnLoad}
    src="https://www.moxfield.com/embed/5VipTqYKhEmzXqUUW5pnQQ"
    width="100%"
  />
<Typography paragraph>I lean a little more into the discard part by grabbing <Link href="https://scryfall.com/card/ncc/81/currency-converter">Currency Converter</Link>, <Link href="https://scryfall.com/card/neo/243/containment-construct">Containment Construct</Link>, <Link href="https://scryfall.com/card/2x2/123/seasoned-pyromancer">Seasoned Pyromancer</Link>, and <Link href="https://scryfall.com/card/znr/148/magmatic-channeler">Magmatic Channeler</Link>. <Link href="https://scryfall.com/card/clb/838/vivien-champion-of-the-wilds">Vivien</Link> and <Link href="https://scryfall.com/card/kld/110/chandra-torch-of-defiance">Chandra</Link> give you card advantage and flexibility. The <Link href="https://scryfall.com/card/2x2/296/wrenn-and-six">Wrenn and Six</Link>/<Link href="https://scryfall.com/card/vma/316/strip-mine">Strip Mine</Link> plan adds some disruption. In the end the better play might be lean more into the lands play adding <Link href="https://scryfall.com/card/cmr/433/ramunap-excavator">Excavator</Link>/<Link href="https://scryfall.com/card/2x2/303/crucible-of-worlds">Crucible</Link> and <Link href="https://scryfall.com/card/znr/174/valakut-awakening-valakut-stoneforge">Valakut Awakening</Link>, but I stayed away from that for this theoretical shot. I love <Link href="https://scryfall.com/card/mid/168/augur-of-autumn">Augur of Autumn</Link> here as it gives you some extra reach with lands and maybe even cards off the top. I also feel comfortable siding out a lot of this for stuff like <Link href="https://scryfall.com/card/afc/161/heroic-intervention">Heroic Intervention</Link> or <Link href="https://scryfall.com/card/m20/198/veil-of-summer">Veil of Summer</Link>. These are the types of decks that do not get hurt too bad in sideboard matches, a lot of engines have too many pieces to lose for those.</Typography>
<Typography paragraph>In the end, I think I like Sti’s list the best and think it has the most potential, but it also will be the hardest to get all the pieces. It is harder for me to analyze the good Doctor’s as it is more a list of cards to mold, but there are a lot of strong plays there to consider.</Typography>

<SubSectionHeader
  component="h2"
  variant="h3"
>Closing Thoughts</SubSectionHeader>
<Typography paragraph>I think there is a lot more room for VRD playables than some folks think. Synergy is often king. If you are thinking outside the box, look for synergy but don’t focus on building around it in such a way that you can’t win without it.</Typography>
<Typography paragraph>The aforementioned downside of commanders is real. A card being powerful as a commander does not always translate directly over to success in VRD.</Typography>
<Typography paragraph>Thought experiments are fun. Expand and push the boundaries of the format. When I first started at St. Lotus 2 the general perception was planeswalkers were ok, aggro was not overly viable, and combo/control was the top of the heap. As the meta changes so too what is viable. My earlier article about Walkers highlighted their power, but as the meta changed to more aggro and tempo, Walkers often feel like you are just behind. The format is rich and deep, and often dependent on the individual draft or the people in it. Don’t get tunnel vision.</Typography>
<Typography paragraph>Until next time, Hagan out!</Typography>
   <Typography
     color="text.secondary"
     component="h2"
     sx={{marginTop: '60px'}}
     variant="h4"
   >About the author:</Typography>
      <Divider sx={{margin: '10px 0 30px'}}/>
      <Grid container
        sx={{marginBottom: '40px'}}
      >
        <Grid item
          sm={2}
          xs={3}
        >
          <FullWidthImage src={hagan}
            sx={{borderRadius: '10px'}}
          />
        </Grid>
        <Grid alignItems="center"
          container
          flexGrow={1}
          item
          sm={10}
          xs={9}
        >
        <Typography
          color="text.secondary"
          sx={{verticalAlign: 'middle', marginLeft: '20px'}}
          variant="subtitle2"
        >Stephen Hagan is a longtime L2 Judge, member of the St. Lotus Steering Committee, and an experienced Commander player. He has played Magic off and on since Revised. His favorite cards are <Link href="https://scryfall.com/card/mor/22/reveillark">Reveillark</Link>, <Link href="https://scryfall.com/card/m13/220/trading-post">Trading Post</Link>, <Link href="https://scryfall.com/card/tmp/142/living-death">Living Death</Link>, <Link href="https://scryfall.com/card/apc/112/mystic-snake">Mystic Snake</Link>, and <Link href="https://scryfall.com/card/uds/117/plow-under">Plow Under</Link>. In his normal life he is a sociology professor and father of two awesome kids.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
