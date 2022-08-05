import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import React, {useCallback, useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useHistory, useParams} from 'react-router-dom';
import CardSearch from '../home/card-search/CardSearch';
import TextField from '@mui/material/TextField';
import useCardStats from '../hooks/useCardStats';

export default function Details() {
  const history = useHistory();
  const {card} = useParams();
  const [searchText, setSearchText] = useState(card);
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
  //eslint-disable-next-line
  console.log(stats, suggestion, cardImage, cardBackFaceImage, loadingStats)
  const handleDetailsPress = useCallback(() => history.push(`/details/${card}`), [history, card]);

  return (
    <>
    <CardSearch startingSearchText={card} />
      <TextField
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
          <Box>
            <Button
              color="secondary"
              onClick={handleDetailsPress}
              size="large"
            >{'See Details'}</Button>
          </Box>
    </>
  );
}
