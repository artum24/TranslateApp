import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
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
    return <>Loading...</>;
  }
  if (status === 'failure') {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>{word ? word.word : 'wait'}</h1>
    </div>
  );
};

export default WordPage;
