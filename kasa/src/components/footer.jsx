import React from 'react';
import logo from "../assets/logo/logo_footer.png"
function Footer() {
    const date = new Date();
    const currentDate = date.getFullYear();
  
    return (
      <footer className="footer">
        <img src={logo} alt="" className="footerLogo" />
        <p className="footerText">
          &copy;
          {currentDate} Kasa. All rights reserved
        </p>
      </footer>
    );
  }

export default Footer;
