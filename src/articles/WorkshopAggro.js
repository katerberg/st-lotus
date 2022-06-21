/* eslint-disable react/jsx-no-literals, no-undef */
import {styled} from '@mui/system';
import ManaCost from '../common/mana-cost/ManaCost';
import React from 'react';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import common from './authors/common.jpg';
import Grid from '@mui/material/Grid';

const FullWidthImage = styled('img')({
  maxWidth: '100%',
});

const SubSectionHeader = styled(Typography)({
  marginTop: '20px',
  marginBottom: '20px',
});

export default function WorkshopAggro() {


  return (
    <Container maxWidth="lg" >
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'Deep Dive: Workshop Aggro'}</SpacedHeader>
      <Typography
        color="text.secondary"
        sx={{marginBottom: '20px', marginLeft: '20px'}}
        variant="subtitle1"
      >{'Written by: CommonOpponent on June 21, 2022'}</Typography>
      <Typography paragraph>Fundamental to understanding any meta-game is a familiarity with the capabilities, limitations, and weaknesses of the most aggressive viable strategies. Vintage Rotisserie Draft is no different, so I’d like to give a thorough look at a class of aggressive decks with many common threads, but best described as <Link href="https://scryfall.com/card/vma/305/mishras-workshop">Mishra’s Workshop</Link>-based aggressive decks. Artifact-heavy decks have sprung up across Magic’s history of formats, meaning that with access to VRD’s card-pool, a number of variants on this theme can be concocted, largely chunked into three buckets.</Typography>
      <Typography paragraph>The tactic with the longest tradition of Vintage domination are the Prison decks, seeking to create even greater mana disparity this deck deploys numerous <Link href="https://scryfall.com/card/vma/284/sphere-of-resistance">Sphere of Resistance</Link> and <Link href="https://scryfall.com/card/clb/868/phyrexian-revoker">Phyrexian Revoker</Link>-type cards. Next we have Aggro-Control variants, which prefer to leave up mana for a counter-spell than tap out for an impediment, and will focus on protecting key attackers.  And finally, Modular Workshop which leans into the augmentation and exploitation of numerous low cost modular creatures.</Typography>
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

      <Typography paragraph>Unlike the other builds this one is not focused on speed, and is probably not capable of turn 3 kills in live action. I think these types are Prison effects are best left to Constructed formats where they benefit from the redundancy of multiple copies. Especially with the arrival of <Link href="https://scryfall.com/card/neo/266/boseiju-who-endures">Boseiju, Who Endures</Link>, this is the least appealing application of Workshop.</Typography>
      <Typography paragraph>In fact, I believe this type of mid-range Shops deck is entirely obsoleted (for now) by Eldrazi. I’d already argue that these types of decks should be playing <Link href="https://scryfall.com/card/ogw/6/matter-reshaper">Matter Reshaper</Link> and <Link href="https://scryfall.com/card/ogw/9/thought-knot-seer">Thought-Knot Seer</Link>, and most threats dropped off a Workshop aren’t going to beat as hard as <Link href="https://scryfall.com/card/ogw/7/reality-smasher">Reality Smasher</Link>, so just trade in your <Link href="https://scryfall.com/card/c21/267/steel-overseer">Steel Overseers</Link> and <Link href="https://scryfall.com/card/eld/235/stonecoil-serpent">Stonecoil Serpents</Link> for <Link href="https://scryfall.com/card/ogw/2/eldrazi-mimic">Eldrazi Mimics</Link> and <Link href="https://scryfall.com/card/bfz/8/endless-one">Endless Ones</Link>, and save yourself a couple picks on artifact lands. You can even keep the <Link href="https://scryfall.com/card/clb/868/phyrexian-revoker">Phyrexian Revoker</Link>.</Typography>
      <Typography paragraph>If you do choose this avenue, my only advice would be keep in mind the section about <ManaCost manaCost="{U}" /> cards later on.</Typography>

      <SubSectionHeader
        component="h2"
        variant="h3"
      >Aggro-Control Shops</SubSectionHeader>

      <Typography paragraph>Here the goal is to overwhelm with a couple of potent threats rapidly, then depend on counter-magic to protect them, and/or card advantage to refuel and try again once opponent is out of action.</Typography>
      <iframe
        frameBorder="0"
        id="moxfield-frame-aggro-shops"
        onLoad={moxfieldOnLoad}
        src="https://www.moxfield.com/embed/TwPq3nZ5YU2CAehBkhhTiA"
        width="100%"
      />
      <Typography paragraph>Any hand with a turn one <Link href="https://scryfall.com/card/neo/254/patchwork-automaton">Patchwork Automaton</Link> might kill quickly, this deck can threaten as much with counterspell support. While there are plenty of explosive draws possible out of this variant, this one can realistically win off a slower start and a more reactive stance in the early game. The swiftness of a <Link href="https://scryfall.com/card/2xm/245/cranial-plating">Cranial Plating</Link>’s clock can be as effective after an initial exchange as it would be plunging blind against an opponent who may be looking to go for the win with quick <Link href="https://scryfall.com/card/ulg/45/tinker">Tinker</Link> or <Link href="https://scryfall.com/card/cc2/5/reanimate">Reanimate</Link>.</Typography>

      <SubSectionHeader
        component="h2"
        variant="h3"
      >Modular Shops</SubSectionHeader>
      <Typography paragraph>Perhaps the most resilient build of Aggro-Shops is one that leans into the Modular ability, and focuses on enhancing its impact.</Typography>

      <iframe
        frameBorder="0"
        id="moxfield-frame-modular-shops"
        onLoad={moxfieldOnLoad}
        src="https://www.moxfield.com/embed/hdVJbpFpWkKF1-pZ4Cf0Og"
        width="100%"
      />

      <Typography paragraph>The biggest drawback here is that we really need things to go our way with the mana in order to get greedy and stretch across four colors for all our pieces. When assembled though, this variant is an absolute blast that can offer ferocious starts.</Typography>
      <Typography paragraph>As of writing Wizards of the Coast R&D team seem to be showing an interest through their printings in utilizing references to, or require an “Augmented” creature. With +1/+1 counters qualifying for this definition an eye should be kept for cards using this terminology in future sets, as any additional cheap disruption or card advantage would be a potential boon to this deck.</Typography>


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

 <Typography paragraph>   Here are the core cards which will be vital to the success of any Workshop-based Aggro deck. The assortment of cards around them can cause it function in somewhat different manners, but they will all face similar threats and meta-game pressures based on these central tools.</Typography>
 <Typography paragraph>   However a player chooses to adorn this frame, I would offer the following guidance based on my examination of the card pool and study of past drafts.</Typography>


      <SubSectionHeader
        component="h2"
        variant="h3"
      >Always Blue</SubSectionHeader>


    <Typography paragraph>Any variant should contain <ManaCost manaCost="{U}" /> for best chances to succeed. VRD is a game of cheap threats and cheaper answers, and any deck aiming to beat down need to be able to defend its threats and refuel after an exchange. <Link href="https://scryfall.com/card/mh2/71/thought-monitor">Thought Monitor</Link> is a rare card with broader applications than current demand on it would indicate, and as of writing <Link href="https://scryfall.com/card/nec/99/thoughtcast">Thoughtcast</Link> is still severely under-appreciated. The selection of cheap disruption <ManaCost manaCost="{U}" /> offers is also vital enough to spend precious early picks in order to secure. The supply of <Link href="https://scryfall.com/card/neo/80/spell-pierce">Spell Pierce</Link> adjacent cards is slim enough that it’s entirely reasonable to spend the first pick of anything but a mana source to be <Link href="https://scryfall.com/card/neo/80/spell-pierce">Pierce</Link> itself.</Typography>
    <Typography paragraph>These types of Workshop decks enjoy an advantage relative to other aggressive decks in the meta in regards to disruption. There are two particular pieces of counter-magic which this deck is well positioned to utilize. First, the potent <Link href="https://scryfall.com/card/ktk/56/stubborn-denial">Stubborn Denial</Link> which is quite cast-able as a pseudo-<Link href="https://scryfall.com/card/leg/58/force-spike">Force Spike</Link>, but should be live when it counts thanks to <Link href="https://scryfall.com/card/2xm/245/cranial-plating">Plating</Link> and the various +1/+1 manipulations.</Typography>
<Typography paragraph>    Second is <Link href="https://scryfall.com/card/bbd/132/spell-snare">Spell Snare</Link> which seems to be out of favor these days, being drafted as a late card if at all in most drafts. Several of the most devastating threats to a Workshop deck are caught by a <Link href="https://scryfall.com/card/bbd/132/spell-snare">Spell Snare</Link> including card like <Link href="https://scryfall.com/card/vma/278/null-rod">Null Rod</Link>, <Link href="https://scryfall.com/card/mh1/158/collector-ouphe">Collector Ouphe</Link>, <Link href="https://scryfall.com/card/mm2/48/hurkyls-recall">Hurkyl's Recall</Link>, and <Link href="https://scryfall.com/card/mma/20/kataki-wars-wage">Kataki, War’s Wage</Link>. Most decks will also have multiple ambient <Link href="https://scryfall.com/card/bbd/132/spell-snare">Snare</Link> targets, as VRD is a format largely played out across the landscape of cards with 0-3 Converted Mana Cost, leaving <Link href="https://scryfall.com/card/bbd/132/spell-snare">Snare</Link> well positioned for usage in these types of aggressive decks.</Typography>
 <Typography paragraph>   Even in a more Midrange build that leans toward powering out prison pieces or higher cost threats, Blue still offers unique tools to integrate resilience and/or consistency into a deck. An early <Link href="https://scryfall.com/card/2xm/308/wurmcoil-engine">Wurmcoil Engine</Link> is a threat. An early <Link href="https://scryfall.com/card/2xm/308/wurmcoil-engine">Wurmcoil</Link> followed by an <Link href="https://scryfall.com/card/phed/69/academy-ruins">Academy Ruins</Link> is likely a problem for a player without <ManaCost manaCost="W" /> exile effects.</Typography>


      <SubSectionHeader
        component="h2"
        variant="h3"
      >When and How</SubSectionHeader>

  <Typography paragraph>     Because the <Link href="https://scryfall.com/card/vma/305/mishras-workshop">Mishra’s Workshop</Link> itself is not currently in high demand, and because a large chunk of its spells are robots which no other drafter will be interested in, Aggro-Shops can be easily drafted from any position. <Link href="https://scryfall.com/card/vma/4/black-lotus">Black Lotus</Link> is far from its most effective here, but <Link href="https://scryfall.com/card/vma/1/ancestral-recall">Ancestral Recall</Link> is a boon, and fast mana is integral to building explosive opening hands. Unlike many VRD archetypes, Aggro-Shops is consistently able to make use of the extra colorless mana from a <Link href="https://scryfall.com/card/clb/871/sol-ring">Sol Ring</Link>, enhancing its appeal even above an on-color Mox. Similarly, Mana Vault is slightly less awkward here as a colorless ritual than in some deck, and the appeal of spending as many as four of the first five picks on fast mana is strong.</Typography>
 <Typography paragraph>      <Link href="https://scryfall.com/card/vma/2/time-walk">Time Walk</Link> is another powerful option for an aggressive deck, and is another strong consideration. <Link href="https://scryfall.com/card/2xm/275/mox-opal">Mox Opal</Link> is another priority card, and while in the past a drafter could realistically look to take both <Link href="https://scryfall.com/card/tpr/228/mox-diamond">Mox Diamond</Link> and <Link href="https://scryfall.com/card/2xm/275/mox-opal">Mox Opal</Link>, the recent trend is for them to go closer together. Against sharp drafters I would expect the pattern moving forward to be both Moxen continuing to solidify as top ~26 picks, with the order of selection being determined by drafter positioning. There is more demand on <Link href="https://scryfall.com/card/tpr/228/mox-diamond">Diamond</Link> because almost anyone can play it, but <Link href="https://scryfall.com/card/2xm/275/mox-opal">Opal</Link> is stronger in the decks that can play it.     Additionally, <Link href="https://scryfall.com/card/tpr/228/mox-diamond">Diamond</Link> is sometimes awkward in Workshop builds because they are so focused on leaning on a smaller than average number of mana sources that produce larger amounts of mana. A hand that draws just three mana sources can be just fine as long as one is an <Link href="https://scryfall.com/card/2xm/275/mox-opal">Opal</Link>/<Link href="https://scryfall.com/card/nec/178/spire-of-industry">Spire</Link>/<Link href="https://scryfall.com/card/2xm/319/glimmervoid">Glimmervoid</Link>, but it can be less than ideal when one of them is a <Link href="https://scryfall.com/card/tpr/228/mox-diamond">Diamond</Link> needing to eat another.</Typography>
 <Typography paragraph>      Even the Workshop itself can be inconvenient at times, as it cannot be used to pay equip costs or contribute colored mana. Late in the process of goldfishing for my recent Discord draft I hit upon the notion of including a Talisman. It did some mitigating, allowing the deck to leave up counter-magic protection in instances when it otherwise wouldn’t have been able to without another turn. I was very happy with how the swap of a single land for a Talisman played and will continue to deploy it with Workshops.</Typography>

 <Typography paragraph>      The card I had really wanted to spotlight with my recent draft was <Link href="https://scryfall.com/card/mh2/259/urzas-saga">Urza’s Saga</Link>, an enormously versatile card that perhaps does its best work in the Modular variant where it can get the new addition <Link href="https://scryfall.com/card/mh2/243/zabaz-the-glimmerwasp">Zabaz</Link>, as well as providing removal from <Link href="https://scryfall.com/card/afr/33/portable-hole">Portable Hole</Link>, and powerful sideboard cards. The baseline was always <Link href="https://scryfall.com/card/clb/870/skullclamp">Skullclamp</Link> though, as it would give the gas needed for a reload. In fact, I came away from that draft not thinking so much about <Link href="https://scryfall.com/card/mh2/259/urzas-saga">Saga</Link> as I was about two other noticeable standouts.</Typography>
 <Typography paragraph>      First, I should have played <Link href="https://scryfall.com/card/td2/24/steelshapers-gift">Steelshaper’s Gift</Link>. <Link href="https://scryfall.com/card/clb/870/skullclamp">Skullclamp</Link> and <Link href="https://scryfall.com/card/2xm/245/cranial-plating">Cranial Plating</Link> were consistently the best cards I could draw. <Link href="https://scryfall.com/card/2xm/245/cranial-plating">Plating</Link> is arguably the biggest threat the deck presents by virtue of turning any loose goon into a legitimate beefcake. Most of the wildest opening hands these decks produce will result from playing and equipping <Link href="https://scryfall.com/card/2xm/245/cranial-plating">Plating</Link> on turn two.</Typography>
 <Typography paragraph>      Some of those instances the creature being equipped will be the other standout, <Link href="https://scryfall.com/card/neo/254/patchwork-automaton">Patchwork Automaton</Link>. What I thought would be a “neat addition” turned out to be an MVP, on par with the most unpleasant things you can be faced with on turn one. <Link href="https://scryfall.com/card/mma/198/arcbound-ravager">Ravager</Link> will always be a unique threat for the steel army, albeit one that’s better to draw later in the game, but on turn one an <Link href="https://scryfall.com/card/neo/254/patchwork-automaton">Automaton</Link> is actually the bigger menace.</Typography>


      <SubSectionHeader
        component="h2"
        variant="h3"
      >The Bullpen</SubSectionHeader>

    <Typography paragraph>   Here are some additional cards that are sometimes deployed by drafters with similar deck types in the past, which were not features in the above decklists. These cards are all playable in different builds, and are worth consideration by anyone forming a deck outline for this draft plan.</Typography>

      <iframe
        frameBorder="0"
        id="moxfield-frame-the-bullpen"
        onLoad={moxfieldOnLoad}
        src="https://www.moxfield.com/embed/CoLhq1wSbU-m7vwgoNFTbQ"
        width="100%"
      />

   <Typography paragraph>    VRD is a meta-game with a wide spectrum of viable decks, many of which feature a variety of modus operandi. Workshop Aggro is one of the many fun rides you can strap into, with a style of play that makes it stand out even among its fellow creature beat-down decks. So the next time you find yourself with a few pieces of fast mana and wondering just what to do with it, perhaps consider turning some robots sideways.</Typography>


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
          <FullWidthImage src={common}
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
        >CommonOpponent started with casual MTG in the mid 90s, eventually playing every format but Commander to various extents over the years. A Limited specialist, he has been an avid spectator of VRD for many years, now happily drafting and theorycrafting in the <Link href="https://discord.gg/nxBPYXn">VRD Discord</Link>. His favorite cards are <Link href="https://scryfall.com/card/chk/62/gifts-ungiven">Gifts Ungiven</Link>, <Link href="https://scryfall.com/card/wth/66/doomsday">Doomsday</Link>, and <Link href="https://scryfall.com/card/ulg/80/goblin-welder">Goblin Welder</Link>.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
