import { wordsType, wordType } from '../features/word/types';
import api from './api';
import { API_URL } from './api.config';

export const wordAPI = {
  getWords(name: string): Promise<wordsType> {
    const params = {
      letterPattern: name,
      limit: '10',
      page: '1',
      hasDetails: 'typeOf,hasCategories',
    };
    return api.get(`${API_URL}`, { params }).then((res) => res.data.results.data);
  },
  getWord(name: string): Promise<wordType> {
    return api.get(`${API_URL}${name}`).then((res) => res.data);
  },
};
