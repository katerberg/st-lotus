/* eslint-disable no-console */
import Link from '@mui/material/Link';
import {config} from '../common/config';
import axios from 'axios';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/system';
import useUpdateEffect from '../common/UseUpdateEffect';
import {Typography} from '@mui/material';

const CardImage = styled('img')({
  maxWidth: '400px',
  textAlign: 'center',
  marginTop: '20px',
});

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
  const [, setStats] = useState({average: 1.3833,
    averageRound: 1,
    card: 'black lotus',
    numberOfDrafts: 60,
    numberTaken: 60});
  const [suggestion, setSuggestion] = useState(null);
  const [cardImage, setCardImage] = useState('https://c1.scryfall.com/file/scryfall-cards/png/front/b/3/b3a69a1c-c80f-4413-a6fd-ae54cabbce28.png?1559591595');

  useUpdateEffect(async() => {
    try {
      const {data} = await axios.get(`${config.API_CARD_URL}${encodeURIComponent(searchText)}`);
      console.log(data);
      setSuggestion(null);
      axios.get(`https://api.scryfall.com/cards/named?fuzzy=${searchText}`).then(({data}) => {
        let image = 'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/5865603c-0a5e-45c3-84e3-2dc3b4cf0cf7.jpg?1562915786';
        if (data?.image_uris) {
          image = data?.image_uris?.png;
        } else if (data?.card_faces) {
          image = data?.card_faces[0]?.image_uris?.png;
        }

        setCardImage(image);
      });
      setStats(data);
    } catch (e) {
      const errorMessage = e?.response?.data?.message;
      if (errorMessage) {
        setSuggestion(errorMessage);
        console.clear();
      } else {
        setSuggestion(null);
      }
      setStats(null);
    }
  }, [searchText]);

  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const handleAcceptSuggestion = () => {
    setSearchText(suggestion);
  };

  return (
    <Box sx={{
      backgroundColor: 'grey.800',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '-6px',
      alignItems: 'center',
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
        label="Search"
        onChange={handleSearchTextChange}
        value={searchText}
        variant="standard"
      />
      {suggestion && <Typography color="white"
        sx={{marginTop: '20px'}}
        variant="subtitle1"
                     >{'Hmmm, can’t find that. Did you mean '}<Link color="primary"
                       onClick={handleAcceptSuggestion}
                       sx={{cursor: 'pointer'}}
                                                              >{`“${suggestion}”`}</Link>{'?'}</Typography>}
      <CardImage alt="Card Image"
        src={cardImage}
      />
    </Box>
  );
}
