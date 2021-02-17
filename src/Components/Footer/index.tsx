import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Link to="/" className="footer__title">
        Translator Online
      </Link>
      <p className="footer__end">Kiev 2021</p>
    </div>
  );
};

export default Footer;
