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

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const {data} = await getTopCards();
        setStats(data);
      } catch (e) {
        setStats([]);
        setLoading(false);
      }
    })();
  }, [getTopCards]);

  return {stats, loading};
};

export default useTopCardStats;
