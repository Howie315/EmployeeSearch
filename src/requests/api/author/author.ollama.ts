import { ollamaService } from "../../../ollama/ollama";
import { fetchAuthors } from "./authorRequests";

export async function summarizeAllAuthors(userPrompt: string) {

  const authors = await fetchAuthors();
  if (authors.length === 0) {
    throw new Error('No articles found.');
  }


  const authorBlock = authors
    .map((author) => JSON.stringify(author, null, 2)) // Convert each author object to a JSON string
    .join('\n');


  // Combine the user’s custom instructions with the articles data
  const combinedPrompt = `
${userPrompt}

${authorBlock}
`;

  // 3. Call Ollama once, passing the big prompt
  const ollamaData = await ollamaService(combinedPrompt);

  return ollamaData;
}
