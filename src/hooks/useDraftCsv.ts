import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import { parse } from 'csv-parse/sync';

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
      const picks = records.filter(r=> r && r[''] && r[''].match(/\d+/)).reduce((accumulator: string[], currentRow) => [...accumulator, ...Object.entries(currentRow).map(([drafter, card]) => (!drafter || !card) ? '' : card.toLowerCase()).filter(c=>c)], [])
      setPicks(picks);
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
