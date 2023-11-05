
import Link from '@mui/material/Link';
import React from 'react';
import Typography from '@mui/material/Typography';

export default function Suggestion({searchText, suggestion, stats, onAcceptSuggestion}) {

  const questionText = suggestion?.knownCard ? `That hasn’t been played in the ${stats?.numberAvailable} drafts it’s been available. How about ` :
    'Hmmm, can’t find that. Did you mean ';

  return suggestion && (
        <Typography
          color="white"
          sx={{margin: '20px 20px 0', minHeight: {xs: '92px', sm: '144px', md: 0}}}
          variant="subtitle1"
        >
          {searchText === suggestion.suggestion && 'This card hasn’t been played in recent drafts.'}
          {(searchText !== suggestion.suggestion) && <>
          {questionText}
          <Link
            color="primary"
            onClick={onAcceptSuggestion}
            sx={{cursor: 'pointer'}}
          >{`“${suggestion.suggestion}”`}</Link>
          {'?'}</>}
        </Typography>
  );
}
