/* eslint-disable react/jsx-no-literals*/
import React from 'react';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ComboCards from './ComboCards';

export default function CombosInVrd() {
  return (
    <Container maxWidth="lg" >
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'Combos in VRD'}</SpacedHeader>
      <Typography
        color="text.secondary"
        sx={{marginBottom: '20px', marginLeft: '20px'}}
        variant="subtitle1"
      >{'Written by: Mark Katerberg on November 13, 2021'}</Typography>
      <Typography paragraph>Vintage Rotisserie Draft is well known as a format where combo decks can run rampant. While aggressive and controlling strategies often rely on redundancy (either of threats or of answers), combination decks generally rely on a few powerful pieces, with replaceable filtering pieces that aid in finding the crucial parts that are needed to win the game.</Typography>
      <Typography paragraph>Over the past decade that this format has been played extensively, the definition of a “playable combo” has varied wildly, with some combos falling far out of favor (looking at you <Link href="https://scryfall.com/card/uds/31/donate">Donate</Link>/Illusions of Grandeur), some combos coming into the format (Tainted Pact/Thassa’s Oracle), and some lasting for the entire time (Painter’s Servant/Grindstone).</Typography>
      <Typography paragraph>The goal of this article is not to extensively document every combo that could be played. It opted to exclude any three card combos, such as the powerful Brain Freeze + Underworld Breech + Lion’s Eye Diamond synergies, even though those can be more powerful by far than some on the list today. Instead, it tries to capture the most common options, and give newer players an understanding of the options they have when they sit under the tremendous pressure of the question: “Have you made your pick yet?”</Typography>
      <SpacedHeader
        component="h2"
        sx={{marginTop: 5}}
        variant="h3"
      >{'The Big Ones'}</SpacedHeader>
      <Typography color="text.secondary"
        paragraph
        sx={{marginLeft: '20px'}}
        variant="subtitle1"
      >Drafted in more than 75% of VRDs</Typography>
      <Typography paragraph> These combos are played in nearly every VRD, and if they are not at your table, there is something particularly weird going on. They are generally easy to assemble, game winning, and/or replaceable.</Typography>
      <ComboCards cards={[{
        averageRound: 6,
        pickCount: 7,
        numberOfDrafts: 7,
        name: 'Hullbreacher',
    imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/4/d/4df8aabc-7fcb-4b7b-980b-18f499e6c170.png?1626088514',
      }, {
        averageRound: 8,
        pickCount: 57,
        numberOfDrafts: 57,
        name: 'Timetwister',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/9/a/9a49dc44-616e-4bdd-8220-0bb71eccc512.png?1559591443',
      }]}
        title="Hullbreacher + Timetwister"
      >
        <Typography paragraph>This is more of a “family” of combos that remove your opponent’s hand, refill your hand, and usually provide additional value to you. In all cases, the combo will leave your opponent at a massive card disadvantage, and fill your hand to allow you to press the advantage in some way.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Hullbreacher can be replaced with any of the following: Leovold, Emissary of Trest, Notion Thief, or Narset, Parter of Veils.</Typography>
        <Typography>Timetwister can be replaced with any of the following: Wheel of Fortune, Echo of Eons, Time Spiral, Windfall, Whirlpool Warrior, Teferi’s Puzzle Box, or (to a lesser effect) Memory Jar.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 2,
        pickCount: 56,
        numberOfDrafts: 57,
        name: 'Time Vault',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/9/0/902441dc-c976-4c92-b897-6376eaa0fe38.png?1559591445',
      }, {
        averageRound: 15,
        pickCount: 46,
        numberOfDrafts: 57,
        name: 'Tezzeret the Seeker',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/b/3b214b6f-4734-4200-8467-92d7e3469b5d.png?1562702928',
      }]}
        title="Time Vault + Tezzeret the Seeker"
      >
        <Typography paragraph>Generates infinite turns.</Typography>
        <Typography paragraph>Tezzeret is all that is needed to start the combo. You activate his -X for 2 and put Time Vault into play. The next turn, you activate his +1 to untap it and then tap it to take another turn. Repeat the process ad nauseam. If you already have Time Vault in play, you can start with the +1.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Tezzeret the Seeker can be replaced with Voltaic Key, Galvanic Key, Ral Zarek, Teferi, Who Slows the Sunset, Kiora's Follower, or a handful of other options.</Typography>
        <Typography>A rare addition, but with Crystal Shard or Erratic Portal, all of the single-use “untap” effects from the Splinter Twin combo also can replace the “untap” part of this combo.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 11,
        pickCount: 51,
        numberOfDrafts: 57,
        name: 'Painter’s Servant',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/b/e/be407a81-b25a-4e5d-845e-be0cc0d18db8.png?1562835450',
      }, {
        averageRound: 15,
        pickCount: 51,
        numberOfDrafts: 57,
        name: 'Grindstone',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/f/4/f4459187-de64-456f-bb66-56dea40d5c3e.png?1562057371',
      }]}
        title="Painter’s Servant + Grindstone"
      >
        <Typography paragraph>Mills opponent’s entire library.</Typography>
        <Typography paragraph>With Painter’s Servant (naming any color, but usually “red” for Blue Elemental Blast or “blue” for Red Elemental Blast and Grindstone in play), activate Grindstone targeting your opponent. They will mill two cards, which match color as a result of Painter’s Servant and repeats until they have no cards left in library.</Typography>
        <Typography paragraph>This combination is helped by being incredibly easy to tutor for, with both pieces being low-cost artifacts. Generally Painter’s Servant is taken earlier, but neither is playable without the other, so depending on how worried you are about your fellow drafters hate-drafting the combo, you can likely float the other piece much later than round 15.</Typography>
        <Typography
          color="error.dark"
          variant="h6"
        >Caution:</Typography>
        <Typography paragraph>If the opponent has Emrakul, the Aeon’s Torn, Ulamog, the Infinite Gyre, Kozilek, Butcher of Truth, or Gaea’s Blessing in their deck, this combination will do very little (unless you have a Leyline of the Void or replacement).</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 14,
        pickCount: 43,
        numberOfDrafts: 57,
        name: 'Dark Depths',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/9/2/92409c3a-fb1a-4205-9fe1-0f5affc7b21d.png?1593275643',
      }, {
        averageRound: 20,
        pickCount: 37,
        numberOfDrafts: 53,
        name: 'Thespian’s Stage',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/b/6/b6f27909-e5cd-44c0-91c4-21624f692fd9.png?1561843043',
      }]}
        title="Dark Depths + Thespian’s Stage"
      >
        <Typography paragraph>Creates a 20/20 indestructible flyer at instant speed.</Typography>
        <Typography paragraph>With both lands in play, activate Thespian’s Stage targeting Dark Depths. This makes two copies of the legendary land and you choose to keep the one without counters on it. The Stage then triggers and you can sacrifice it to create Marit Lage.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Thespian’s Stage can be replaced with Solemnity, Vampire Hexmage, or Aether Snap.</Typography>
      </ComboCards>
      <SpacedHeader
        component="h2"
        sx={{marginTop: 5}}
        variant="h3"
      >{'The Regulars'}</SpacedHeader>
      <Typography color="text.secondary"
        paragraph
        sx={{marginLeft: '20px'}}
        variant="subtitle1"
      >Drafted in 40% or more of VRDs</Typography>
      <Typography paragraph>These combos are very common to see at a VRD. While they won’t always show up, they should be in your toolbox and if you’re in the colors late, they’re a great option to shore up a deck that needs a finisher.</Typography>
      <ComboCards cards={[{
        averageRound: 28,
        pickCount: 35,
        numberOfDrafts: 57,
        name: 'Pestermite',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/f/2/f252ae53-443c-4a27-b8f0-639a9a2b8598.png?1562374183',
      }, {
        averageRound: 23,
        pickCount: 33,
        numberOfDrafts: 57,
        name: 'Splinter Twin',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/2/f/2f8f22fb-7291-4517-9b15-e98501f2856b.png?1562702491',
      }]}
        title="Pestermite + Splinter Twin"
      >
        <Typography paragraph>Generates infinite attackers.</Typography>
        <Typography paragraph>This is more of a “family” of combos. By putting Splinter Twin on Pestermite (without summoning sickness), you can tap the pestermite to create a hasty version of itself untapping the original. This can be repeated ad nauseam.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Pestermite can be replaced with either of the following: Deceiver Exarch, Bounding Krasis, Combat Celebrant, Port Razer, Battered Golem, Clever Conjurer, Thousand-Year Elixir, Sparring Mummy, Vizier of Tumbling Sands, Hyrax Tower Scout, Restoration Angel (in combination with Kiki-Jiki), Felidar Guardian (in combination with Saheeli Rai or Kiki-Jiki), Spark Double (in combination with Saheeli Rai or Kiki-Jiki), Zealous Conscripts (in combination with Kiki-Jiki), Conspicuous Snoop (with Kiki-Jiki on top of the library) or Skill Borrower (with Kiki-Jiki on top of the library).</Typography>
        <Typography paragraph>Splinter Twin can be replaced with Kiki-Jiki, Mirror Breaker or Saheeli Rai (as described above).</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 25,
        pickCount: 33,
        numberOfDrafts: 57,
        name: 'Helm of Obedience',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/b/1/b17e9216-b1ed-4101-a04e-2bb139ccfa55.png?1562770147',
      }, {
        averageRound: 26,
        pickCount: 39,
        numberOfDrafts: 57,
        name: 'Leyline of the Void',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/7/37dfe8b8-b39e-4e70-9e5b-be42c93b4f70.png?1593272209',
      }]}
        title="Helm of Obedience + Leyline of the Void"
      >
        <Typography paragraph>Exiles opponent’s entire library.</Typography>
        <Typography paragraph>With both in play, activate Helm for one mana which exiles each card of your opponent’s library.</Typography>
        <Typography paragraph>This combo is easily searchable with something like Enlightened Tutor. Despite being quite expensive to assemble, it still is powerful by combining cards that you already get benefit from with a single artifact that allows for an easy win when drawn.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Leyline of the Void can be replaced with Dauthi Voidwalker or Rest in Peace.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 29,
        pickCount: 9,
        numberOfDrafts: 57,
        name: 'Demonic Consultation',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/8/d/8d727b9b-6114-414d-9172-16b6e1db41cc.png?1562921228',
      }, {
        averageRound: 16,
        pickCount: 9,
        numberOfDrafts: 14,
        name: 'Thassa’s Oracle',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/7/2/726e8b29-13e9-4138-b6a9-d2a0d8188d1c.png?1628801828',
      }]}
        title="Demonic Consultation + Thassa’s Oracle"
      >
        <Typography paragraph>Wins the game.</Typography>
        <Typography paragraph>With no deck left (usually via casting Demonic Consultation in response to the Thassa’s Oracle trigger), Thassa’s Oracle’s trigger will resolve and wins the game, even if removed because zero cards left in the library is sufficient even with zero devotion to blue.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Demonic Consultation can be replaced with Thought Lash, Leveler, Paradigm Shift, Inverter of Truth, Harness Infinity, Morality Shift, Tainted Pact (with deckbuilding care), or Hermit Druid (with deckbuilding care).</Typography>
        <Typography paragraph>Thassa’s Oracle can be replaced with Laboratory Maniac or Jace, Wielder of Mysteries.</Typography>
      </ComboCards>
    </Container>
  );
}

