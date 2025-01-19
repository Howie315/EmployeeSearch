import axios from 'axios';
import { Author } from './author.typings';

import config from "../../../config"

export const fetchAuthors = async (): Promise<Author[]> => {
  try {
    const response = await axios.get<{ data: Author[] }>(`${config.API_BASE_URL}/authors`);
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
};
