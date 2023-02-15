import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} hend raafat
      </p>
    </footer>
  );
};

export default Footer;
