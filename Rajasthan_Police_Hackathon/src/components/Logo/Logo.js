

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

import { Avatar } from "../../../node_modules/@mui/material/index";

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const logoUrl = `${process.env.PUBLIC_URL}/RAJASTHAN_POLICE_LOGO.png`; // add your image extension
  const logo = `${process.env.PUBLIC_URL}/INDIAN_emblem.png`; // add your image extension
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      {/* <Avatar src={logo} variant={'square'} sx={{ width: 54, height: 59 }} /> */}
      <img src={logo} alt="INDIA" style={{ width: '40px', height: '40px' }} />
      <Avatar src={logoUrl} sx={{ width: 40, height: 40 }} />
      <p
        style={{
          marginLeft: '10px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#000',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        Rajasthan <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Police
      </p>
    </>
  );
};

export default Logo;
