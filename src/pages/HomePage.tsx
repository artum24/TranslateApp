import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchPanel from '../Components/SearchPanel';
import { AppStateType } from '../store/store';

const HomePage = () => {
  const lastView = useSelector((state: AppStateType) => state.word.lastView);
  let lastViewArr: Array<string> = [];
  if (lastView) {
    lastViewArr = lastView.split(', ').slice(0, -1);
    lastViewArr && lastViewArr.length > 10
      ? lastViewArr.slice(0, 10)
      : lastViewArr;
  }

  return (
    <div className="home">
      <div className="home__main">
        <SearchPanel />
      </div>
      <div className="home__last">
        <h3 className="home__last-title">Last words</h3>
        <ul className="home__last-list">
          {lastView ? (
            lastViewArr.map((item) => (
              <Link to={`/word/${item}`} className="home__last-item" key={item}>
                <li>{item}</li>
              </Link>
            ))
          ) : (
            <p className="home__last-empty">List is Empty:(</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
