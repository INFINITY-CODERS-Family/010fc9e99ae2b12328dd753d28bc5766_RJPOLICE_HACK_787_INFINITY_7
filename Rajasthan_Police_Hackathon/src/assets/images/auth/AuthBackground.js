// material-ui
import { Box } from '@mui/material';
import { Avatar } from '../../../../node_modules/@mui/material/index';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Avatar src={`${process.env.PUBLIC_URL}/INDIAN_emblem.png`} variant={'rounded'} sx={{ width: 500, height: 650,opacity: 0.2 }} />
      <Avatar src={`${process.env.PUBLIC_URL}/RAJASTHAN_POLICE_LOGO.png`} sx={{ width: 500, height: 500,opacity: 0.2 }} />
    </Box>
  );
};

export default AuthBackground;
