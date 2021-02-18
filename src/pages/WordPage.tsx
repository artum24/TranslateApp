import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import WordList from '../Components/WordList';
import { getUsersThunkCreactor } from '../features/word/thunk';
import { AppStateType } from '../store/store';

type ParamType = {
  name: string;
};

const WordPage = () => {
  const dispatch = useDispatch();
  const word = useSelector((state: AppStateType) => state.word.word);
  const status = useSelector((state: AppStateType) => state.word.status);
  let { name } = useParams<ParamType>();
  console.log(word);

  useEffect(() => {
    dispatch(getUsersThunkCreactor(name));
  }, [name]);
  if (status === 'loading') {
    return <Loader />;
  }
  if (status === 'failure') {
    return <Redirect to="/" />;
  }
  console.log(word);

  return word ? (
    <div className="word">
      <div className="word__title-wrapper">
        <h1 className="word__title">{word.word}</h1>
        <p className="word__pronunciation">[{word.pronunciation.all}]</p>
      </div>
      <div className="word__results">
        {word.results.map((item, index) => (
          <div className="word__result" key={index}>
            <p className="word__definition">Definition: {item.definition}</p>
            {item.synonyms ? (
              <WordList name="Synonyms" list={item.synonyms} />
            ) : null}
            {item.similarTo ? (
              <WordList name="Similar to" list={item.similarTo} />
            ) : null}
            {item.antonyms ? (
              <WordList name="Antonyms" list={item.antonyms} />
            ) : null}
            {item.examples ? (
              <p className="word__list">
                Examples: {item.examples.map((item) => item)}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default WordPage;
