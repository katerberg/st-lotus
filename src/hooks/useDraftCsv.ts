import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import { parse } from 'csv-parse/sync';
import { csvToPicks } from '@/common/textHelpers';

const useDraftCsv = (draftUrl: string) => {
  const [loading, setLoading] = useState(false);
  const [picks, setPicks] = useState<string[]>([]);

  const fetchData = useCallback(async () => {
    try {
      if (!draftUrl) {
        setPicks([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const {data} = await axios.get(draftUrl);
      const records = parse(data, {
        columns: true,
        skip_empty_lines: true
      }) as {[key: string]: string}[]; 
      setPicks(csvToPicks(records));
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setPicks([]);
    }
  }, [draftUrl]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      fetchData();
    }, 5000)
    return () => clearInterval(intervalId);
  }, [fetchData, draftUrl]);

  return {loading, picks};
};

export default useDraftCsv;
