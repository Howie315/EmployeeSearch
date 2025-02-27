// summarizeAllArticles.ts

import { ollamaService } from "../../../ollama/ollama";
import { fetchArticles } from "./articleRequest";

export async function summarizeAllArticles(userPrompt: string) {
  // 1. Fetch all articles from Strapi
  const articles = await fetchArticles();
  if (articles.length === 0) {
    throw new Error('No articles found.');
  }

  // 2. Dynamically build a combined prompt that includes all articles
  //    We'll just list them out with their titles and descriptions (adjust as needed)
  const articlesBlock = articles
    .map((article, index) => {
      return `Article #${index + 1}:
Title: ${article.title}
Description: ${article.description}
Slug: ${article.slug}
Status: ${article.status}

`;
    })
    .join('');

  // Combine the user’s custom instructions with the articles data
  const combinedPrompt = `
${userPrompt}

Below are all articles:

${articlesBlock}
`;

  // 3. Call Ollama once, passing the big prompt
  const ollamaData = await ollamaService(combinedPrompt);

  return ollamaData;
}
