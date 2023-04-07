/* eslint-disable react/jsx-no-literals*/
import {faFile} from '@fortawesome/free-regular-svg-icons';
import Button from '@mui/material/Button';
import {styled} from '@mui/system';
import ComboCards from './ComboCards';
import React from 'react';
import Container from '@mui/material/Container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SpacedHeader from '../common/SpacedHeader';
import Typography from '@mui/material/Typography';
import dom from './authors/dom-harvey.png';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const FullWidthImage = styled('img')({
  maxWidth: '100%',
});

const SubSectionHeader = styled(Typography)({
  marginTop: '20px',
  marginBottom: '20px',
});

export default function HowIWonMyVrd() {
  const link = 'https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=1595166759';

  return (
    <Container maxWidth="lg" >
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'How I Won My VRD'}</SpacedHeader>
      <Typography
        color="text.secondary"
        sx={{marginBottom: '20px', marginLeft: '20px'}}
        variant="subtitle1"
      >{'Written by: Dom Harvey on March 17, 2022'}</Typography>
      <Typography paragraph>Rotisserie Drafts sound like they might grow old fast - a static card pool that is only marginally shaken up by most new sets and lacks the variety that the random contents of packs gives to normal booster draft. In practice, Vintage Rotisserie Draft has remained popular over the years and as soon as you try it you see why - it's a format of endless possibilities where the public information of the drafting process creates some fascinating dynamics. I've enjoyed dabbling in the format wherever I can (and just won the <Link href={link}>most recent Discord draft</Link>!) so here are some thoughts on how I would approach it with the competitive but creative mindset I apply to Constructed (bearing in mind that most VRDs in practice are a more relaxed affair where not all drafters have a cutthroat focus on maximizing their win rate).</Typography>
      <Typography paragraph><Link href="https://stlotus.org/build/index.html#/how-to-play">To summarize the format quickly</Link>: players take turns (this wraps around in 'snake order' - once the last player makes a pick in a round, they now pick again and the order reverses for this new round) to pick cards from the entire Vintage card pool. This isn't a formally organized format so each playgroup will have their own house rules for some of the edge cases (how to treat Snow-Covered basic lands, for example). After about 45 picks, players build and battle with their 40-card decks.</Typography>
      <Typography paragraph>With this turn order in mind, all seats are certainly not created equal. If the card pool has a few obvious power outliers (VRD has all the most powerful cards - there are enough of these that nobody walks away disappointed but also some easy picks for the first few seats) these will be snapped up by the early players in the first round. More importantly, the players at either ends of the wheel are at an advantage for the entire draft as they can make picks that are informed by each other without the risk of 'wasting' a pick on a card whose value has changed by the time you get to pick again.</Typography>
      <Typography paragraph>This is important context for my preferred approach to VRD: finding several specific combos or interactions to build around with high-quality card filtering and interaction tying the room together. You can stake your claim to one part of a combo knowing it's not worth it for any one opponent to waste their pick to steal the other part from you unless that part has other uses - for example, if you take <Link href="https://scryfall.com/card/shm/257/painters-servant">Painter's Servant</Link> at any point it's very unlikely that someone will snatch your <Link href="https://scryfall.com/card/tpr/223/grindstone">Grindstone</Link>, but the <Link href="https://scryfall.com/card/uma/4/emrakul-the-aeons-torn">Emrakul, the Aeons Torn</Link> you want for your <Link href="https://scryfall.com/card/2xm/145/sneak-attack">Sneak Attack</Link> might be nabbed by someone hoping to pair it with <Link href="https://scryfall.com/card/ima/157/channel">Channel</Link>. Reading the room and figuring out how long you can afford to leave a desired card or combo on the table to focus on cards you know will be fought over is a key to success in this format.</Typography>
      <SubSectionHeader
        component="h2"
        variant="h3"
      >The Best Cards</SubSectionHeader>
      <ComboCards cards={[{
        averageRound: 1,
        pickCount: 63,
        numberOfDrafts: 63,
        name: 'Black Lotus',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838',
      }, {
        averageRound: 1,
        pickCount: 63,
        numberOfDrafts: 63,
        name: 'Ancestral Recall',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/2/3/2398892d-28e9-4009-81ec-0d544af79d2b.jpg?1614638829',
      }, {
        averageRound: 2,
        pickCount: 63,
        numberOfDrafts: 63,
        name: 'Time Walk',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/7/0/70901356-3266-4bd9-aacc-f06c27271de5.jpg?1614638832',
      },
      ]}
      >
        <Typography paragraph>The headliners of the Power 9 and guaranteed first-round picks in any VRD, these are the best cards in any deck lucky enough to have them but also change the value of other cards substantially. Adding a <Link href="https://scryfall.com/card/vma/6/mox-jet">Mox Jet</Link> to your card pool will help your win rate no matter what; adding <Link href="https://scryfall.com/card/vma/4/black-lotus">Black Lotus</Link> does the same but also allows you to build around the <Link href="https://scryfall.com/card/vma/4/black-lotus">Lotus</Link> for the rest of your draft. This can mean a lower bar for high-impact but expensive cards like <Link href="https://scryfall.com/card/2xm/56/jace-the-mind-sculptor">Jace, the Mind Sculptor</Link>, specific synergies like <Link href="https://scryfall.com/card/iko/226/lurrus-of-the-dream-den">Lurrus</Link>/<Link href="https://scryfall.com/card/thb/161/underworld-breach">Underworld Breach</Link>/<Link href="https://scryfall.com/card/nec/91/emry-lurker-of-the-loch">Emry</Link>, or entire strategies like Storm or artifacts matter that can dream so much bigger when they have access to <Link href="https://scryfall.com/card/vma/4/black-lotus">Black Lotus</Link>.</Typography>
        <Typography>Similarly, opening the draft with <Link href="https://scryfall.com/card/vma/1/ancestral-recall">Ancestral Recall</Link> makes anything that copies or recasts spells much more appealing - including VRD and Constructed staples like <Link href="https://scryfall.com/card/uma/71/snapcaster-mage">Snapcaster Mage</Link> and <Link href="https://scryfall.com/card/war/125/dreadhorde-arcanist">Dreadhorde Arcanist</Link>. My winning deck from this VRD started with <Link href="https://scryfall.com/card/vma/2/time-walk">Time Walk</Link> intending to lean into it in one of several ways depending on what was open, ending up as a UR tempo deck that can convert close games to runaways quickly by finding <Link href="https://scryfall.com/card/vma/2/time-walk">Time Walk</Link> with <Link href="https://scryfall.com/card/ema/62/mystical-tutor">Mystical Tutor</Link>/<Link href="https://scryfall.com/card/c21/119/dig-through-time">Dig Through Time</Link> and pairing it with <Link href="https://scryfall.com/card/ori/60/jace-vryns-prodigy-jace-telepath-unbound">Jace, Vryn's Prodigy</Link>/<Link href="https://scryfall.com/card/mid/224/galvanic-iteration">Galvanic Iteration</Link> or <Link href="https://scryfall.com/card/iko/227/lutri-the-spellchaser">Lutri</Link> as my companion.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 2,
        pickCount: 62,
        numberOfDrafts: 63,
        name: 'Time Vault',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/c/3/c367ffc1-8084-45a1-87d5-22183604d1cb.jpg?1562934224',
      }]}
      >
        <Typography><Link href="https://scryfall.com/card/vma/287/time-vault">Time Vault</Link> is a frequent first-round pick as the best combo enabler around. There are many cards that go infinite with it (well-known ones like <Link href="https://scryfall.com/card/m20/230/manifold-key">Manifold Key</Link>/<Link href="https://scryfall.com/card/usg/314/voltaic-key">Voltaic Key</Link> or <Link href="https://scryfall.com/card/mm2/62/tezzeret-the-seeker">Tezzeret the Seeker</Link>, which is effectively a one-card combo with it as it searches for it and untaps it every turn, all the way through to obscure ones like <Link href="https://scryfall.com/card/ddo/52/kioras-follower">Kiora’s Follower</Link>/<Link href="https://scryfall.com/card/dom/236/voltaic-servant">Voltaic Servant</Link> or <Link href="https://scryfall.com/card/gpt/153/mizzium-transreliquat">Mizzium Transreliquat</Link>). Many of these combos are fully colourless, allowing them to slot into basically any deck; are artifacts, making those combos even easier to assemble (and interact with); and are cheap, threatening fast wins or allowing you to spend mana finding the missing piece and still winning in the same turn.</Typography>
      </ComboCards>
      <Typography paragraph>Beyond these, the automatic picks (like <Link href="https://scryfall.com/card/vma/9/mox-sapphire">Moxes</Link>, <Link href="https://scryfall.com/card/phed/67/sol-ring">Sol Ring</Link>, etc), and the generically good cards there are some early standouts I look for the opportunity to take:</Typography>
      <ComboCards cards={[{
        averageRound: 4,
        pickCount: 30,
        numberOfDrafts: 30,
        name: 'Narset, Parter of Veils',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/8/c/8c39f9b4-02b9-4d44-b8d6-4fd02ebbb0c5.jpg?1574294103',
      }]}
      >
        <Typography>Familiar to any Constructed player as a blue mirror-breaker, this carries its own A+B setups with cards like <Link href="https://scryfall.com/card/vma/3/timetwister">Timetwister</Link>/<Link href="https://scryfall.com/card/vma/192/wheel-of-fortune">Wheel of Fortune</Link> and is fantastic at assembling other combos or digging for specific interaction.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 10,
        pickCount: 11,
        numberOfDrafts: 11,
        name: 'Urza\'s Saga',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/c/1/c1e0f201-42cb-46a1-901a-65bb4fc18f6c.jpg?1626099958',
      }]}
      >
        <Typography >It's hard for a card to do more than <Link href="https://scryfall.com/card/mh2/259/urzas-saga">Urza's Saga</Link> - it's several threats in one card that resists the most common forms of interaction and can find a combo piece, a hate card, or just grind the opponent down with even more card advantage. You can support <Link href="https://scryfall.com/card/mh2/259/urzas-saga">Saga</Link> with just a single card to find with the final chapter but it scales scarily well with any incidental artifacts you have lying around. I expect <Link href="https://scryfall.com/card/mh2/259/urzas-saga">Saga</Link> to become a very common pick in Rounds ~3-4 as more and more drafters see how impressive it is.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 5,
        pickCount: 30,
        numberOfDrafts: 30,
        name: 'Karn, the Great Creator',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/3/e/3ec0c0fb-1a4f-45f4-85b7-346a6d3ce2c5.jpg?1566819742',
      }]}
      >
        <Typography><Link href="https://scryfall.com/card/war/1/karn-the-great-creator">Karn</Link> hoses most of the most powerful VRD strategies without even trying, finds suitable hate for the others, is a one-card route to combos that you don't want to support in your maindeck, and a self-contained win condition (via <Link href="https://scryfall.com/card/bbd/241/mycosynth-lattice">Mycosynth Lattice</Link> or various other cards that nobody else wants). It also happens to be the perfect payoff for one of the most dangerous cards in all of Magic:</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 11,
        pickCount: 48,
        numberOfDrafts: 63,
        name: 'Channel',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/c/e/ce54c7c1-3401-4414-8da0-5846cb0ae1b4.jpg?1618695674',
      }]}
      >
        <Typography>It's trivial to find ways to win on the spot with <Link href="https://scryfall.com/card/ima/157/channel">Channel</Link> - <Link href="https://scryfall.com/card/war/1/karn-the-great-creator">Karn</Link>, either generation of any of the big Eldrazi, <Link href="https://scryfall.com/card/cns/53/aether-searcher">Aether Searcher</Link> if your rules allow that, and many more. Most of these are fine cards in their own right or function as part of other combos, making it easy for <Link href="https://scryfall.com/card/ima/157/channel">Channel</Link> to coexist with those if you can manage its mana requirements. Other than dealing your opponent somehow - not easy in the face of Turn 2 <Link href="https://scryfall.com/card/ima/157/channel">Channel</Link> - these sequences are also virtually impossible to interact with.</Typography>
      </ComboCards>
      <ComboCards cards={[
        {
        averageRound: 14,
        pickCount: 54,
        numberOfDrafts: 63,
        name: 'Emrakul, the Aeons Torn',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/0/e/0e0d989d-7186-40dc-bdfe-cfbb77656bc8.jpg?1612809706',
      },
        {
        averageRound: 14,
        pickCount: 27,
        numberOfDrafts: 63,
        name: 'Sneak Attack',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/3/d/3d9709ea-5962-4590-8b14-5213b14f9229.jpg?1599706719',
      },
    ]}
      >
        <Typography>Of the familiar combo shells that people like to port to VRD, <Link href="https://scryfall.com/card/2xm/145/sneak-attack">Sneak</Link> is one of the best - the counterplay is more narrow than for any of the artifact/graveyard combos, there's some redundancy on the <Link href="https://scryfall.com/card/2xm/145/sneak-attack">Sneak</Link> half (<Link href="https://scryfall.com/card/cn2/121/show-and-tell">Show and Tell</Link>/<Link href="https://scryfall.com/card/khc/36/arcane-artisan">Arcane Artisan</Link>, <Link href="https://scryfall.com/card/ima/157/channel">Channel</Link>, <Link href="https://scryfall.com/card/uma/152/through-the-breach">Through the Breach</Link>, Reanimator generally, <Link href="https://scryfall.com/card/c16/159/oath-of-druids">Oath of Druids</Link> sometimes ), and there are so many good targets that you can wait a long time for those. The premiere targets also cross over nicely with other decks - <Link href="https://scryfall.com/card/uma/4/emrakul-the-aeons-torn">Emrakul</Link> and <Link href="https://scryfall.com/card/mm3/72/griselbrand">Griselbrand</Link> are fine as early picks because you can find some degenerate use for them even if your intended one falls through.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 22,
        pickCount: 28,
        numberOfDrafts: 63,
        name: 'Oath of Druids',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/9/d/9dad6b50-c415-4c55-8eac-bbc9d656c2fc.jpg?1562412357',
      }]}
      >
        <Typography>A bedrock of the planeswalker control decks, <Link href="https://scryfall.com/card/c16/159/oath-of-druids">Oath of Druids</Link> is backbreaking against any creature strategy and can be generously enabled via the <Link href="https://scryfall.com/card/eld/197/oko-thief-of-crowns">Oko</Link> you have to pick highly or the <Link href="https://scryfall.com/card/c16/98/swan-song">Swan Song</Link> you can get whenever you like (as well as explicit setup cards like <Link href="https://scryfall.com/card/c16/296/forbidden-orchard">Forbidden Orchard</Link>). Beyond restricting you to just the creatures you want to hit, <Link href="https://scryfall.com/card/c16/159/oath-of-druids">Oath</Link> asks very little of you and adds a whole new dimension to a deck that can meet that condition without much trouble. Your hits can just be good cards in your deck anyway - T3 <Link href="https://scryfall.com/card/c16/159/oath-of-druids">Oath</Link> into <Link href="https://scryfall.com/card/thb/229/uro-titan-of-natures-wrath">Uro</Link> + escape <Link href="https://scryfall.com/card/thb/229/uro-titan-of-natures-wrath">Uro</Link> will put you massively ahead in any sensible game.</Typography>
      </ComboCards>
      <ComboCards cards={[
        {
        averageRound: 3,
        pickCount: 63,
        numberOfDrafts: 63,
        name: 'Demonic Tutor',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/3/b/3bdbc231-5316-4abd-9d8d-d87cff2c9847.jpg?1618695728',
      },
        {
        averageRound: 4,
        pickCount: 62,
        numberOfDrafts: 63,
        name: 'Vampiric Tutor',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/1/8/18bd50f2-c3ba-4217-a2d5-bb771e199706.jpg?1608910005',
      },
    ]}
      >
        <Typography>With this focus on combos and individual high-impact cards, the black Tutors (even/including <Link href="https://scryfall.com/card/me2/96/imperial-seal">Imperial Seal</Link>) look incredibly appealing. If I'm towards the end of the wheel I like to snap these up 'back-to-back', staking a claim to black if I want to double down there or just ensuring that whatever combo I do end up pursuing will be much more consistent.</Typography>
      </ComboCards>
      <ComboCards cards={[
        {
        averageRound: 16,
        pickCount: 12,
        numberOfDrafts: 20,
        name: 'Thassa\'s Oracle',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/7/2/726e8b29-13e9-4138-b6a9-d2a0d8188d1c.jpg?1628801828',
      },
        {
        averageRound: 29,
        pickCount: 10,
        numberOfDrafts: 63,
        name: 'Demonic Consultation',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/1/d/1d779f19-3068-4976-b96b-8f93d156900b.jpg?1610146869',
      },
    ]}
      >
        <Typography>If I have the black tutors, this package is at the top of my list. The kill is fast, compact, and impossible to interact with except on the stack. <Link href="https://scryfall.com/card/thb/73/thassas-oracle">Oracle</Link> is somewhat unique (<Link href="https://scryfall.com/card/uma/61/laboratory-maniac">Laboratory Maniac</Link> and <Link href="https://scryfall.com/card/war/54/jace-wielder-of-mysteries">Jace, Wielder of Mysteries</Link> are both much worse though <Link href="https://scryfall.com/card/war/54/jace-wielder-of-mysteries">Jace</Link> is a passable control planeswalker) but <Link href="https://scryfall.com/card/me2/85/demonic-consultation">Consultation</Link> can find some creative replacements (<Link href="https://scryfall.com/card/ody/164/tainted-pact">Tainted Pact</Link>, <Link href="https://scryfall.com/card/wth/46/paradigm-shift">Paradigm Shift</Link>, <Link href="https://scryfall.com/card/nem/57/divining-witch">Divining Witch</Link>, <Link href="https://scryfall.com/card/tmp/38/sacred-guide">Sacred Guide</Link>, the Pioneer menace <Link href="https://scryfall.com/card/ogw/72/inverter-of-truth">Inverter of Truth</Link>)</Typography>
      </ComboCards>
      <ComboCards cards={[
        {
        averageRound: 21,
        pickCount: 39,
        numberOfDrafts: 59,
        name: 'Thespian\'s Stage',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/2/6/269a926d-7788-4668-8bd8-7572dbf5f5eb.jpg?1599710662',
      },
        {
        averageRound: 15,
        pickCount: 46,
        numberOfDrafts: 63,
        name: 'Dark Depths',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/0/0/00cb17a0-5a13-4d02-b7fb-f99531bc8ca5.jpg?1599710396',
      },
    ]}
      >
        <Typography>Another purely colourless combo that dodges interaction, you can slot this into almost any deck but you can lean into it hard if you like, making great use of land searchers that nobody will fight you for (<Link href="https://scryfall.com/card/2xm/161/crop-rotation">Crop Rotation</Link>, <Link href="https://scryfall.com/card/m20/169/elvish-reclaimer">Elvish Reclaimer</Link>, <Link href="https://scryfall.com/card/eld/169/once-upon-a-time">Once Upon a Time</Link>, <Link href="https://scryfall.com/card/uma/172/life-from-the-loam">Life from the Loam</Link> etc)</Typography>
      </ComboCards>
      <ComboCards cards={[
        {
        averageRound: 25,
        pickCount: 15,
        numberOfDrafts: 63,
        name: 'Intuition',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/b/1/b13e73a5-067d-4dbd-9c98-34a0db6140de.jpg?1562431264',
      },
        {
        averageRound: 17,
        pickCount: 10,
        numberOfDrafts: 20,
        name: 'Underworld Breach',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/0/e/0e51d796-7279-4c06-87f0-37adbdaa41df.jpg?1596451461',
      },
        {
        averageRound: 43,
        pickCount: 3,
        numberOfDrafts: 27,
        name: 'Sevinne\'s Reclamation',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/7/e/7e68f4df-88ce-4e09-a03c-7edf40bff167.jpg?1568003378',
      },
        {
        averageRound: 16,
        pickCount: 46,
        numberOfDrafts: 63,
        name: 'lion\'s eye diamond',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/7/5/758f95f8-bcb0-43ae-b474-56ebd855951e.jpg?1590511899',
      },
    ]}
      >
        <Typography>This looks like a lot of pieces but each of the non-<Link href="https://scryfall.com/card/vma/271/lions-eye-diamond">LED</Link> pieces is very solid in an unfair blue deck (and <Link href="https://scryfall.com/card/vma/271/lions-eye-diamond">LED</Link> gets a massive upgrade to <Link href="https://scryfall.com/card/vma/4/black-lotus">Lotus</Link> if you get the first pick). <Link href="https://scryfall.com/card/tpr/54/intuition">Intuition</Link>/<Link href="https://scryfall.com/card/mm3/40/gifts-ungiven">Gifts Ungiven</Link> for the other three pieces sets up the combo by itself (with the second <Link href="https://scryfall.com/card/tpr/54/intuition">Intuition</Link> finding <Link href="https://scryfall.com/card/vma/57/brain-freeze">Brain Freeze</Link>).There are many more combos you might see or shoot for (see <Link href="https://stlotus.org/build/index.html#/articles/2021-11-25/Combos%20in%20VRD">Katerberg's exhaustive list!</Link>) but let's move onto some dynamics you can expect to see in every draft:</Typography>
      </ComboCards>
      <ComboCards cards={[
        {
        averageRound: 9,
        pickCount: 63,
        numberOfDrafts: 63,
        name: 'Polluted Delta',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/f/f/ff2f5f58-9a95-4ca6-93a0-813738f0072f.jpg?1571667978',
      },
        {
        averageRound: 11,
        pickCount: 61,
        numberOfDrafts: 63,
        name: 'Volcanic Island',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/2/f/2f607e7e-30c0-45e9-8f61-bf6e9fe63f2b.jpg?1562904669',
      },
        {
        averageRound: 8,
        pickCount: 29,
        numberOfDrafts: 29,
        name: 'Prismatic Vista',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/e/3/e37da81e-be12-45a2-9128-376f1ad7b3e8.jpg?1562202585',
      },
    ]}
      >
        <Typography paragraph>Looming over the early rounds of every VRD is one question: when will the run on fetchlands start? As in other Eternal formats, fetchlands are excellent fixing in their own right and have all the small synergies that warp those formats in excess like delve and library manipulation but they have a unique flexibility in the context of a rotisserie draft - off-colour fixing of any other kind is useless for my UR deck but a <Link href="https://scryfall.com/card/ktk/249/wooded-foothills">Wooded Foothills</Link> or <Link href="https://scryfall.com/card/ktk/233/flooded-strand">Flooded Strand</Link> can still do great work for me if I pick up a dual/shockland/Triome to pair with it.</Typography>
        <Typography paragraph>This means there is naturally more competition over the fetchlands but also lessens the pressure to pick up any one in particular. My UR deck from the latest VRD couldn't enjoy <Link href="https://scryfall.com/card/mh2/254/scalding-tarn">Scalding Tarn</Link> or <Link href="https://scryfall.com/card/vma/324/volcanic-island">Volcanic Island</Link> as the other URx drafter snapped those up first - but my <Link href="https://scryfall.com/card/ktk/249/wooded-foothills">Wooded Foothills</Link> and <Link href="https://scryfall.com/card/grn/257/steam-vents">Steam Vents</Link> were effectively the same when I needed them to be.</Typography>
        <Typography >Taking this to its conclusion, <Link href="https://scryfall.com/card/mh1/244/prismatic-vista">Prismatic Vista</Link> is the most valuable fetchland of all - it has all those added benefits while being automatically on-colour without needing to use another pick on a land.</Typography>
      </ComboCards>
      <ComboCards cards={[
        {
        averageRound: 5,
        pickCount: 63,
        numberOfDrafts: 63,
        name: 'Thoughtseize',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/b/2/b281a308-ab6b-47b6-bec7-632c9aaecede.jpg?1599706001',
      },
        {
        averageRound: 21,
        pickCount: 55,
        numberOfDrafts: 63,
        name: 'Pyroblast',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/b/0/b029eb9a-dd7a-40c2-96c4-0063d9cc002c.jpg?1580014621',
      },
        {
        averageRound: 23,
        pickCount: 21,
        numberOfDrafts: 29,
        name: 'Force of Vigor',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/0/1/017c415b-d635-43c6-92b8-8c95d1c4ff8d.jpg?1562202072',
      },
    ]}
      >
        <Typography paragraph>In every draft you have to strike a balance between filling out your own deck and having the right mix of maindeck/sideboard interaction to keep up with opponents trying to do their own absurd things. There's a steep drop between <Link href="https://scryfall.com/card/2xm/109/thoughtseize">Thoughtseize</Link> and any other discard spell, making it crucial for any black drafter to take it highly and some very specialized tools like <Link href="https://scryfall.com/card/a25/147/red-elemental-blast">Red Elemental Blast</Link>/<Link href="https://scryfall.com/card/ema/142/pyroblast">Pyroblast</Link> don't have good replacements. On the other hand, a green drafter won't feel too bad about missing out on <Link href="https://scryfall.com/card/mh1/164/force-of-vigor">Force of Vigor</Link> even if they agree it's the best of its kind because there's a bottomless well of <Link href="https://scryfall.com/card/ima/177/natures-claim">Nature's Claim</Link> variants to turn to if you like.</Typography>
        <Typography paragraph>This also informs the relative strengths/weaknesses of all the different proactive plans you can chase in this format. Many of the best strategies and multi-card packages revolve around artifacts but anyone can overload on artifact hate once you get to the later rounds and picking up sideboard cards is all that's left. In turn, this makes a generally stable deck or one that has several plans that don't share weaknesses more reliable than a deck too focused on one thing. An otherwise normal Azorius Control deck that happens to have a <Link href="https://scryfall.com/card/vma/287/time-vault">Time Vault</Link> or <Link href="https://scryfall.com/card/shm/257/painters-servant">Painter</Link>-<Link href="https://scryfall.com/card/tpr/223/grindstone">Grindstone</Link> combo presents a classic dilemma: how many cards that just tag artifacts do you even want, given that a hand with dead <Link href="https://scryfall.com/card/m19/190/naturalize">Naturalizes</Link> is even more likely to lose to <Link href="https://scryfall.com/card/phed/33/counterspell">Counterspell</Link> into <Link href="https://scryfall.com/card/2xm/56/jace-the-mind-sculptor">Jace, the Mind Sculptor</Link>?</Typography>
        <Typography>This highlights a flaw in what seems like an obvious plan: draft a disruptive aggro deck in an open colour and have the platonic ideal of Mono-Red or Mono-White. This is a great recipe in Vintage Cube - why not try it here? The problem is that every colour and strategy can pick up as many anti-aggro tools as it likes and the structure of an aggro deck (requiring a high quantity of cards that apply early pressure) makes it tough to pivot into another strategy beyond the familiar Constructed method of raising your curve to become more of a midrange deck.</Typography>
      </ComboCards>

      <SubSectionHeader
        component="h2"
        variant="h3"
      >My Draft</SubSectionHeader>
      <Typography paragraph>My draft from Dis7 shows off some of these principles as well as how much room there is to experiment!</Typography>
      <Typography paragraph>P1 <Link href="https://scryfall.com/card/vma/2/time-walk">Time Walk</Link> - One of the most counterintuitive things about VRD is that <Link href="https://scryfall.com/card/vma/2/time-walk">Time Walk</Link> is generally seen as a second-tier card that doesn't belong with the headliners of the Power 9. I suspect this is a big mistake and that in a 'good <Link href="https://scryfall.com/card/vma/2/time-walk">Time Walk</Link> deck' having the card will massively increase your win rate when drawn - even more so if you try to build around it, which is why I knew I wanted it here. I hoped to pair it with <Link href="https://scryfall.com/card/bbd/41/spellseeker">Spellseeker</Link>/<Link href="https://scryfall.com/card/mic/138/eternal-witness">Eternal Witness</Link>/<Link href="https://scryfall.com/card/mh1/7/ephemerate">Ephemerate</Link> in a port of the Modern/Legacy deck if UGx was open or with <Link href="https://scryfall.com/card/mid/224/galvanic-iteration">Galvanic Iteration</Link> in UR otherwise.</Typography>
      <Typography paragraph>P2/3 <Link href="https://scryfall.com/card/2xm/51/force-of-will">Force of Will</Link>/<Link href="https://scryfall.com/card/mh1/52/force-of-negation">Force of Negation</Link> - The rare interaction that can consistently interact with fast combo starts while letting you develop your own plan at the same time.</Typography>
      <Typography paragraph>P4 <Link href="https://scryfall.com/card/lrw/272/shelldock-isle">Shelldock Isle</Link> - A very early Isle to bridge the gap between some of the combo packages I was shooting for (<Link href="https://scryfall.com/card/uma/4/emrakul-the-aeons-torn">Emrakul</Link> + cheat effects, <Link href="https://scryfall.com/card/thb/73/thassas-oracle">Thassa's Oracle</Link>) - even if I had ended up there, I could have picked this up much later instead.</Typography>
      <Typography paragraph>P7 <Link href="https://scryfall.com/card/mh2/259/urzas-saga">Urza's Saga</Link> - I expect in a few months you won't ever get this card this late.</Typography>
      <Typography paragraph>P9/P2 <Link href="https://scryfall.com/card/ema/142/pyroblast">Pyroblast</Link>/<Link href="https://scryfall.com/card/a25/147/red-elemental-blast">REB</Link> - Every VRD has several blue decks and those are usually the scariest competition - this draft was no exception. These would also be phenomenal against me and are the best answers to the top-shelf blue planeswalkers once they have resolved.</Typography>
      <Typography paragraph>P10 <Link href="https://scryfall.com/card/iko/227/lutri-the-spellchaser">Lutri</Link> - The closest thing to a free companion in VRD and good in context when I already plan to copy high-impact spells and want extra blue cards to pitch to my Forces.</Typography>
      <Typography paragraph>P13 <Link href="https://scryfall.com/card/grn/257/steam-vents">Steam Vents</Link> - Many rounds after the run on fetches/duals, I'm able to pick up <Link href="https://scryfall.com/card/grn/257/steam-vents">Steam Vents</Link> to level up my <Link href="https://scryfall.com/card/ktk/249/wooded-foothills">Foothills</Link> despite there being another UR drafter.</Typography>
      <Typography paragraph>P15 <Link href="https://scryfall.com/card/ori/60/jace-vryns-prodigy-jace-telepath-unbound">Jace, Vryn's Prodigy</Link> - Will always play second fiddle to <Link href="https://scryfall.com/card/uma/71/snapcaster-mage">Snapcaster Mage</Link> in VRD but it has a special upside in my deck - recasting the spell for no additional cost makes it easier to set up the copy + <Link href="https://scryfall.com/card/vma/2/time-walk">Time Walk</Link> chains.</Typography>
      <Typography paragraph>P16 <Link href="https://scryfall.com/card/mh2/52/murktide-regent">Murktide Regent</Link> - As in every format with MH2 there's now an urgent question - why would you bother with attackers in other colours when blue now has the best threat too?! Between this and the <Link href="https://scryfall.com/card/bbd/136/true-name-nemesis">True-Name Nemesis</Link> I gladly grabbed with P22 I have a threat base that rivals any dedicated creature deck as well as the unique strengths blue gets to boast about.</Typography>
      <Typography paragraph>This was a rather conventional deck by my usual VRD standards and was diluted by directly competing with another streamlined UR tempo deck, but the card pool here is so deep that both of us were happy with our decks in the end.</Typography>

      <Button
        color="secondary"
        href={link}
        size="large"
        startIcon={<FontAwesomeIcon
          icon={faFile}
                   />}
        variant="contained"
      >
        {'See this draft'}
      </Button>
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
          <FullWidthImage src={dom}
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
        >Dom is immersed in competitive Magic as a writer, podcaster, and player but loves the chance to dive into unique puzzles like VRD when he's not sketching yet another Cube. His favourite cards are <Link href="https://scryfall.com/card/war/79/bolass-citadel">Bolas's Citadel</Link>, <Link href="https://scryfall.com/card/khc/31/restoration-angel">Restoration Angel</Link>, and <Link href="https://scryfall.com/card/rav/172/life-from-the-loam">Life from the Loam</Link>. He is reachable on <Link href="https://twitter.com/domhrv?lang=en">Twitter</Link></Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
