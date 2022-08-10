import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {styled} from '@mui/system';
import useCardStats from '../hooks/useCardStats';
import useCardPairings from '../hooks/useCardPairings';
import CardStats from '../home/card-search/CardStats';
import CardImage from '../common/CardImage';
import Synergy from './Synergy';
import {Hidden} from '@mui/material';

const SearchTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white !important',
  },
  '& input': {
    color: 'white',
  },
});

export default function Details() {
  const {encodedCard} = useParams();
  const card = decodeURIComponent(encodedCard);
  const [searchText, setSearchText] = useState(card);
  useEffect(() => setSearchText(card), [card]);
  const {stats, loadingStats, cardImage, cardBackFaceImage, suggestion} = useCardStats(searchText);
  const {synergies} = useCardPairings(searchText);

  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const handleSearchKeyPress = useCallback(e => {
    if (e.keyCode === 13 && suggestion) {
      setSearchText(suggestion.suggestion);
    }
  }, [suggestion]);

  const handleAcceptSuggestion = () => {
    setSearchText(suggestion.suggestion);
  };

  return (
    <Grid
      alignItems="center"
      container
      flexDirection="column"
      sx={{
        backgroundColor: 'grey.800',
        width: '100%',
        marginTop: '-6px',
        paddingTop: 2,
        minHeight: 'calc(100vh - 52px)',
        paddingBottom: 2,
      }}
    >
      <SearchTextField
        InputProps={{
          startAdornment: <InputAdornment position="start"
            sx={{color: 'white'}}
                          >
            <SearchIcon />
          </InputAdornment>,
        }}
        label="Search"

        onChange={handleSearchTextChange}
        onFocus={event => {
        event.target.select();
      }}
        onKeyDown={handleSearchKeyPress}
        sx={{margin: '20px'}}
        value={searchText}
        variant="standard"
      />
      {suggestion && <Typography color="white"
        sx={{margin: '20px 20px 0', minHeight: {xs: '92px', sm: '144px', md: 0}}}
        variant="subtitle1"
                     >
                       {suggestion.knownCard ? `That hasn’t been played in the ${stats?.numberOfDrafts} drafts it’s been available. How about ` : 'Hmmm, can’t find that. Did you mean '}
                     <Link color="primary"
                       onClick={handleAcceptSuggestion}
                       sx={{cursor: 'pointer'}}
                     >{`“${suggestion.suggestion}”`}</Link>
                     {'?'}
                     </Typography>}
      <Grid container
        flexDirection="row"
        sx={{marginTop: '20px'}}
      >
        <Hidden mdUp>
          <Grid
            item
            xs={12}
          >
              {!!stats?.numberTaken && <CardStats averageRound={stats?.averageRound}
                loading={loadingStats}
                lotusScore={stats?.lotusScore}
                numberOfDrafts={stats?.numberOfDrafts}
                numberTaken={stats?.numberTaken}
                                       />}
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item
            lg={4}
          />
        </Hidden>
        <Grid container
          item
          justifyContent="center"
          lg={4}
          md={8}
          xs={12}
        >
          <CardImage
            cardBackFaceImage={cardBackFaceImage}
            cardImage={cardImage}
            loading={loadingStats}
          />
        </Grid>
        <Hidden mdDown>
          <Grid
            item
            md={4}
          >
              {!!stats?.numberTaken && <CardStats averageRound={stats?.averageRound}
                loading={loadingStats}
                lotusScore={stats?.lotusScore}
                numberOfDrafts={stats?.numberOfDrafts}
                numberTaken={stats?.numberTaken}
                                       />}
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        alignItems="center"
        container
        flexDirection="row"
        justifyContent="center"
        wrap="wrap"
      >
            {synergies.slice(0, 6).map(p => <Synergy card={p.card}
              key={p.card}
                                            />)}
      </Grid>
    </Grid>
  );
}
