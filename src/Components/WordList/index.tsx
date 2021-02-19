import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToLastView } from '../../features/word/actions';

type Props = {
  list: Array<string>;
  name: string;
};

const WordList: React.FC<Props> = ({ list, name }) => {
  const dispatch = useDispatch();
  return (
    <div className="word__list">
      <span className="word__list-title">{name}</span>:
      {list.map((item, index) => (
        <Link to={`/word/${item}`} key={index}>
          <span
            className="word__link"
            onClick={() => dispatch(addToLastView(item))}
          >
            {item},{' '}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default WordList;
