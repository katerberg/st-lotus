import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '@/common/config';

const useDraftAnalysis = (draftUrl: string) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const getDraftAnalysis = useCallback(
    () => axios.get(`${config.API_DRAFT_STATS_URL}`.replace('{DRAFT_URL}', encodeURIComponent(draftUrl))),
    [draftUrl],
  );

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await getDraftAnalysis();
        setStats(data);
      } catch (e) {
        setStats([]);
        setLoading(false);
      }
    })();
  }, [getDraftAnalysis]);

  return { stats, loading };
};

export default useDraftAnalysis;
