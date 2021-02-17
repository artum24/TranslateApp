import api from './api';
import { API_URL } from './api.config';

export const MentorsAPI = {
  getWords(name: string): Promise<void> {
    const params = {
      letterPattern: name,
      limit: '100',
      page: '1',
      hasDetails: 'typeOf,hasCategories',
    };
    return api.get(`${API_URL}`, { params }).then((res) => console.log(res));
  },
  getWord(name: string): Promise<void> {
    return api.get(`${API_URL}${name}`).then((res) => console.log(res));
  },
};
