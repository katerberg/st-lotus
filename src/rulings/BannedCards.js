import React from 'react';
import Grid from '@mui/material/Grid';
import BannedCard from './BannedCard';
import {styled} from '@mui/system';


const StyledList = styled('ul')({
  marginTop: 0,
  marginBottom: 0,
});

export default function BannedCards() {
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

  return <Grid container>
    <Grid item
      md={4}
      xs={12}
    >
      <StyledList>
        {bannedCards.slice(0, Math.floor(bannedCards.length / 3))
        .map(card => <BannedCard
          key={card.name}
          link={card.link}
          name={card.name}
                     />)
        }
      </StyledList>
    </Grid>
    <Grid item
      md={4}
      xs={12}
    >
      <StyledList>
        {bannedCards.slice(Math.floor(bannedCards.length / 3), Math.floor(2 * bannedCards.length / 3))
        .map(card => <BannedCard
          key={card.name}
          link={card.link}
          name={card.name}
                     />)
        }
      </StyledList>
    </Grid>
    <Grid item
      md={4}
      xs={12}
    >
      <StyledList>
        {bannedCards.slice(Math.floor(2 * bannedCards.length / 3), bannedCards.length)
        .map(card => <BannedCard
          key={card.name}
          link={card.link}
          name={card.name}
                     />)
        }
      </StyledList>
    </Grid>
  </Grid>;
}
