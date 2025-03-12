'use client'

import React, {useState} from 'react';
import Container from '@mui/material/Container';
import SpacedHeader from '@/common/SpacedHeader';
import DraftEntry from '@/common/DraftEntry';

const LOCAL_STORAGE_KEY = 'draft-analyzer-draft';

export default function DraftAnalyzer() {
  const [draftCsv, setDraftCsv] = useState('');

  return (
    <Container maxWidth="lg">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >Draft Analyzer</SpacedHeader>
      <DraftEntry localStorageKey={LOCAL_STORAGE_KEY} onDraftCsvChange={setDraftCsv} />
        {draftCsv}
    </Container>
  );
}
