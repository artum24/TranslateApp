import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

const SearchPanel = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any) => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search">
      <input
        className="search__input"
        placeholder="Search"
        name="word"
        ref={register({
          required: true,
        })}
      />
      <button type="submit" className="search__button">
        Search
      </button>
      {errors.word && <p className="search__error">Please input some info</p>}
    </form>
  );
};

export default SearchPanel;
