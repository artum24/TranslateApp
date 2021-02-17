import React from 'react';
import SearchPanel from '../Components/SearchPanel';

const HomePage = () => {

  return (
    <div className="home">
      <div className="home__main">
        <SearchPanel />
      </div>
      <div className="home__last-words">Last words</div>
    </div>
  );
};

export default HomePage;
