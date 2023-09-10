import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {config} from '../common/config';

const useTopCardStats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const getTopCards = useCallback(
    () =>
      axios.get(
        config.API_TOP_CARDS_URL,
      ),
    [],
  );
  // const getCardStats = useMemo(() => AwesomeDebouncePromise(topCards, 300), [topCards]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const {data} = await getTopCards();
        setStats(data);
        //   if (!data.numberTaken) {
        //     setStats(data);
        //     setSuggestion({knownCard: true, suggestion: data.suggestion});
        //     setSuggestions(data.suggestions);
        //   } else {
        //     setStats(data);
        //     setSuggestion(null);
        //     setSuggestions([]);
        //   }
        //   axios
        //     .get(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(searchText)}`)
        //     .then(({data}) => {
        //       setCardBackFaceImage(null);
        //       let image =
        //         'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/5865603c-0a5e-45c3-84e3-2dc3b4cf0cf7.jpg?1562915786';
        //       if (data?.image_uris) {
        //         image = data?.image_uris?.normal;
        //       } else if (data?.card_faces) {
        //         image = data?.card_faces[0]?.image_uris?.normal;
        //         if (data?.card_faces.length > 1) {
        //           setCardBackFaceImage(data?.card_faces[1]?.image_uris?.normal);
        //         }
        //       }

      //       setCardImage(image);
      //       setLoadingStats(false);
      //     });
      } catch (e) {
        setStats([]);
        setLoading(false);
      }
    })();
  }, [getTopCards]);

  return {stats, loading};
};

export default useTopCardStats;
