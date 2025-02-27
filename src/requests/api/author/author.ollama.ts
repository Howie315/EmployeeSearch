import { ollamaService } from "../../../ollama/ollama";
import { fetchAuthors } from "./authorRequests";

export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

export async function summarizeAllAuthors(userPrompt: string): Promise<string> {
    // Fetch authors from Strapi
    const authors = await fetchAuthors();
    if (authors.length === 0) {
      throw new Error("No authors found.");
    }
  
    const CHUNK_SIZE = 5;
    const authorChunks = chunkArray(authors, CHUNK_SIZE);
  
    let chunkSummaries: string[] = [];
  
    for (const chunk of authorChunks) {
      const chunkPrompt = `${userPrompt} ${JSON.stringify(chunk)} `;
  
      const chunkResult = await ollamaService(chunkPrompt);
  
      chunkSummaries.push(chunkResult);
    }
  
    return chunkSummaries.join("\n\n")
  }
