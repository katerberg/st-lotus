import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import React, {useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Suggestion from './Suggestion';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {styled} from '@mui/system';
import useCardStats from '../hooks/useCardStats';
import CardStats from '../home/card-search/CardStats';
import CardImage from '../common/CardImage';
import {Checkbox, FormControlLabel, FormGroup, Hidden} from '@mui/material';
import Synergies from './Synergies';
import RecentDrafts from './RecentDrafts';

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
  const history = useHistory();
  useEffect(() => setSearchText(card), [card]);
  const {stats, loadingStats, cardImage, cardBackFaceImage, suggestions} = useCardStats(
    searchText,
    !isPremier,
  );

  const handleSearchTextChange = useCallback((e) => {
    if (e.target.value) {
      history.replace(`/details/${e.target.value}`);
    }
    setSearchText(e.target.value);
  }, [history, setSearchText]);

  const handleAutoCompleteChange = useCallback((event, value) => {
    handleSearchTextChange({target: {value}});
  }, [handleSearchTextChange]);

  const handleAcceptSuggestion = useCallback(() => {
    handleSearchTextChange({target: {value: suggestions[0]}});
  }, [handleSearchTextChange, suggestions]);

  const handlePremierToggle = () => {
    setIsPremier(!isPremier);
  };

  return (
    <Grid
      alignItems="center"
      container
      flexDirection="column"
      item
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
      <Autocomplete
        autoHighlight
        disableClearable
        forcePopupIcon={false}
        freeSolo
        onChange={handleAutoCompleteChange}
        openOnFocus
        options={suggestions || []}
        renderInput={(params) => <SearchTextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end" sx={{color: 'white'}}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          label="Search"
          onChange={handleSearchTextChange}
          sx={{margin: '20px'}}
          variant="standard"
                                 />}
        selectOnFocus
        sx={{
          width: 300,
        }}
        value={searchText}
      />
      {suggestions.length > 0 && !loadingStats && <Suggestion onAcceptSuggestion={handleAcceptSuggestion} searchText={searchText} stats={stats} suggestion={{knownCard: stats?.numberAvailable, suggestion: suggestions[0]}} />}
      <Grid container flexDirection="row" item sx={{marginTop: '20px'}}>
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
          <Grid item md={4}>
            <Typography align="right" color="white" variant="h3">Recent Drafts</Typography>
            <RecentDrafts drafts={stats?.drafts} />
          </Grid>
        </Hidden>
        <Grid container item justifyContent="center" md={4} xs={12}>
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
        <Hidden mdUp>
          <Grid container item justifyContent="center" xs={12}>
            <Typography color="white" sx={{marginTop: 2}} textAlign="center" variant="h3">Recent Drafts</Typography>
            <RecentDrafts drafts={stats?.drafts} />
          </Grid>
        </Hidden>
      </Grid>
      <Synergies card={searchText} />
    </Grid>
  );
}
