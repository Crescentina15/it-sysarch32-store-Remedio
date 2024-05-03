// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#ffffff', padding: '20px', textAlign: 'center' }} className='mt-4'>
      <p>&copy; {new Date().getFullYear()} Crescentina Ann Remedio</p>
    </footer>
  );
};

export default Footer;
