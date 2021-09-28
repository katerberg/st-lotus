
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';

const SpacedHeader = styled(Typography)(({theme}) => ({
  marginBottom: theme.spacing(2),
}));

export default SpacedHeader;
