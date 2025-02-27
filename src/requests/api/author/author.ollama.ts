import { ollamaService } from "../../../ollama/ollama";
import { fetchAuthors } from "./authorRequests";

export async function summarizeAllAuthors(userPrompt: string) {

  const authors = await fetchAuthors();
  if (authors.length === 0) {
    throw new Error('No articles found.');
  }

  const combinedPrompt = `
${userPrompt}

${authors}
`;

  const ollamaData = await ollamaService(combinedPrompt);

  return ollamaData;
}
