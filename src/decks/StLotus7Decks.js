import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SpacedHeader from '../common/SpacedHeader';
import Deck from './Deck';
import decklists from './processedDecklists.json';

export default function StLotus7Decks() {
  return (
    <Container maxWidth="md">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'St Lotus 7'}</SpacedHeader>
      <Typography paragraph>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisl aliquam, luctus metus quis, lobortis risus. Praesent maximus tincidunt dolor, non sodales lectus. Etiam eget erat vitae enim pellentesque imperdiet. Aliquam scelerisque tristique velit, vitae gravida nisl imperdiet eget. Nam congue, ipsum quis rhoncus pretium, lacus lorem tincidunt sem, eget tincidunt est magna a lectus. Morbi euismod risus a est pellentesque euismod. Mauris vel sapien vitae ante aliquet condimentum. Phasellus sodales tellus vel nisl egestas, et vulputate tortor dapibus. Nullam a lectus mattis, venenatis orci quis, dignissim eros. Nullam at lectus id lorem eleifend suscipit. Phasellus mattis diam ut fringilla aliquet. Duis iaculis, dui nec ornare varius, erat mi suscipit nisi, non laoreet augue odio tristique orci. Aenean cursus metus quis diam pulvinar, ut sagittis tortor pellentesque.'}</Typography>
      {decklists.map((deck, i) => <Deck deck={deck}
        key={i}
                                  />)}
    </Container>
  );
}
