/* eslint-disable operator-linebreak */
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {styled} from '@mui/system';
import useCardStats from '../hooks/useCardStats';
import CardStats from '../home/card-search/CardStats';
import CardImage from '../common/CardImage';
import {Checkbox, FormControlLabel, FormGroup, Hidden} from '@mui/material';
import Synergies from './Synergies';
import Suggestion from './Suggestion';

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
  const [isPremier, setIsPremier] = useState(true);
  const [searchText, setSearchText] = useState(card);
  useEffect(() => setSearchText(card), [card]);
  const {stats, loadingStats, cardImage, cardBackFaceImage, suggestion} = useCardStats(
    searchText,
    !isPremier,
  );

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchKeyPress = useCallback(
    (e) => {
      if (e.keyCode === 13 && suggestion) {
        setSearchText(suggestion.suggestion);
      }
    },
    [suggestion],
  );

  const handleAcceptSuggestion = () => {
    setSearchText(suggestion.suggestion);
  };

  const handlePremierToggle = () => {
    setIsPremier(!isPremier);
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
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={!isPremier} color="secondary" onClick={handlePremierToggle} />
          }
          label={<Typography color="white">{'Include very old drafts'}</Typography>}
        />
      </FormGroup>
      <SearchTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{color: 'white'}}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        id="search"
        label="Search"
        onChange={handleSearchTextChange}
        onFocus={(event) => {
          event.target.select();
        }}
        onKeyDown={handleSearchKeyPress}
        sx={{margin: '20px'}}
        value={searchText}
        variant="standard"
      />
      <Suggestion onAcceptSuggestion={handleAcceptSuggestion} stats={stats} suggestion={suggestion} />
      <Grid container flexDirection="row" sx={{marginTop: '20px'}}>
        <Hidden mdUp>
          <Grid item xs={12}>
            {!!stats?.numberTaken && (
              <CardStats
                averageRound={stats?.averageRound}
                drafts={stats?.drafts}
                loading={loadingStats}
                lotusScore={stats?.lotusScore}
                numberOfDrafts={stats?.numberAvailable}
                numberTaken={stats?.numberTaken}
              />
            )}
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item lg={4} />
        </Hidden>
        <Grid container item justifyContent="center" lg={4} md={8} xs={12}>
          <CardImage
            cardBackFaceImage={cardBackFaceImage}
            cardImage={cardImage}
            loading={loadingStats}
          />
        </Grid>
        <Hidden mdDown>
          <Grid item md={4}>
            {!!stats?.numberTaken && (
              <CardStats
                averageRound={stats?.averageRound}
                drafts={stats?.drafts}
                loading={loadingStats}
                lotusScore={stats?.lotusScore}
                numberOfDrafts={stats?.numberAvailable}
                numberTaken={stats?.numberTaken}
              />
            )}
          </Grid>
        </Hidden>
      </Grid>
      <Synergies card={searchText} />
    </Grid>
  );
}
