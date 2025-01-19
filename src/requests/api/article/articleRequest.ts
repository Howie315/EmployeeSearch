import axios from 'axios';
import { Article } from './article.typings';
import config from '../../../config';

export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.get<{ data: { id: number; attributes: Omit<Article, 'id'> }[] }>(
      `${config.API_BASE_URL}/articles`
    );

    console.log("Fetched Articles Response:", response.data); // Debugging

    // Map Strapi response correctly
    return response.data.data.map((item) => ({
      id: item.id, // Extract `id` separately
      title: item.attributes.title,
      description: item.attributes.description,
      slug: item.attributes.slug,
      status: item.attributes.status,
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

