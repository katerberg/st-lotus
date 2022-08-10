import Link from '@mui/material/Link';
import React, {useCallback, useState} from 'react';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/system';
import CardStats from './CardStats';
import {Hidden, Typography} from '@mui/material';
import CardImage from '../../common/CardImage';
import useCardStats from '../../hooks/useCardStats';
import DetailsButton from '../../details/DetailsButton';

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

export default function CardSearch() {
  const [searchText, setSearchText] = useState('Black Lotus');
  const {stats, loadingStats, cardImage, cardBackFaceImage, suggestion} = useCardStats(searchText);

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
        id="search"
        label="Search"
        onChange={handleSearchTextChange}
        onFocus={event => {
        event.target.select();
      }}
        onKeyDown={handleSearchKeyPress}
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
          <Hidden mdUp>
            <DetailsButton card={searchText} />
          </Hidden>
        </Grid>
        <Hidden mdDown>
          <Grid
            item
            md={4}
          >
              {!!stats?.numberTaken && <><CardStats averageRound={stats?.averageRound}
                loading={loadingStats}
                lotusScore={stats?.lotusScore}
                numberOfDrafts={stats?.numberOfDrafts}
                numberTaken={stats?.numberTaken}
                                         />
                <DetailsButton card={searchText} />
              </>}
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
}
