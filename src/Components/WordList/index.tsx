import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  list: Array<string>;
  name: string;
};

const WordList: React.FC<Props> = ({ list, name }) => {
  return (
    <div className="word__list">
      <span className="word__list-title">{name}</span>:
      {list.map((item) => (
        <Link to={`/word/${item}`}>
          <span className="word__link">{item}, </span>
        </Link>
      ))}
    </div>
  );
};

export default WordList;
