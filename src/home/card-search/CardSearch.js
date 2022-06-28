/* eslint-disable no-console */
import Link from '@mui/material/Link';
import {config} from '../../common/config';
import axios from 'axios';
import React, {useMemo, useCallback, useState} from 'react';
import CardImage from './CardImage';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/system';
import useUpdateEffect from '../../common/UseUpdateEffect';
import CardStats from './CardStats';
import {Hidden, Typography} from '@mui/material';

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
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingStats, setLoadingStats] = useState(false);
  const [stats, setStats] = useState({average: 1.3906,
    averageRound: 1,
    card: 'black lotus',
    lotusScore: 99.6,
    numberOfDrafts: 69,
    numberTaken: 69});
  const [suggestion, setSuggestion] = useState(null);
  const [cardImage, setCardImage] = useState('https://c1.scryfall.com/file/scryfall-cards/normal/front/b/3/b3a69a1c-c80f-4413-a6fd-ae54cabbce28.jpg?1559591595');
  const [cardBackFaceImage, setCardBackFaceImage] = useState(null);

  const cardStats = useCallback((text) => axios.get(`${config.API_CARD_URL}${encodeURIComponent(text)}`), []);
  const getCardStats = useMemo(() => AwesomeDebouncePromise(cardStats, 300), [cardStats]);

  useUpdateEffect(() => {
    const populateCardStats = async() => {
      try {
        const {data} = await getCardStats(searchText.trim());
        setLoadingStats(true);
        if (!data.numberTaken) {
          setStats(data);
          setSuggestion({knownCard: true, suggestion: data.suggestion});
        } else {
          setStats(data);
          setSuggestion(null);
        }
        setLoadingStats(false);
        setLoadingImage(true);
        axios.get(`https://api.scryfall.com/cards/named?fuzzy=${searchText}`).then(({data}) => {
          setCardBackFaceImage(null);
          let image = 'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/5865603c-0a5e-45c3-84e3-2dc3b4cf0cf7.jpg?1562915786';
          if (data?.image_uris) {
            image = data?.image_uris?.normal;
          } else if (data?.card_faces) {
            image = data?.card_faces[0]?.image_uris?.normal;
            if (data?.card_faces.length > 1) {
              setCardBackFaceImage(data?.card_faces[1]?.image_uris?.normal);
            }
          }

          if (cardImage === image) {
            setLoadingImage(false);
          }
          setCardImage(image);
        });
      } catch (e) {
        const response = e?.response;
        const errorMessage = response?.data?.message;
        if (response?.status === 404) {
        // Clearing the errors for expected 404s
        // eslint-disable-next-line no-console
          console.clear();
        }
        if (errorMessage) {
          setSuggestion({knownCard: false, suggestion: errorMessage});
        } else {
          setSuggestion(null);
        }
        setStats(null);
        setLoadingStats(false);
      }
    };
    populateCardStats();
  }, [searchText]);

  const handleImageLoad = () => {
    setLoadingImage(false);
  };

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
            loadingImage={loadingImage}
            onImageLoad={handleImageLoad}
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
    </Grid>
  );
}
