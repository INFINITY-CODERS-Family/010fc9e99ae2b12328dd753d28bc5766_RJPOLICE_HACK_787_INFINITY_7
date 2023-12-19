import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const Chip = ({ title, color }) => {
  const theme = useTheme();
  let main;
  let text;
  switch (color) {
    case 'secondary':
      main = theme.palette.secondary.main;
      break;
    case 'error':
      main = theme.palette.error.main;
      text = theme.palette.error.contrastText;
      break;
    case 'warning':
      main = theme.palette.warning.main;
      text = theme.palette.error.contrastText;
      break;
    case 'info':
      main = theme.palette.info.main;
      text = theme.palette.error.contrastText;
      break;
    case 'success':
      main = theme.palette.success.main;
      text = theme.palette.error.contrastText;
      break;
    case 'primary':
    default:
      main = theme.palette.primary.main;
      text = theme.palette.error.contrastText;
  }

  return (
    <Box
      sx={{
        bgcolor: main,
        borderRadius: '5px',
        px: 2,
        py: 0.5,
        display: 'flex',
        color: text,
        width: '80px',
        height: '32px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {title}
    </Box>
  );
};

Chip.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
};

export default Chip;
