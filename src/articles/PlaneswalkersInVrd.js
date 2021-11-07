/* eslint-disable react/jsx-no-literals*/
import React from 'react';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import RankedCard from './RankedCard';
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
      <Typography paragraph>After St. Lotus 7 there has been some discussion about the ascendency of planeswalker cards to the top of the format. Brandon Curry’s powerful <Link href="https://scryfall.com/card/lea/3/balance">Balance</Link>/planeswalker deck was built around getting a 3 mana walker of some type (<Link href="https://scryfall.com/card/eld/197/oko-thief-of-crowns">Oko, Thief of Crowns</Link>, <Link href="https://scryfall.com/card/war/221/teferi-time-raveler">Teferi, Time Raveler</Link>, or <Link href="https://scryfall.com/card/war/229/dovin-hand-of-control">Dovin, Hand of Control</Link>) out on turn 2 as often as he could. Packing 8 maindeck walkers his strategy carried him to a 5-2 + a play off win against Eric Levine’s Eldrazi list.</Typography>
      <StyledIFrame allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="315"
        src="https://www.youtube-nocookie.com/embed/r25ZU6cVIIc"
        title="YouTube video player"
        width="560"
      />
      <SubSectionHeader
        component="h2"
        variant="h3"
      >These Boots are Made for Walking</SubSectionHeader>
      <Typography paragraph>Walkers as a part of the format are a discussion that is near and dear to my heart as I feel like my performance in St. Lotus 2 alongside Elaine Cao’s performance in 2, 3, 4, and 5 really showcased the power of the youngest card-type. In that draft, the first after War of the Spark (WAR) was available, after first picking <Link href="https://scryfall.com/card/lea/232/black-lotus">Black Lotus</Link>, I grabbed both <Link href="https://scryfall.com/card/war/61/narset-parter-of-veils">Narset, Parter of Veils</Link> and <Link href="https://scryfall.com/card/war/1/karn-the-great-creator">Karn, the Great Creator</Link> on the “wheel” after pack two. Of course, this was not just me foreseeing their future in the format, it was also the first draft after a bunch of the strongest walkers to ever be printed came out. Prior to WAR, in St. Lotus 1, there were only six planeswalkers picked, with the highest among those being <Link href="https://scryfall.com/card/wwk/31/jace-the-mind-sculptor">Jace, the Mind Sculptor</Link> in round 4. The next highest was <Link href="https://scryfall.com/card/m21/1/ugin-the-spirit-dragon">Ugin, the Spirit Dragon</Link> in round 15. St. Lotus 2 featured 20 (including two flip walkers).</Typography>
      <Typography paragraph>St. Lotus 2 featured myself with five main deck planeswalkers and Elaine with five as well. We both finished a strong 5-2 record, part of a three way tie with Dan Zielinski’s impressive infect deck. Elaine would go on to win St. Lotus 3 and 4, and tie for first (losing in the finals) at St. Lotus 5. Each of her decks featured powerful walker-backed strategies (3 had seven walkers, 4 had six, and 5 had five). While walker strategies are popular in St. Lotus drafts, two recent discord based asynchronous drafts featured ten and fourteen walkers respectively, proving that the strength of planeswalkers is also evident outside of the home of Pointersaurus. </Typography>
      <Typography paragraph>So why the rise? The power that these planeswalkers bring to the table is that they are often more difficult to answer in a format that tends towards more combos and fewer creatures, the static abilities on WAR-Walkers are potent effects, and they offer reliable effects over several turns. They offer a consistent threat that takes special cards to answer, and as of yet the drafts have not started heavily taking those cards (I am looking at you <Link href="https://scryfall.com/card/stx/188/fracture">Fracture</Link>).</Typography>
      <SubSectionHeader
        component="h2"
        variant="h3"
      >RE-SPECT, WALK</SubSectionHeader>
      <Typography paragraph>So, who are the walkers I respect the most? I am glad that I told you to ask. Here is my St. Lotus special analysis of the Top 10 VRD Planeswalkers and a few honorable mentions.</Typography>
      <RankedCard
        availableDrafts={22}
        averageRound={13}
        cardName="Wrenn and Six"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/4/a/4a706ecf-3277-40e3-871c-4ba4ead16e20.png?1582053605"
        losses={27}
        timesTaken={11}
        wins={30}
      />
      <Typography paragraph><Link href="https://scryfall.com/card/mh1/217/wrenn-and-six">Wrenn and Six</Link> has been picked in St. Lotus as high as round 2, butoverall average has been closer to round 21. I have this powerful tree-borg on the outside looking in because I don’t think I’ve seen it come together yet as a total package. No one deck consistently gets enough fetches to make her shine super strong there, and her real power of recurring <Link href="https://scryfall.com/card/atq/82b/strip-mine">Strip Mine</Link> and <Link href="https://scryfall.com/card/tmp/330/wasteland">Wasteland</Link> has yet to be fully realized. She is pretty good at picking off <Link href="https://scryfall.com/card/dka/24/thalia-guardian-of-thraben">Thalias</Link> and <Link href="https://scryfall.com/card/rav/81/dark-confidant">Dark Confidants</Link>, but compared to our other walkers she just doesn’t carry the weight. But she is close.</Typography>
      <RankedCard
        availableDrafts={23}
        averageRound={26}
        cardName="Nissa, Who Shakes the World"
        link="https://c1.scryfall.com/file/scryfall-cards/normal/front/f/8/f857bbe4-5619-4733-a0c7-69700f2ef4f3.jpg?1618426283"
        losses={18}
        timesTaken={4}
        wins={11}
      />
      <Typography paragraph><Link href="https://scryfall.com/card/war/169/nissa-who-shakes-the-world">Nissa, Who Shakes the World</Link> doesn’t look like much when we consider the draft stats, but the card is scary and the presence of the newer card <Link href="https://scryfall.com/card/mh2/261/yavimaya-cradle-of-growth">Yavimaya, Cradle of Growth</Link> increases her power significantly in more decks than just Mono-Green. The threat of constant 3/3 hasty vigilance creatures was a powerful tool for Brandon’s St. Lotus 7 run, and the mana doubling with <Link href="https://scryfall.com/card/mh2/261/yavimaya-cradle-of-growth">Yavimaya</Link> can’t be overlooked. I think this is a card on the rise.</Typography>
      <RankedCard
        availableDrafts={42}
        averageRound={25}
        cardName="Daretti, Scrap Savant"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/f/a/fa393eeb-bccc-453c-b783-6b0ff445c3a6.png?1625193660"
        losses={18}
        timesTaken={11}
        wins={15}
      />
      <Typography paragraph><Link href="https://scryfall.com/card/c14/33/daretti-scrap-savant">Daretti, Scrap Savant</Link> is lowered somewhat because in many ways artifact strategies are easy to hate out. But as an extra <Link href="https://scryfall.com/card/ulg/80/goblin-welder">Goblin Welder</Link> effect who can also dig for cards and fill the yard, I think <Link href="https://scryfall.com/card/c14/33/daretti-scrap-savant">Daretti</Link> is massively underutilized. Even Reanimator strategies should take a look at <Link href="https://scryfall.com/card/c14/33/daretti-scrap-savant">Daretti</Link> as they can pitch cards repeatedly with him and reuse cheap mana for a variety of artifact creatures.</Typography>
      <RankedCard
        availableDrafts={53}
        averageRound={14}
        cardName="Liliana of the Veil"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/e/6/e653437e-2e56-4443-aec5-5bb7d8860238.png?1547516945"
        losses={113}
        timesTaken={46}
        wins={89}
      />
      <Typography paragraph><Link href="https://scryfall.com/card/isd/105/liliana-of-the-veil">Liliana of the Veil</Link> is an honorable mention so close to making the top ten that she was moved on and off my top 10 at least twice. She is powerful removal and hand hate, and while she affects your hand as well, you get to plan for it in the build stage to break parity. In my experience drafting her twice, I have found her a bit slow at times, but when backed by the right amount of discard she is a force to be reckoned with.</Typography>
      <SubSectionHeader
        component="h2"
        variant="h3"
      >Walk All Over You</SubSectionHeader>
      <RankedCard
        availableDrafts={56}
        averageRound={15}
        cardName="Tezzeret the Seeker"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/3/b/3b214b6f-4734-4200-8467-92d7e3469b5d.png?1562702928"
        losses={88}
        ranking={10}
        timesTaken={45}
        wins={92}
      />
      <Typography paragraph>I moved the <Link href="https://scryfall.com/card/ala/60/tezzeret-the-seeker">OG Tezz</Link> up and down my list several times. <Link href="https://scryfall.com/card/ala/60/tezzeret-the-seeker">Tezz</Link> often finds a home as a tutor/enabler for Time Vault strategies, but I personally think Vault/Key has been overvalued in St. Lotus. Kyle in St. Lotus 7 put <Link href="https://scryfall.com/card/ala/60/tezzeret-the-seeker">Tezzeret</Link> to strong use, fetching pieces for <Link href="https://scryfall.com/card/5dn/135/lantern-of-insight">Lantern</Link> Combo, <Link href="https://scryfall.com/card/tmp/290/grindstone">Grindstone</Link> Combo, and just untapping mana rocks. Like <Link href="https://scryfall.com/card/c14/33/daretti-scrap-savant">Daretti</Link> above, <Link href="https://scryfall.com/card/ala/60/tezzeret-the-seeker">Tezz</Link> is hurt because artifact strategies are often a bit easier to hate out. So why does he stay in the top 10? One, he has great utility in a deck that is not solely based around artifacts but utilizes a few of them to great ability and two, he is a tutor and tutors are very strong.</Typography>
      <RankedCard
        availableDrafts={47}
        averageRound={11}
        cardName="Dack Fayden"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/3/f/3fcb7810-1054-4001-855c-6e17939b3d3f.png?1562864959"
        losses={80}
        ranking={9}
        timesTaken={41}
        wins={111}
      />
      <Typography paragraph>The greatest thief in the multiverse might have taken one for the team in WAR, but his power lives on in VRDs. Let’s be honest, I think most people draft <Link href="https://scryfall.com/card/ema/199/dack-fayden">Dack</Link> for the artifact stealing ability and think looting is purely upside. However, in a world of <Link href="https://scryfall.com/card/cmr/74/hullbreacher">Hullbreacher</Link> and <Link href="https://scryfall.com/card/war/61/narset-parter-of-veils">Narset, Parter of Veils</Link>, the loot is a targetable effect and can be used offensively. In St. Lotus 6 I got nailed by my own <Link href="https://scryfall.com/card/leg/91/chains-of-mephistopheles">Chains of Mephistopheles</Link> when Joe Wisdom targeted me with the + ability, and you might say it stole my will to live (I lost that game!). Though most ultimate abilities for VRD are not the main reason you draft the cards, <Link href="https://scryfall.com/card/ema/199/dack-fayden">Dack</Link>’s isn’t even worth considering. He probably should have stolen a better ability from someone else.</Typography>
      <RankedCard
        availableDrafts={56}
        averageRound={5}
        cardName="Jace, the Mind Sculptor"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/0/e/0e606072-a3aa-4300-ba90-ec92a721fa76.png?1562281841"
        losses={103}
        ranking={8}
        timesTaken={56}
        wins={129}
      />
      <Typography paragraph>Once the best walker in any format, <Link href="https://scryfall.com/card/wwk/31/jace-the-mind-sculptor">Jace, the Mind Sculptor</Link> has fallen on hard times. Some folks in the discord have even argued that he is not a top 10 walker anymore. I obviously disagree, and I will take it a step further and argue that <Link href="https://scryfall.com/card/wwk/31/jace-the-mind-sculptor">JTMS</Link> should be on the rise again. Why? Because if people start adapting to a format where dropping loyalty dice is one of the strongest thing you can do, <Link href="https://scryfall.com/card/wwk/31/jace-the-mind-sculptor">Jace</Link>’s ability to protect other planeswalkers will be super powerful. Recently, his bounce only hitting creatures has in many ways lowered his utility, but if creatures continue on the come back they have of late? His stonks go up. One of the other things that lowers <Link href="https://scryfall.com/card/wwk/31/jace-the-mind-sculptor">Jace</Link> somewhat is the fact that <Link href="https://scryfall.com/card/mmq/61/brainstorm">Brainstorming</Link> is not as good without a density of fetches to shuffle those bad cards away. The +2 fateseal is super powerful though. All together, for my buck, <Link href="https://scryfall.com/card/wwk/31/jace-the-mind-sculptor">Jace</Link> is still a top 10 walker, but it is close.</Typography>
      <RankedCard
        availableDrafts={23}
        averageRound={29}
        cardName="Dovin, Hand of Control"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/b/d/bd6ff745-919b-4688-9e9e-ab7835b3b891.png?1557577351"
        losses={22}
        ranking={7}
        timesTaken={14}
        wins={46}
      />
      <Typography paragraph>When Elaine drafted <Link href="https://scryfall.com/card/war/229/dovin-hand-of-control">Dovin</Link> in St. Lotus 2 I exclaimed “NICE PICK” super loudly and I was not lying. I think this card is an absolute beast in this format. It was Elaine’s pet card for several drafts as no one else seemed to put in respect on the Blue One’s name. In St. Lotus 6 it got overlooked (St. Lotus 6 was also the draft with the least walkers since 2), and then Brandom used it to great success in his win in St. Lotus 7. The card has two powerful effects. First and foremost is his static ability to tax artifacts, instants, and sorceries: three of the most potent VRD types. <Link href="https://scryfall.com/card/war/229/dovin-hand-of-control">Dovin</Link>’s singular minus ability is strong against the random creature decks (which seem on the rise of late) and at shutting down creatures brought in to attack walkers. So <Link href="https://scryfall.com/card/war/229/dovin-hand-of-control">Dovin</Link> is really good at two things: slowing the game down and protecting your walkers. Don’t sleep on Little Boy Blue here. Also, according to St. Lotus Finance Bro (SLFB) Jason “Truck Stop Kanye” Thurston - get the foils of this card while they are cheap.</Typography>
      <RankedCard
        availableDrafts={23}
        averageRound={24}
        cardName="Ashiok, Dream Render"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/f/2/f2df3258-c053-48a8-974f-d80899b2cd93.png?1557577343"
        losses={58}
        ranking={6}
        timesTaken={18}
        wins={33}
      />
      <Typography paragraph>I happily grabbed the powerful <Link href="https://scryfall.com/card/war/228/ashiok-dream-render">Ashiok</Link> in St. Lotus 2 and rode them to several victories. The double dose of shutting off tutors (and fetches) as well as exiling cards from your opponent’s library/graveyard is potent. The <Link href="https://scryfall.com/card/war/228/ashiok-dream-render">Dream Render</Link> is particularly effective against decks that rely on 2/3 card combos. By sending 4 cards and the graveyard, you are likely to remove one key piece quickly. Many write <Link href="https://scryfall.com/card/war/228/ashiok-dream-render">Ashiok</Link> off as a sideboard card, but horned walker from an unknown world is pretty good in the main board due to their versatility at hating a lot of strategies that are popular in VRD.</Typography>
      <RankedCard
        availableDrafts={34}
        averageRound={18}
        cardName="Jace, Telepath Unbound"
        link="https://c1.scryfall.com/file/scryfall-cards/png/back/0/2/02d6d693-f1f3-4317-bcc0-c21fa8490d38.png?1590511929"
        losses={48}
        ranking={5}
        timesTaken={28}
        wins={77}
      />
      <Typography paragraph>Is it cheating to include a flip planeswalker on my list? Hell, I don’t know! But I am making these rules and I say “walk on” my telepathic powerhouse. The early draw and discard is great for filtering, strong for reanimator, and the face of Magic: the Gathering flips quite easily in spell-based strategies that are already using cards like <Link href="https://scryfall.com/card/mid/44/consider">Consider</Link> to filter through and dig. The loyalty-based side offers up some strong defense and more importantly a <Link href="https://scryfall.com/card/isd/78/snapcaster-mage">Snapcaster</Link> like effect to buy back key pieces or card draw. Taken together, both sides make a cheap effective walker who is a repeatable source of card advantage, and that is enough to take the 5 spot with the real power laying in that 1U casting cost.</Typography>
      <RankedCard
        availableDrafts={23}
        averageRound={10}
        cardName="Teferi, Time Raveler"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/5/c/5cb76266-ae50-4bbc-8f96-d98f309b02d3.png?1613386796"
        losses={43}
        ranking={4}
        timesTaken={22}
        wins={67}
      />
      <Typography paragraph>Another WAR walker, Teferi the Time Raveler comes down a lot quicker than JTMS and has the added powerful static ability that shuts down your opponents instant speed spells. Outside of that, he gets to draw you some cards, bounce some permanents, and allow you to cast your sorceries as instant? What were they thinking? Tef3ri has some powerful two card combos himself that we’ve not seen played yet. If we mix him with cards like Possibility Storm or Knowledge Pool we can lock our opponents out of the game entirely as they can only cast spells when they can cast a sorcery. Those locks may be too slow, but a strong control deck might be able to pull them off. Those types of silly fantasies aside, Teferi, Time Raveler is a powerful shutdown card that defends your own strategies and makes your opponent’s life miserable.</Typography>
      <RankedCard
        availableDrafts={19}
        averageRound={6}
        cardName="Oko, Thief of Crowns"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/3/4/3462a3d0-5552-49fa-9eb7-100960c55891.png?1613387000"
        losses={40}
        ranking={3}
        timesTaken={19}
        wins={49}
      />
      <Typography paragraph>Yep. Even in VRD, Oko is Broko. The ability to shut down opponents artifacts and creatures repeatedly with a high loyalty is already worth its weight in gold, but since his release, we’ve also seen the shape shifting li’l minx go aggressive by turning unused artifacts such as Pentad Prism into attackers. Oko’s ultimate is one of the few that is relevant due to the ease of pulling it off. Switching out a food token for a creature is powerful, even if we cap the creature at 3 power, there are a ton of useful creatures out there to trick onto your side of the battlefield. Oko and Teferi are neck and neck at the 3-4 spot. In a different mood I could switch them easily, but for me Oko takes the edge. It also helps that Oko is in green which means it is easier to get him on turn 2.</Typography>
      <RankedCard
        availableDrafts={23}
        averageRound={5}
        cardName="Narset, Parter of Veils"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/8/c/8c39f9b4-02b9-4d44-b8d6-4fd02ebbb0c5.png?1574294103"
        losses={41}
        ranking={2}
        timesTaken={23}
        wins={74}
      />
      <Typography paragraph>Taken 23 for 23 since her debut, I grabbed Narset with pick 16 in the 2nd round. My original strategy for Narset involved tutoring up Teferi’s Puzzle Box and locking people out of the game. Now when mixed with <Link href="https://scryfall.com/card/cmr/74/hullbreacher">Hullbreacher</Link> and Leovold, Emissary of Trest, these types of wheel-based strategies are popular. Even without the combo shenanigans though, the Veil Parter still shines. Digging deeper into your deck while shutting down extra card draw is a powerful combination and there is little doubt she is one of the most powerful VRD cards.</Typography>
      <RankedCard
        availableDrafts={23}
        averageRound={6}
        cardName="Karn, the Great Creator"
        link="https://c1.scryfall.com/file/scryfall-cards/png/front/3/e/3ec0c0fb-1a4f-45f4-85b7-346a6d3ce2c5.png?1566819742"
        losses={41}
        ranking={1}
        timesTaken={23}
        wins={79}
      />
      <Typography paragraph>While Narset has gone higher generally (not by much), I think that is because of VRD players’ love for blue. For my money, the best walker in the format is <Link href="https://scryfall.com/card/war/1/karn-the-great-creator">Karn, the Great Creator</Link>. I think the strongest thing about Creator Karn is that he makes you draft better. What do I mean by that? Well, it is easy in VRD to draft too many main deck cards and not think about sideboards enough. Unless you are a super disciplined drafter like our own Elaine Cao, it is an easy trap to fall into. Karn makes you focus on sideboard cards for your powerful Karn board and gives you access to them.</Typography>
      <Typography paragraph>Beyond his Karn-smorgasbord shenanigans, he is a built in one sided Null Rod. Having drafted him 2 of my 3 drafts and watched him in 2 others, I have seen many a game where shutting down mana rocks and artifact lands is enough to get there. Beyond those moments his utility is underestimated. He can animate equipment to make it fall off creatures (sorry germ, the Kaldra is gone) and while they get a 7/7 for the turn, that is easily chump blocked. He can turn your own artifacts into blockers or attackers. He kills artifact lands and moxen (they can’t use them while he is out, but it is relevant if they kill him). </Typography>
      <Typography paragraph>The big target for the Karn-board is of course Mycosynth Lattice. I have won so many games with this combo I am surprised that more people are not hate drafting the lattice yet. I am normally of the mindset that hate-drafting is bad… but with Lattice/Karn? I might waver on that. Other relevant targets are graveyard hate, Cursed Totem, Defense Grid, and Ensnaring Bridge. Don’t forget, if they exile your artifacts with an exile effect, Karn can also get those back! Mix all that with the fact he is colorless and can go with any deck? <Link href="https://scryfall.com/card/war/1/karn-the-great-creator">Karn, the Great Creator</Link> is a good reason to pick Sol Ring or Mana Crypt round 1, as you can increase the chance of a second turn cast.</Typography>
      <SubSectionHeader
        component="h2"
        variant="h3"
      >{'Walk a Thin Line'}</SubSectionHeader>
      <Typography paragraph>Some might argue (and they might be right) that I overvalue walkers in the format and overestimate their power… but I don’t think I do. As of now, I think walkers are seeing their place in the sun in VRD, the question is how do people adapt to address them (*cough* <Link href="https://scryfall.com/card/stx/188/fracture">Fracture</Link>)? In my next article I will give some thoughts on just that question. The <Link href="https://scryfall.com/card/stx/188/fracture">Fracture</Link> is free for now.</Typography>
      <Typography paragraph>Author</Typography>
      <Typography paragraph>Stephen Hagan is a longtime L2 Judge, Member of the St. Lotus VRD Steering Committee, and an experienced Commander player. He has played Magic off and on since Revised. His favorite cards are Reveillark, Trading Post, Living Death, Mystic Snake, and Plow Under. In his normal life he is a sociology professor and father of two awesome kids.</Typography>
    </Container>
  );
}
