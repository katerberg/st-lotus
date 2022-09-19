/* eslint-disable react/jsx-no-literals, no-undef */
import {styled} from '@mui/system';
import ManaCost from '../common/mana-cost/ManaCost';
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


{/*
      <Typography paragraph>Fundamental to understanding any meta-game is a familiarity with the capabilities, limitations, and weaknesses of the most aggressive viable strategies. Vintage Rotisserie Draft is no different, so I’d like to give a thorough look at a class of aggressive decks with many common threads, all best described as <Link href="https://scryfall.com/card/vma/305/mishras-workshop">Mishra’s Workshop</Link>-based aggressive decks. Thanks to the VRD card pool and the history of artifact-heavy decks across multiple formats, we can concoct a number of variants on this theme. I'll be categorizing those variants into three larger buckets.</Typography>
      <Typography paragraph>The tactic with the longest tradition of Vintage domination is Prison, which seeks to create mana disparity by deploying effects like <Link href="https://scryfall.com/card/vma/284/sphere-of-resistance">Sphere of Resistance</Link> and <Link href="https://scryfall.com/card/clb/868/phyrexian-revoker">Phyrexian Revoker</Link> in multiples. Next we have Aggro-Control variants, which prefer to leave mana up to counter key spells and protect attackers rather than tapping out for impediments. Finally, Modular Workshop leans into the augmentation and exploitation of numerous low cost modular creatures.</Typography>
      <SubSectionHeader
        component="h2"
        variant="h3"
      >Prison Shops</SubSectionHeader>
      <Typography paragraph>The name of the game for this classic build is to limit our opponents’ game actions. All the fast mana gobbled up in the early draft is used to deploy preemptive roadblocks to our opponents’ ability to respond or develop meaningful board presence. This deck will typically use <ManaCost manaCost="{W}" /> as its primary color for premium removal and complementary creatures.</Typography>
      <iframe
        frameBorder="0"
        id="moxfield-frame-prison-shops"
        onLoad={moxfieldOnLoad}
        src="https://www.moxfield.com/embed/lLYR46cI6EWBRQtegeDf3w"
        width="100%"
      />

      <Typography paragraph>Unlike the other builds, this one is not focused on speed and is probably not capable of turn 3 kills in live action. I think these types of Prison effects are best left to Constructed formats where they benefit from the redundancy of multiple copies. Especially with the arrival of <Link href="https://scryfall.com/card/neo/266/boseiju-who-endures">Boseiju, Who Endures</Link>, this is the least appealing application of Workshop.</Typography>
      <Typography paragraph>In fact, I believe this type of mid-range Shops deck is entirely obsoleted (for now) by Eldrazi. I’d already argue that these types of decks should be playing <Link href="https://scryfall.com/card/ogw/6/matter-reshaper">Matter Reshaper</Link> and <Link href="https://scryfall.com/card/ogw/9/thought-knot-seer">Thought-Knot Seer</Link>, and most threats dropped off a Workshop aren’t going to beat as hard as <Link href="https://scryfall.com/card/ogw/7/reality-smasher">Reality Smasher</Link>. Just trade in your <Link href="https://scryfall.com/card/c21/267/steel-overseer">Steel Overseers</Link> and <Link href="https://scryfall.com/card/eld/235/stonecoil-serpent">Stonecoil Serpents</Link> for <Link href="https://scryfall.com/card/ogw/2/eldrazi-mimic">Eldrazi Mimics</Link> and <Link href="https://scryfall.com/card/bfz/8/endless-one">Endless Ones</Link> and save yourself a couple picks on artifact lands. You can even keep the <Link href="https://scryfall.com/card/clb/868/phyrexian-revoker">Phyrexian Revoker</Link>.</Typography>
      <Typography paragraph>If you do choose this avenue, my only advice would be keep in mind the section about <ManaCost manaCost="{U}" /> cards later on.</Typography>

      <SubSectionHeader
        component="h2"
        variant="h3"
      >Aggro-Control Shops</SubSectionHeader>

      <Typography paragraph>Here the goal is to rapidly overwhelm the opponent with a couple of potent threats, then use countermagic to protect them or card advantage spells to refuel and try again once the, then depend on countermagic to protect them, and/or card advantage to refuel and try again once the opponent is out of action.</Typography>
      <iframe
        frameBorder="0"
        id="moxfield-frame-aggro-shops"
        onLoad={moxfieldOnLoad}
        src="https://www.moxfield.com/embed/TwPq3nZ5YU2CAehBkhhTiA"
        width="100%"
      />
      <Typography paragraph>Any hand with a turn one <Link href="https://scryfall.com/card/neo/254/patchwork-automaton">Patchwork Automaton</Link> can kill quickly, and this deck can threaten just that with the added bonus of counterspell support. While this variant can produce plenty of explosive draws, it can also realistically win off a slower start by taking a more reactive stance in the early game. The fast clock of <Link href="https://scryfall.com/card/2xm/245/cranial-plating">Cranial Plating</Link> is often just as effective after an initial exchange as it would be when going in blind against an opponent who might be looking to go over the top with a quick <Link href="https://scryfall.com/card/ulg/45/tinker">Tinker</Link> or <Link href="https://scryfall.com/card/cc2/5/reanimate">Reanimate</Link>.</Typography>

      <SubSectionHeader
        component="h2"
        variant="h3"
      >Modular Shops</SubSectionHeader>
      <Typography paragraph>Modular Shops, perhaps the most resilient build of Aggro Shops, leans into the modular ability and focuses on enhancing its impact.</Typography>

      <iframe
        frameBorder="0"
        id="moxfield-frame-modular-shops"
        onLoad={moxfieldOnLoad}
        src="https://www.moxfield.com/embed/hdVJbpFpWkKF1-pZ4Cf0Og"
        width="100%"
      />

      <Typography paragraph>The biggest drawback here is that we really need things to go our way with the mana in order to get greedy and stretch across four colors for all our pieces. When the mana comes together, though, this variant is an absolute blast that can offer ferocious starts.</Typography>
      <Typography paragraph>In Kamigawa: Neon Dynasty, some cards made reference to or gave bonuses to "augmented" creatures. With +1/+1 counters qualifying as augmentations, fans of Modular Shops should keep an eye out for cards using this terminology in future sets, as any additional cheap disruption or card advantage would be a potential boon to this deck. With +1/+1 counters qualifying for this definition an eye should be kept for cards using this terminology in future sets, as any additional cheap disruption or card advantage would be a potential boon to this deck.</Typography>


      <SubSectionHeader
        component="h2"
        variant="h3"
      >The Skeleton</SubSectionHeader>

      <iframe
        frameBorder="0"
        id="moxfield-frame-the-skeleton"
        onLoad={moxfieldOnLoad}
        src="https://www.moxfield.com/embed/4ozRtVkg-Uulr9dA6o64tQ"
        width="100%"
      />

 <Typography paragraph>   Here are the core cards which will be vital to the success of any Workshop-based Aggro deck. The cards assembled around them can cause those decks to function in different ways, but they will all face similar threats and meta-game pressures based on these central tools.</Typography>
 <Typography paragraph>   However a player chooses to adorn this frame, I would offer the following guidance based on my examination of the card pool and study of past drafts.</Typography>


      <SubSectionHeader
        component="h2"
        variant="h3"
      >Always Blue</SubSectionHeader>


    <Typography paragraph>Any variant should contain <ManaCost manaCost="{U}" /> for best chances to succeed. VRD is a game of cheap threats and cheaper answers, and any deck aiming to beat down needs to be able to defend its threats and refuel after an exchange. <Link href="https://scryfall.com/card/mh2/71/thought-monitor">Thought Monitor</Link> is a rare card with broader applications than current demand on it would indicate, and as of this writing <Link href="https://scryfall.com/card/nec/99/thoughtcast">Thoughtcast</Link> is still severely under-appreciated. The selection of cheap disruption <ManaCost manaCost="{U}" /> offers is also vital enough to spend precious early picks in order to secure. The supply of <Link href="https://scryfall.com/card/neo/80/spell-pierce">Spell Pierce</Link>-adjacent cards is slim enough that it's entirely reasonable to pick <Link href="https://scryfall.com/card/neo/80/spell-pierce">Spell Pierce</Link> before almost anything besides your key mana sources.</Typography>
    <Typography paragraph>These types of Workshop decks enjoy an advantage relative to other aggressive decks in the meta in regards to disruption. There are two particular pieces of countermagic which this deck is well positioned to utilize. First is <Link href="https://scryfall.com/card/ktk/56/stubborn-denial">Stubborn Denial</Link> which is quite castable as a pseudo-<Link href="https://scryfall.com/card/leg/58/force-spike">Force Spike</Link> but should be live when it counts thanks to <Link href="https://scryfall.com/card/2xm/245/cranial-plating">Plating</Link> and the many +1/+1 counter synergies.</Typography>
<Typography paragraph>    Second is <Link href="https://scryfall.com/card/bbd/132/spell-snare">Spell Snare</Link>, which seems to be out of favor these days; it goes late in most drafts, and sometimes it doesn't get picked at all. Many of the most devastating threats to a Workshop deck are caught by a <Link href="https://scryfall.com/card/bbd/132/spell-snare">Spell Snare</Link> including <Link href="https://scryfall.com/card/vma/278/null-rod">Null Rod</Link>, <Link href="https://scryfall.com/card/mh1/158/collector-ouphe">Collector Ouphe</Link>, <Link href="https://scryfall.com/card/mm2/48/hurkyls-recall">Hurkyl's Recall</Link>, and <Link href="https://scryfall.com/card/mma/20/kataki-wars-wage">Kataki, War’s Wage</Link>. Since VRD is a format largely played out across the zero to three mana value landscape, most decks will naturally have multiple <Link href="https://scryfall.com/card/bbd/132/spell-snare">Spell Snare</Link> targets, leaving it well positioned in these types of aggressive decks.</Typography>
 <Typography paragraph>   Even in a more Midrange build that leans toward powering out prison pieces or higher cost threats, Blue still offers unique tools to integrate resilience and/or consistency into a deck. An early <Link href="https://scryfall.com/card/2xm/308/wurmcoil-engine">Wurmcoil Engine</Link> is a threat. An early <Link href="https://scryfall.com/card/2xm/308/wurmcoil-engine">Wurmcoil</Link> followed by an <Link href="https://scryfall.com/card/phed/69/academy-ruins">Academy Ruins</Link> is likely a problem for a player without <ManaCost manaCost="W" /> exile effects.</Typography>


      <SubSectionHeader
        component="h2"
        variant="h3"
      >When and How</SubSectionHeader>

  <Typography paragraph>     Because the <Link href="https://scryfall.com/card/vma/305/mishras-workshop">Mishra’s Workshop</Link> itself is not currently in high demand, and because a large chunk of its spells are robots in which no other drafter will be interested, Aggro-Shops can be easily drafted from any position. <Link href="https://scryfall.com/card/vma/4/black-lotus">Black Lotus</Link> is far from its most effective here, but <Link href="https://scryfall.com/card/vma/1/ancestral-recall">Ancestral Recall</Link> is a boon, and fast mana is integral to building explosive opening hands. Unlike many VRD archetypes, Aggro-Shops is consistently able to make use of the extra colorless mana from a <Link href="https://scryfall.com/card/clb/871/sol-ring">Sol Ring</Link>, enhancing its appeal even above an on-color Mox. Similarly, Mana Vault is slightly less awkward here as a colorless ritual than in some decks, and the appeal of spending as many as four of the first five picks on fast mana is strong.</Typography>
 <Typography paragraph>      <Link href="https://scryfall.com/card/vma/2/time-walk">Time Walk</Link> is a strong consideration here and a powerful option for any aggressive deck. <Link href="https://scryfall.com/card/2xm/275/mox-opal">Mox Opal</Link> is another priority card, and while in the past a drafter could realistically look to take both <Link href="https://scryfall.com/card/tpr/228/mox-diamond">Mox Diamond</Link> and <Link href="https://scryfall.com/card/2xm/275/mox-opal">Mox Opal</Link>, the recent trend is for them to go closer together. Against sharp drafters I would expect the pattern moving forward to be both Moxen continuing to solidify as top ~26 picks, with the order of selection being determined by drafter positioning. There is more demand on <Link href="https://scryfall.com/card/tpr/228/mox-diamond">Diamond</Link> because almost anyone can play it, but <Link href="https://scryfall.com/card/2xm/275/mox-opal">Opal</Link> is stronger in the decks that can play it.     Additionally, <Link href="https://scryfall.com/card/tpr/228/mox-diamond">Diamond</Link> is sometimes awkward in Workshop builds because they are so focused on leaning on a smaller than average number of mana sources that produce larger amounts of mana. A hand that draws just three mana sources can be just fine as long as one is an <Link href="https://scryfall.com/card/2xm/275/mox-opal">Opal</Link>/<Link href="https://scryfall.com/card/nec/178/spire-of-industry">Spire</Link>/<Link href="https://scryfall.com/card/2xm/319/glimmervoid">Glimmervoid</Link>, but it can be less than ideal when one of them is a <Link href="https://scryfall.com/card/tpr/228/mox-diamond">Diamond</Link> needing to eat another.</Typography>
 <Typography paragraph>      Even the Workshop itself can be inconvenient at times, as it cannot be used to pay equip costs or contribute colored mana. Late in the process of goldfishing for my recent Discord draft I hit upon the notion of including a Talisman. It did some mitigating, allowing the deck to leave up countermagic protection in instances when it otherwise wouldn’t have been able to without another turn. I was very happy with how the swap of a single land for a Talisman played and will continue to deploy it with Workshops.</Typography>

 <Typography paragraph>      The card I had really wanted to spotlight with my recent draft was <Link href="https://scryfall.com/card/mh2/259/urzas-saga">Urza’s Saga</Link>, an enormously versatile card that perhaps does its best work in the Modular variant where it can find the newly printed <Link href="https://scryfall.com/card/mh2/243/zabaz-the-glimmerwasp">Zabaz</Link>, provide removal via <Link href="https://scryfall.com/card/afr/33/portable-hole">Portable Hole</Link>, and grab powerful sideboard cards. The baseline was always <Link href="https://scryfall.com/card/clb/870/skullclamp">Skullclamp</Link> though, as it would give the gas needed for a reload. In fact, I came away from that draft not thinking so much about <Link href="https://scryfall.com/card/mh2/259/urzas-saga">Saga</Link> as I was about two other noticeable standouts.</Typography>
 <Typography paragraph>      First, I should have played <Link href="https://scryfall.com/card/td2/24/steelshapers-gift">Steelshaper’s Gift</Link>. <Link href="https://scryfall.com/card/clb/870/skullclamp">Skullclamp</Link> and <Link href="https://scryfall.com/card/2xm/245/cranial-plating">Cranial Plating</Link> were consistently the best cards I could draw. <Link href="https://scryfall.com/card/2xm/245/cranial-plating">Plating</Link> is arguably the biggest threat the deck presents by virtue of turning any loose goon into a legitimate beefcake. Most of the wildest opening hands these decks produce will result from playing and equipping <Link href="https://scryfall.com/card/2xm/245/cranial-plating">Plating</Link> on turn two.</Typography>
 <Typography paragraph>      In some of these instances, the creature being equipped will be the other standout, <Link href="https://scryfall.com/card/neo/254/patchwork-automaton">Patchwork Automaton</Link>. What I thought would be a “neat addition” turned out to be an MVP on par with the most unpleasant things you can be faced with on turn one. <Link href="https://scryfall.com/card/mma/198/arcbound-ravager">Ravager</Link> will always be a unique threat for the steel army, albeit one that’s better to draw later in the game, but on turn one an <Link href="https://scryfall.com/card/neo/254/patchwork-automaton">Automaton</Link> is actually the bigger menace.</Typography>


      <SubSectionHeader
        component="h2"
        variant="h3"
      >The Bullpen</SubSectionHeader>

    <Typography paragraph>   Here are some additional cards not featured in the above decklists that are sometimes deployed by drafters playing similar archetypes in the past. These cards are all playable in different builds and are worth consideration by anyone forming a deck outline for this draft plan.</Typography>

      <iframe
        frameBorder="0"
        id="moxfield-frame-the-bullpen"
        onLoad={moxfieldOnLoad}
        src="https://www.moxfield.com/embed/CoLhq1wSbU-m7vwgoNFTbQ"
        width="100%"
      /> */}

   {/* <Typography paragraph>    VRD is a meta-game with a wide spectrum of viable decks, many of which feature a variety of modus operandi. Workshop Aggro is one of the many fun rides you can strap into, with a style of play that makes it stand out even among its fellow creature beat-down decks. So the next time you find yourself drafting a few pieces of fast mana and wondering just what to do with them, perhaps consider turning some robots sideways.</Typography> */}

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
