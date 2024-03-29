import AwesomeDebouncePromise from 'awesome-debounce-promise';
import {useCallback, useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import {config} from '@/common/config';

const useCardStats = (searchText, includeOldDrafts = false) => {
  const [stats, setStats] = useState({
    drafts: [],
    average: 1.3906,
    averageRound: 1,
    card: 'black lotus',
    lotusScore: 99.6,
    numberAvailable: 69,
    numberTaken: 69,
  });
  const [loadingStats, setLoadingStats] = useState(false);
  const [cardImage, setCardImage] = useState(
    'https://c1.scryfall.com/file/scryfall-cards/normal/front/b/3/b3a69a1c-c80f-4413-a6fd-ae54cabbce28.jpg?1559591595',
  );
  const [suggestions, setSuggestions] = useState([]);
  const [suggestion, setSuggestion] = useState(null);
  const [cardBackFaceImage, setCardBackFaceImage] = useState(null);
  const cardStats = useCallback(
    (text) =>
      axios.get(
        `${config.API_CARD_URL}${encodeURIComponent(text)}${includeOldDrafts ? '' : '?premier'}`,
      ),
    [includeOldDrafts],
  );
  const getCardStats = useMemo(() => AwesomeDebouncePromise(cardStats, 300), [cardStats]);

  useEffect(() => {
    (async () => {
      try {
        setLoadingStats(true);
        const {data} = await getCardStats(searchText.trim());
        if (!data.numberTaken) {
          setStats(data);
          setSuggestion({knownCard: true, suggestion: data.suggestion});
          setSuggestions(data.suggestions);
        } else {
          setStats(data);
          setSuggestion(null);
          setSuggestions([]);
        }
        axios
          .get(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(searchText)}`)
          .then(({data}) => {
            setCardBackFaceImage(null);
            let image =
              'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/5865603c-0a5e-45c3-84e3-2dc3b4cf0cf7.jpg?1562915786';
            if (data?.image_uris) {
              image = data?.image_uris?.normal;
            } else if (data?.card_faces) {
              image = data?.card_faces[0]?.image_uris?.normal;
              if (data?.card_faces.length > 1) {
                setCardBackFaceImage(data?.card_faces[1]?.image_uris?.normal);
              }
            }

            setCardImage(image);
            setLoadingStats(false);
          });
      } catch (e) {
        const response = e?.response;
        const errorMessage = response?.data?.message;
        if (errorMessage) {
          setSuggestion({knownCard: false, suggestion: errorMessage});
          setSuggestions(response?.data?.suggestions || []);
        } else {
          setSuggestion(null);
          setSuggestions([]);
        }
        setStats(null);
        setLoadingStats(false);
      }
    })();
  }, [searchText, getCardStats]);

  return {stats, loadingStats, cardImage, cardBackFaceImage, suggestion, suggestions};
};

export default useCardStats;
