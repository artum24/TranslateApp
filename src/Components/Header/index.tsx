import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/" className="header__title">
        Translator Online
      </Link>
    </div>
  );
};

export default Header;
