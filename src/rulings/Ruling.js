import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Ruling({number, header, children, updated}) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography sx={{fontWeight: '800'}}
          variant="h6"
        >{`${number}:`}</Typography>
        <Typography sx={{
          marginTop: 'auto',
          marginBottom: 'auto',
          marginLeft: 1,
        }}
        >{header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
        <Typography sx={{float: 'right'}}
          variant="subtitle2"
        >
          {`Updated ${updated}`}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

Ruling.propTypes = {
  number: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  updated: PropTypes.string.isRequired,
};
