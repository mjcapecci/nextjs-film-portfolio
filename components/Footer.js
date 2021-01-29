import React from 'react';

const Footer = () => {
  const date = new Date();
  return <footer>© {date.getFullYear()} Lance Vlcek</footer>;
};

export default Footer;
