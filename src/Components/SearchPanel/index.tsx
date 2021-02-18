import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { getWordsThunkCreactor } from '../../features/word/thunk';
import { AppStateType } from '../../store/store';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const SearchPanel = () => {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  let history = useHistory();
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(setTimeout(() => {}, 3000));
  const data = useSelector((state: AppStateType) => state.word.words);

  const onSubmit = (values: { name: { label: string; value: string } }) =>
    history.push(`/word/${values.name.label}`);

  const getOptions = (inputValue: string, callback: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        dispatch(getWordsThunkCreactor(value));
        callback(data);
      }, 3000)
    );
  };
  const onInputChange = (newValue: string) => setValue(newValue);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search">
      <Controller
        name="name"
        control={control}
        loadOptions={getOptions}
        as={AsyncSelect}
        className="search__input"
        onInputChange={onInputChange}
      />
      <button type="submit" className="search__button">
        Search
      </button>
    </form>
  );
};

export default SearchPanel;
