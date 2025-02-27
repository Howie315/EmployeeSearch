import { useState } from "react";
import { summarizeAllAuthors } from "../../requests/api/author/author.ollama";

const SearchBot = () =>{
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
  
    const handleClick = async () => {
      try {
        const data = await summarizeAllAuthors(prompt);
        setResult(data);
      } catch (error) {
        console.error(error);
        setResult('Error');
      }
    };
  
    return (
      <div>
        <h1>Ollama (Mistral) Test</h1>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          rows={3}
          cols={50}
        />
        <br />
        <button onClick={handleClick}>Send to Ollama</button>
  
        {result && (
            <pre>{result}</pre>
        )}
      </div>
    )
}
 
export default SearchBot