import api from './api';
import { API_URL, ENDPOINTS } from './api.config';

export const MentorsAPI = {
  getMentor(id: number): Promise<void> {
    return api
      .get(`${API_URL}`)
      .then((res) => res.data);
  },
};
