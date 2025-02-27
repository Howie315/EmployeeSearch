import axios from 'axios';

export const ollamaService = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post('http://127.0.0.1:11434/api/generate', {
      model: 'mistral:latest',
      prompt,
      stream: false
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data.response;
  } catch (error) {
    throw new Error(`Ollama request failed: ${error}`);
  }
};
