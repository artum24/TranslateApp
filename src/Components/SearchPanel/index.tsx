import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import debounce from 'debounce-promise';
import { Controller, useForm } from 'react-hook-form';
import { getWordsThunkCreactor } from '../../features/word/thunk';
import { AppStateType } from '../../store/store';

import AsyncSelect from 'react-select/async';

const SearchPanel = () => {
  const { handleSubmit, control } = useForm();
  let history = useHistory();

  const onSubmit = (values: { name: { label: string; value: string } }) =>
    history.push(`/word/${values.name.label}`);

  const data = useSelector((state: AppStateType) => state.word.words);
  const dispatch = useDispatch();

  const wait = 1000;
  const loadOptions = (inputValue: string) => getOptions(inputValue);
  const debouncedLoadOptions = debounce(loadOptions, wait, {
    leading: true,
  });
  const getOptions = (inputValue: string) => {
    dispatch(getWordsThunkCreactor(inputValue));
    return data;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search">
      <Controller
        name="name"
        control={control}
        loadOptions={(inputValue: string) => debouncedLoadOptions(inputValue)}
        as={AsyncSelect}
        className="search__input"
      />
      <button type="submit" className="search__button">
        Search
      </button>
    </form>
  );
};

export default SearchPanel;
