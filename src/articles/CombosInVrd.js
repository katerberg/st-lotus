/* eslint-disable react/jsx-no-literals*/
import katerberg from './katerberg.jpg';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ManaCost from '../common/mana-cost/ManaCost';
import React from 'react';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {styled} from '@mui/system';
import ComboCards from './ComboCards';

const FullWidthImage = styled('img')({
  maxWidth: '100%',
});

const Bold = styled('span')({
  fontWeight: '700',
});

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
      <Typography paragraph>These combos are played in nearly every VRD, and if they are not at your table, there is something particularly weird going on. They are generally easy to assemble, game winning, and/or replaceable.</Typography>
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
        <Typography>If the opponent has Emrakul, the Aeon’s Torn, Ulamog, the Infinite Gyre, Kozilek, Butcher of Truth, or Gaea’s Blessing in their deck, this combination will do very little (unless you have a Leyline of the Void or replacement).</Typography>
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
        <Typography>Thespian’s Stage can be replaced with Solemnity, Vampire Hexmage, or Aether Snap.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 3,
        pickCount: 57,
        numberOfDrafts: 57,
        name: 'Tinker',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/7/d/7da23b15-dfb8-4267-9b33-d7a4c035c434.png?1562863289',
      }, {
        averageRound: 15,
        pickCount: 43,
        numberOfDrafts: 54,
        name: 'Blightsteel Colossus',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/7/9/7928bb14-7631-4830-a756-26d1ea832ba2.png?1562612395',
      }]}
        title="Tinker + Blightsteel Colossus"
      >
        <Typography paragraph>Cheats a 11/11 infecting trampler into play.</Typography>
        <Typography paragraph>With any artifact in play and Blightsteel Colossus <Bold>not</Bold> being in your hand, cast Tinker and put Blightsteel Colossus into play. Attack the next turn to win the game.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Tinker can be replaced with infinite mana which makes this a common pairing with Power Artifact or Auriok Salvagers.</Typography>
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
        <Typography>Splinter Twin can be replaced with Kiki-Jiki, Mirror Breaker or Saheeli Rai (as described above).</Typography>
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
        <Typography>Leyline of the Void can be replaced with Dauthi Voidwalker or Rest in Peace.</Typography>
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
        <Typography>Thassa’s Oracle can be replaced with Laboratory Maniac or Jace, Wielder of Mysteries.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 26,
        pickCount: 38,
        numberOfDrafts: 57,
        name: 'Academy Ruins',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/a/f/af09af65-0a3b-42df-b0fd-372e2158beac.png?1562931959',
      }, {
        averageRound: 27,
        pickCount: 25,
        numberOfDrafts: 57,
        name: 'Mindslaver',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/9/8/98fb1eaa-2871-491a-a4f5-3e358778ba40.png?1562151747',
      }]}
        title="Academy Ruins + Mindslaver"
      >
        <Typography paragraph>Takes infinite turns.</Typography>
        <Typography paragraph>With Academy Ruins and many lands in play, cast and activate Mindslaver. Activate Academy Ruins to put Mindslaver on top of your library. Repeat ad nauseam.</Typography>
        <Typography paragraph>This combo is obviously incredibly mana intensive and hard to get working. It has largely been a suplement to a Goblin Welder deck that gets minor benefit from Mindslaver ahead of time, eventually ending in this combo after disrupting the opponent with several mindslavers earlier.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Academy Ruins can be replaced with Emry, Lurker of the Loch or Trading Post.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 41,
        pickCount: 24,
        numberOfDrafts: 24,
        name: 'Karn, the Great Creator',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/e/3ec0c0fb-1a4f-45f4-85b7-346a6d3ce2c5.png?1566819742',
      }, {
        averageRound: 28,
        pickCount: 23,
        numberOfDrafts: 57,
        name: 'Mycosynth Lattice',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/e/7/e7e7f15a-074a-4137-88ca-e5d376d146fd.png?1562640258',
      }]}
        title="Karn, the Great Creator + Mycosynth Lattice"
      >
        <Typography paragraph>Prevents opponent from activating any activated abilities, including mana abilities.</Typography>
        <Typography>With Karn, the Great Creator in play, activate Karn’s minus ability to retrieve Mycosynth Lattice from your sideboard and cast it (usually on a later turn because <ManaCost manaCost="{10}" /> mana is a lot). Karn’s static ability prevents all of opponent’s lands from being tapped for mana.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 31,
        pickCount: 5,
        numberOfDrafts: 57,
        name: 'Chain of Smog',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/6/b/6bfe64f9-8b03-41f6-a47b-fade397ad9d1.png?1562920423',
      }, {
        averageRound: 25,
        pickCount: 2,
        numberOfDrafts: 6,
        name: 'Witherbloom Apprentice',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/7/f/7f80a11b-188b-464c-b00d-c9d1cfb8ddee.png?1624740448',
      }]}
        title="Chain of Smog + Witherbloom Apprentice"
      >
        <Typography paragraph>Makes the opponent lose infinite life.</Typography>
        <Typography paragraph>With Witherbloom Apprentice in play, cast Chain of Smog, targeting yourself and triggering Witherbloom Apprentice. When it resolves, choose to copy it, triggering it again. Repeat ad nauseam.</Typography>
        <Typography paragraph />
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Witherbloom Apprentice can be replaced with Professor Onyx, Ral, Storm Conduit, Witherbloom Pledgemage, Sedgemoor Witch (for infinite creatures instead), Storm-Kiln Artist (for an infinitely-powered attacker with infinite mana), or Silverquill Apprentice (for an infinitely-powered attacker).</Typography>
        <Typography>Chain of Smog can be replaced with Chain of Acid (when taken with Darksteel Citadel).</Typography>
      </ComboCards>
      <SpacedHeader
        component="h2"
        sx={{marginTop: 5}}
        variant="h3"
      >{'The Occasionals'}</SpacedHeader>
      <Typography color="text.secondary"
        paragraph
        sx={{marginLeft: '20px'}}
        variant="subtitle1"
      >Drafted in 10% or more of VRDs</Typography>
      <Typography paragraph>These are combos that shouldn’t surprise you to see, but that might raise an eyebrow. They definitely show up commonly enough that they aren’t a terrible decision and in the right decks can be very powerful.</Typography>
      <ComboCards cards={[{
        averageRound: 16,
        pickCount: 17,
        numberOfDrafts: 54,
        name: 'Thopter Foundry',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/4/2/42b8d797-b01d-49cf-9818-d84bba17029d.png?1562640917',
      }, {
        averageRound: 24,
        pickCount: 17,
        numberOfDrafts: 57,
        name: 'Sword of the Meek',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/e/9/e9f13705-6ede-4c29-a2b4-a082bf69e9c5.png?1562941962',
      }]}
        title="Thopter Foundry + Sword of the Meek"
      >
        <Typography paragraph>Generates a large number of tokens and a large amount of life.</Typography>
        <Typography paragraph>With Thopter Assembly and Sword of the Meek in play, sacrifice Sword of the Meek to the Assembly, which creates a creature that brings the Sword back. Repeat as many times as you like at the end of your opponent’s turn, generating as many creatures and life points as your available mana each turn.</Typography>
        <Typography paragraph />
        <Typography
          color="success.main"
          variant="h6"
        >Bonus:</Typography>
        <Typography>If you have a Time Sieve in play and at least five mana, this also creates infinite turns. With Urza, Lord High Artificer out, this combo accelerates at much faster speed.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 25,
        pickCount: 10,
        numberOfDrafts: 57,
        name: 'Auriok Salvagers',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/0/9/09c9cd1b-9260-4f98-ac7a-25bb5ae3e06d.png?1562875356',
      }, {
        averageRound: 15,
        pickCount: 41,
        numberOfDrafts: 57,
        name: 'Lion’s Eye Diamond',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/6/3/63bacc32-d6ba-420c-9b49-299c08e5fb39.png?1562719750',
      }]}
        title="Auriok Salvagers + Lion’s Eye Diamond"
      >
        <Typography paragraph>Generates infinite mana.</Typography>
        <Typography paragraph>This generates infinite mana of any color by sacrificing the LED (for three) and returning it to the battlefield with Auriok Salvagers (for two). Once infinite <ManaCost manaCost="{W}" /> mana is generated, any other color can be generated as well.</Typography>
        <Typography paragraph />
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Lion’s Eye Diamond can be replaced with Black Lotus if you’re a very lucky drafter.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 20,
        pickCount: 1,
        numberOfDrafts: 53,
        name: 'Ivy Lane Denizen',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/b/9/b95be874-93c0-4e05-9e5a-fe8f38bcb445.png?1561843498',
      }, {
        averageRound: 19,
        pickCount: 1,
        numberOfDrafts: 5,
        name: 'Scurry Oak',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/0/f/0fb48c2e-ee0f-4fae-9c22-247870c10d5b.png?1626097756',
      }]}
        title="Ivy Lane Denizen + Scurry Oak"
      >
        <Typography paragraph>Generates infinite tokens and an infinitely large creature.</Typography>
        <Typography paragraph>With Ivy Lane Denizen in play, play Scurry Oak. It triggers Ivy Lane Denizen, targeting Scurry Oak. This triggers Scurry Oak, creating a creature re-triggering Ivy Lane Denizen. Repeat ad nauseam.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Scurry Oak can be replaced with Herd Baloth.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 25,
        pickCount: 22,
        numberOfDrafts: 57,
        name: 'Power Artifact',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/e/4/e48bc89e-6da5-43da-b4e0-60d5f850199c.png?1562943281',
      }, {
        averageRound: 6,
        pickCount: 57,
        numberOfDrafts: 57,
        name: 'Grim Monolith',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/9/d/9ddc9fe1-17c8-4e1d-aeb8-c4214e881280.png?1562863767',
      }]}
        title="Power Artifact + Grim Monolith"
      >
        <Typography paragraph>This generates infinite <ManaCost manaCost="{C}"/> mana.</Typography>
        <Typography paragraph>With both in play, tap Grim Monolith for <ManaCost manaCost="{3}"/>. Activate Power Artifact's ability to untap the monolith for <ManaCost manaCost="{2}"/>. Repeat ad nauseam.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Grim Monolith can be replaced with Basalt Monolith, but this does reduce the efficacy of some tutors, like Muddle the Mixture.</Typography>
        <Typography>Power Artifact can be replaced with Kinnan, Bonder Prodigy, Nyxbloom Ancient, Mana Reflection, Zirda, the Dawnwaker, or Forsaken Monument (with Basalt Monolith).</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 23,
        pickCount: 34,
        numberOfDrafts: 57,
        name: 'Isochron Scepter',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/8/7/878b0159-6917-45d3-b9ea-562ac49f0b8f.png?1562149998',
      }, {
        averageRound: 34,
        pickCount: 5,
        numberOfDrafts: 31,
        name: 'Dramatic Reversal',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/d/c/dcb59045-2743-48ae-8063-727e551b1c41.png?1576381170',
      }]}
        title="Isochron Scepter + Dramatic Reversal"
      >
        <Typography paragraph>Generates infinite mana.</Typography>
        <Typography>With non-land mana sources that produce at least three mana, cast Isochron Scepter and imprint it with Dramatic Reversal. Activate the Isochron Scepter untapping the mana sources, tap them to produce mana. Repeat ad nauseam.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 29,
        pickCount: 7,
        numberOfDrafts: 57,
        name: 'Worldgorger Dragon',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/9/9/99783a2b-a95a-457b-82d6-001933aee5ec.png?1562631091',
      }, {
        averageRound: 20,
        pickCount: 36,
        numberOfDrafts: 57,
        name: 'Animate Dead',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/8/f/8fd7861d-925f-4b4c-a4ab-60be6f43d50b.png?1559591550',
      }]}
        title="Worldgorger Dragon + Animate Dead"
      >
        <Typography paragraph>Generates infinite mana.</Typography>
        <Typography paragraph>This generates infinite mana of any color that your lands can produce and infinite ETB effects by putting the enchantment into play on the Dragon, which removes all permanents (including lands and the enchantment) which causes the Dragon to die, returning all of those permanents (untapped, thereby generating mana).</Typography>
        <Typography
          color="warning.dark"
          variant="h6"
        >Caution:</Typography>
        <Typography paragraph>If Dragon is the only creature in any graveyard and you have no way to remove the Dragon or enchantment at instant speed, this will cause a draw of the game (as happened on camera in VRD 7).</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Animate Dead can be replaced with Necromancy, Dance of the Dead, or any other enchanting reanimation effect.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 23,
        pickCount: 4,
        numberOfDrafts: 36,
        name: 'Soulfire Grand Master',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/f/c/fc3a4e7d-6667-4c2f-b6b4-484f401b0455.png?1562831870',
      }, {
        averageRound: 2,
        pickCount: 57,
        numberOfDrafts: 57,
        name: 'Time Walk',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/e/0/e0139f60-d48e-46fb-9f5a-1e3d7558c834.png?1559591444',
      }]}
        title="Soulfire Grand Master + Time Walk"
      >
        <Typography paragraph>Generates infinite turns.</Typography>
        <Typography paragraph>With Soulfire Grand Master out and six mana sources available, activate her ability and cast Time Walk. Repeat each turn to and find a way to win the game where only you take turns.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Time Walk can be replaced by Time Warp, Temporal Manipulation, or Turnabout (for infinite mana instead).</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 24,
        pickCount: 12,
        numberOfDrafts: 57,
        name: 'Flash',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/6/3/63af3c26-5b1f-46f6-9aa2-036c615bf5ea.png?1562719749',
      }, {
        averageRound: 28,
        pickCount: 8,
        numberOfDrafts: 57,
        name: 'Protean Hulk',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/d/3d978332-95bf-4f86-9e67-06f10983c267.png?1593273433',
      }]}
        title="Flash + Protean Hulk"
      >
        <Typography paragraph>Wins the game.</Typography>
        <Typography paragraph>Flash Hulk has a myriad of combinations that win the game, but a classic one is the “Cephalid Breakfast” combo. With Protean Hulk in hand, cast Flash, putting Protean Hulk into play. Protean Hulk dies to Flash, searching up Cephalid Illusionist, Nomads-en-Kor, Hapless Researcher, and Grand Abolisher (for protection). Activate Cephalid Illusionist, targeting Nomads-en-Kor milling three cards from your library. Repeat until you have no cards remaining, milling Dread Return, Laboratory Maniac, Narcomoeba (into play). Cast Dread Return on Laboratory Maniac. Activate Hapless Researcher to win the game.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Similar to Doomsday, nearly every part of the combo are replaceable other than the namesakes.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 12,
        pickCount: 3,
        numberOfDrafts: 30,
        name: 'Vizier of Remedies',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/6/36ab760e-93e0-4dbc-aaa1-02316f62ed3f.png?1543674853',
      }, {
        averageRound: 13,
        pickCount: 3,
        numberOfDrafts: 57,
        name: 'Devoted Druid',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/8/2/820e2f07-f637-4144-b45a-0e1430dcf55e.png?1562832416',
      }]}
        title="Vizier of Remedies + Devoted Druid"
      >
        <Typography paragraph>Generates infinite <ManaCost manaCost="{G}"/> mana.</Typography>
        <Typography paragraph>With Vizier of Remedies and a non-summoning sick Devoted Druid in play, tap the druid for mana. Activate its untap ability, which will untap it without the counter. Repeat ad nauseam.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Vizier of Remedies can be replaced with Solemnity.</Typography>
        <Typography>Devoted Druid can be replaced with Quillspike for infinite power instead.</Typography>
      </ComboCards>
      <SpacedHeader
        component="h2"
        sx={{marginTop: 5}}
        variant="h3"
      >{'The Shocking'}</SpacedHeader>
      <Typography color="text.secondary"
        paragraph
        sx={{marginLeft: '20px'}}
        variant="subtitle1"
      >Drafted in 1% or more of VRDs</Typography>
      <Typography paragraph>These combos are very rarely seen. Obviously any of these combos are powerful enough to win the game, but they have generally not proven themselves in the wide number of drafts where they’ve been available.</Typography>
      <ComboCards cards={[{
        averageRound: 47,
        pickCount: 4,
        numberOfDrafts: 57,
        name: 'Squirrel Nest',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/2/2/22eccb27-1723-4c5a-96b8-85e6e5739c30.png?1562901472',
      }, {
        averageRound: 36,
        pickCount: 5,
        numberOfDrafts: 57,
        name: 'Earthcraft',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/9/d/9dda7531-82a1-4f49-8858-601ddbc6e2bc.png?1587857352',
      }]}
        title="Squirrel Nest + Earthcraft"
      >
        <Typography paragraph>Generates infinite creatures.</Typography>
        <Typography>With Squirrel Nest enchanting a basic land and Earthcraft in play, tap Squirrel Nest to create a creature. Activate Earthcraft, tapping the squirrel to untap the land. Repeat ad nauseam.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 38,
        pickCount: 5,
        numberOfDrafts: 57,
        name: 'Energy Field',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/8/1/81ff5770-b207-41e1-97b7-b9347c72b407.png?1562922391',
      }, {
        averageRound: 22,
        pickCount: 36,
        numberOfDrafts: 53,
        name: 'Rest in Peace',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/7/37c2b1d1-faa0-40fd-82f4-216604ce7635.png?1562784882',
      }]}
        title="Energy Field + Rest in Peace"
      >
        <Typography paragraph>Translates any damage into exiling cards from your library.</Typography>
        <Typography paragraph>With Rest in Peace and Energy Field in play, any damage permanently exiles cards from your library instead of causing life loss. Often this wins with Thassa’s Oracle or one of its replacements once the deck is gone.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 28,
        pickCount: 4,
        numberOfDrafts: 43,
        name: 'Dualcaster Mage',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/0/b/0b80c8a0-0870-4836-bee1-f4a805d119d6.png?1561931952',
      }, {
        averageRound: 41,
        pickCount: 2,
        numberOfDrafts: 49,
        name: 'Twinflame',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/2/0/207128b3-2de3-495a-bf29-eec50c3bd752.png?1593096134',
      }]}
        title="Dualcaster Mage + Twinflame"
      >
        <Typography paragraph>Generates infinite attackers.</Typography>
        <Typography paragraph>With another creature in play, cast Twinflame on the original creature, holding priority. Cast Dualcaster Mage copying Twinflame, pointing at the Dualcaster Mage. Repeat this until you have infinite hasted Dualcaster Magi in play.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Twinflame can be replaced with Heat Shimmer, Mythos of Illuna, Seize the Day, Fated Intuition, Kindred Charge, Sublime Epiphany, Repudiate // Replicate, Cackling Counterpart, or Acrobatic Maneuver (for infinite draw)</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 22,
        pickCount: 2,
        numberOfDrafts: 54,
        name: 'Mindcrank',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/d/1/d13a5ae0-d76a-4430-98c1-47a19e615e2c.png?1562881729',
      }, {
        averageRound: 12,
        pickCount: 1,
        numberOfDrafts: 57,
        name: 'Bloodchief Ascension',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/a/a/aa213dbb-c52a-4084-92aa-d0b5d97a97d9.png?1562615322',
      }]}
        title="Mindcrank + Bloodchief Ascension"
      >
        <Typography paragraph>Generates infinite life-loss and milling.</Typography>
        <Typography paragraph>With a fully leveled up Bloodchief Ascension and a Mindcrank in play, cause your opponent to either put a card in their graveyard or lose a life. This will trigger one of the two abilities, which will trigger the other until the opponent has run out of life and cards in library.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Bloodchief Ascension can be replaced with Duskmantle Guildmage.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 39,
        pickCount: 4,
        numberOfDrafts: 30,
        name: 'Solemnity',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/0/a/0a71fb62-acbd-49f5-842f-0fc9fa48afea.png?1562788659',
      }, {
        averageRound: 38,
        pickCount: 1,
        numberOfDrafts: 54,
        name: 'Phyrexian Unlife',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/b/4/b4a1e16a-39f0-47ab-aba8-73e82ba9ab18.png?1562880895',
      }]}
        title="Solemnity + Phyrexian Unlife"
      >
        <Typography paragraph>Prevents you from losing from life loss.</Typography>
        <Typography paragraph>With Solemnity in play, counters cannot be added to you. As you take damage, Phyrexian Unlife attempts to put poison counters on you, which evaporate due to Solemnity.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Phyrexian Unlife can be replaced with Glacial Chasm (although it will not stop “life loss” effects like Tendrils of Agony)</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 35,
        pickCount: 3,
        numberOfDrafts: 57,
        name: 'Valakut, the Molten Pinnacle',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/7/37bce60d-2cb0-4772-9f5c-122a7ed426a0.png?1562611305',
      }, {
        averageRound: 28,
        pickCount: 3,
        numberOfDrafts: 57,
        name: 'Scapeshift',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/8/4/84829605-50eb-455d-a236-ebfa11e883c5.png?1562879722',
      }]}
        title="Valakut, the Molten Pinnacle + Scapeshift"
      >
        <Typography paragraph>Deals a large amount of damage.</Typography>
        <Typography paragraph>With at least seven lands in play, Scapeshift in your hand, and Valakut, the Molten Pinnacle in your deck, cast Scapeshift, sacrificing all of your lands. Find Valakut and six mountains, each of which will deal 3 damage for a total of at least 18 damage. This is often combined with Prismatic Omen, Dryad of the Elysian Grove (which both reduce the number of lands needed by counting Valakut as a mountain).</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Scapeshift can be replaced with Primeval Titan which can fetch Valakut earlier, allowing it to deal damage “fairly”.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 41,
        pickCount: 2,
        numberOfDrafts: 57,
        name: 'Ad Nauseam',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/0/a/0a4ce4a1-65e3-4b40-be35-8fc55a968ec8.png?1562700939',
      }, {
        averageRound: 56,
        pickCount: 2,
        numberOfDrafts: 57,
        name: 'Angel’s Grace',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/5/8/580cb5be-fa59-4eb9-8808-7d2943fb6413.png?1562913383',
      }]}
        title="Ad Nauseam + Angel’s Grace"
      >
        <Typography paragraph>Draws infinite cards.</Typography>
        <Typography paragraph>After casting Angel’s Grace, cast Ad Nauseam and take all the cards in your deck. You will be at a very negative life total but you cannot lose until the end of turn.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Ad Nauseam can be replaced with Spoils of the Vault.</Typography>
        <Typography>Angel’s Grace can be replaced with Phyrexian Unlife.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 13,
        pickCount: 1,
        numberOfDrafts: 14,
        name: 'Heliod, Sun-Crowned',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/0/1/01a8576e-cadc-4521-aadd-3a05f0bc4d20.png?1581479085',
      }, {
        averageRound: 20,
        pickCount: 26,
        numberOfDrafts: 30,
        name: 'Walking Ballista',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/2/329a8738-3e17-403a-857a-0ba529ce8cd1.png?1576382470',
      }]}
        title="Heliod, Sun-Crowned + Walking Ballista"
      >
        <Typography paragraph>Generates infinite damage.</Typography>
        <Typography paragraph>With both in play and the Walking Ballista at two counters or more, activate Heliod’s ability to give Walking Ballista lifelink. Activate Walking Ballista to deal a damage, adding a counter to it. Repeat ad nauseam.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Heliod, Sun-Crowned can be replaced with Mikaeus, the Unhallowed (only for Triskelion).</Typography>
        <Typography>Walking Ballista can be replaced with Triskelion or Spike Feeder (for infinite life).</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 17,
        pickCount: 1,
        numberOfDrafts: 57,
        name: 'Phyrexian Dreadnought',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/7/b/7b8197b9-0cd1-4fa1-9668-d1b5f1759151.png?1562720243',
      }, {
        averageRound: 26,
        pickCount: 19,
        numberOfDrafts: 57,
        name: 'Stifle',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/2/d/2d7643c0-b2db-478f-944e-b27b77bad3eb.png?1562527068',
      }]}
        title="Phyrexian Dreadnought + Stifle"
      >
        <Typography paragraph>Creates a 12/12 trampler.</Typography>
        <Typography paragraph>Cast Phyrexian Dreadnought. Counter its trigger with Stifle.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Stifle can be replaced with Dress Down, Illusionary Mask, Torpor Orb, Hushwing Gryf, Hushbringer, or Tocatli Honor Guard.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 15,
        pickCount: 2,
        numberOfDrafts: 57,
        name: 'Opalescence',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/c/3c0071fb-afa5-47b5-b266-2b10a4f5a98a.png?1562443752',
      }, {
        averageRound: 26,
        pickCount: 1,
        numberOfDrafts: 57,
        name: 'Enchanted Evening',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/5/0/5033a7b0-39b0-4c49-b332-7ea62d85455d.png?1562830075',
      }]}
        title="Opalescence + Enchanted Evening"
      >
        <Typography paragraph>Destroys all (current and future) lands.</Typography>
        <Typography>With both Enchanted Evening and Opalescence in play, all zero-cost permanents (including lands) have zero toughness and die.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 37,
        pickCount: 1,
        numberOfDrafts: 57,
        name: 'Illusions of Grandeur',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/1/7/17eeeef2-2ced-42b8-a5e0-1095c9e13b02.png?1562899523',
      }, {
        averageRound: 36,
        pickCount: 1,
        numberOfDrafts: 57,
        name: 'Donate',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/7/f/7f6d8ce9-f8c8-45ad-b74c-97fba0e2982e.png?1562444248',
      }]}
        title="Illusions of Grandeur + Donate"
      >
        <Typography paragraph>Causes an opponent to lose twenty life (after a couple of turns).</Typography>
        <Typography paragraph>A classic combo featured in the “Trix” deck that rarely appears anymore. With Illusions of Grandeur in play, you cast Donate giving it to your opponent, who is left with a cumulative upkeep cost or loses twenty life.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Illusions of Grandeur can be replaced with Demonic Pact.</Typography>
        <Typography>Donate can be replaced with Harmless Offering, or Bazaar Trader.</Typography>
      </ComboCards>
      <SpacedHeader
        component="h2"
        sx={{marginTop: 5}}
        variant="h3"
      >{'The Untested'}</SpacedHeader>
      <Typography color="text.secondary"
        paragraph
        sx={{marginLeft: '20px'}}
        variant="subtitle1"
      >Unplayed</Typography>
      <Typography paragraph>These combos have powerful effects and are known quantities in Competitive EDH, Cubes, or other formats. They haven’t seen play in a VRD yet, but could show up sometime soon.</Typography>
      <ComboCards cards={[{
        averageRound: 0,
        pickCount: 0,
        numberOfDrafts: 57,
        name: 'Knowledge Pool',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/9/393454c2-b256-4a6e-9bc2-56a47cab5073.png?1562610637',
      }, {
        averageRound: 37,
        pickCount: 13,
        numberOfDrafts: 57,
        name: 'Teferi, Mage of Zhalfir',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/c/3c0145f6-4e27-49e7-9ef6-bac6fa3de26d.png?1562907491',
      }]}
        title="Knowledge Pool + Teferi, Mage of Zhalfir"
      >
        <Typography paragraph>Prevents your opponent from successfully casting any spells.</Typography>
        <Typography>With Knowledge Pool and Teferi, Mage of Zhalfir in play, any spell your opponent casts will trigger Knowledge Pool which exiles it. Teferi, Mage of Zhalfir prevents them from casting the other spell since it would not be at sorcery speed.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography paragraph>Knowledge Pool can be replaced with Possibility Storm, Erayo, Soratami Ascendant (once flipped), or Omen Machine (which affects all future cards drawn).</Typography>
        <Typography>Teferi, Mage of Zhalfir can be replaced with Curse of Exhaustion, Teferi, Time Raveler, Lavinia, Azorious Renegade, Drannith Magistrate, Arcane Laboratory (when you are ahead on board), Rule of Law (when you are ahead on board).</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 0,
        pickCount: 0,
        numberOfDrafts: 57,
        name: 'Acererak the Archlich',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/d/d/dd52d0bd-3abd-401c-9f56-ee911613da3b.png?1627704283',
      }, {
        averageRound: 29,
        pickCount: 3,
        numberOfDrafts: 57,
        name: 'Aluren',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/2/6/268403bc-733d-446e-a7c1-abc957c42bc2.png?1595430482',
      }]}
        title="Acererak the Archlich + Aluren"
      >
        <Typography paragraph>Deals infinite damage.</Typography>
        <Typography>With Aluren in play, play Acererak the Archlich, triggering his ability to venture into the “Lost Mines of Phandelver” dungeon, which returns him to your hand. Replay him ad nauseam, going through the “Dark Pool”, draining your opponent’s life.</Typography>
        <Typography
          color="warning.dark"
          variant="h6"
        >Caution:</Typography>
        <Typography paragraph>If you are very low on cards in your deck, you may need to find another way to win the game after draining your opponent for most of their life, since you only drain 1 life per card left in your library with this combo.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Aluren can be replaced with Rooftop Storm or Omniscience.</Typography>
      </ComboCards>
      <ComboCards cards={[{
        averageRound: 0,
        pickCount: 0,
        numberOfDrafts: 57,
        name: 'Food Chain',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/1/8/18a1bb9e-006c-495e-8f99-d451183d2669.png?1562379435',
      }, {
        averageRound: 0,
        pickCount: 0,
        numberOfDrafts: 57,
        name: 'Eternal Scourge',
        imageLink: 'https://c1.scryfall.com/file/scryfall-cards/png/front/1/3/13ce52f5-6d49-4d44-a3d7-925340de8406.png?1576383733',
      }]}
        title="Food Chain and Eternal Scourge"
      >
        <Typography paragraph>Generates infinite mana.</Typography>
        <Typography>With Food Chain and Eternal Scourge in play, exile Eternal Scourge with Food Chain. Cast Eternal Scourge from exile. Repeat this process ad nauseam.</Typography>
        <Typography
          variant="h6"
        >Replacements:</Typography>
        <Typography>Eternal Scourge can be replaced with Misthollow Griffin, Squee, the Immortal, and can have an “extra copy” with Manipulate Fate.</Typography>
      </ComboCards>
      <SpacedHeader
        component="h2"
        sx={{marginTop: 5}}
        variant="h3"
      >{'Core of the Format?'}</SpacedHeader>
      <Typography paragraph>There are so many combos that show up in VRD that it almost seems like they are the glue holding most decks together, and that a successful draft must include a combo. Some decks, often referred to as “Two Card Monte” decks (whose name originated from The Mana Drain) exist purely as engines designed to play as many combos as possible and hope to get lucky with two pieces of them appearing at the same time!</Typography>
      <Typography paragraph>The reality is that while one of these combos do usually show up in over half of the decks in an average draft, it is eminently possible to win with a “fair deck”. Aggressive decks such as Burn often do well, as do heavily controlling decks (either with counterspells, planeswalkers, or discard).</Typography>
      <Typography paragraph>When you draft a combo deck in this format, make sure you have more to it than just the combo, or you’ll be quickly ended with interaction, and end up losing to a disappointing 2/1 that will eventually finish you off.</Typography>
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
          <FullWidthImage src={katerberg}
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
        >Mark Katerberg is a longtime L2 Judge, Member of the St. Lotus VRD Steering Committee, and a deeply invested combo player. He fell in love with VRD from the days of Shotgun Lotus, and knew that the format needed more live matches to be streamed. His favorite cards are Doomsday, Dark Ritual, Mystical Teachings, and Serra Angel.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
