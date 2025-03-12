import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmarkCircle} from '@fortawesome/free-regular-svg-icons';
import { Alert, IconButton, InputAdornment, TextField} from '@mui/material';
import {docsLinkToCsv, draftLinkRegex} from '@/common/textHelpers';

export default function DraftEntry({onDraftCsvChange=() => void 0, onDraftChange = () => void 0, localStorageKey = 'draft-entry-draft'}) {
  const [followingDraft, setFollowingDraft] = useState('');
  const handleDraftChange = useCallback(e => {
    onDraftChange(e.target.value);
    setFollowingDraft(e.target.value);
    onDraftCsvChange(docsLinkToCsv(e.target.value));
    window.localStorage.setItem(localStorageKey, e.target.value);
  }, [onDraftChange, onDraftCsvChange, localStorageKey]);
  const handleClickClearForm = useCallback(() => handleDraftChange({target: {value: ''}}), [handleDraftChange]);
  useEffect(() => {
const localStorageValue = window.localStorage.getItem(localStorageKey) || ''
    setFollowingDraft(localStorageValue)
    onDraftChange(localStorageValue);
    onDraftCsvChange(docsLinkToCsv(localStorageValue));
  }, [localStorageKey, onDraftCsvChange,onDraftChange]);

  return (
    <>
       <TextField 
          sx={{mb: 2}}
          fullWidth
          label="Draft link to follow" 
          variant="standard" 
          helperText="Example: https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=1008615612"
          value={followingDraft}
          onChange={handleDraftChange}
          InputProps={{
              endAdornment: followingDraft && <InputAdornment position="end">
              <IconButton
                aria-label={
                  'clear draft input'
                }
                onClick={handleClickClearForm}
              >
                <FontAwesomeIcon
                  icon={faXmarkCircle}
                />
              </IconButton>
            </InputAdornment>,
          }}
        />
        {followingDraft && !draftLinkRegex.test(followingDraft) && <Alert severity="error">Invalid draft URL</Alert>}
    </>
  );
}

DraftEntry.propTypes = {
  onDraftCsvChange: PropTypes.func,
  onDraftChange: PropTypes.func,
  localStorageKey: PropTypes.string,
};
