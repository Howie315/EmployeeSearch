import { useEffect, useState } from 'react';
import './App.css';
import { fetchAuthors } from './requests/api/author/authorRequests';
import { Author } from './requests/api/author/author.typings';

function App() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetchAuthors()
      .then((data) => {
        console.log("Fetched Authors:", data);
        setAuthors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching authors:", err.response?.data || err.message);
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Error loading authors: {error}</p>;

  return (
    <div>
      <h2>Author List</h2>
      <ul>
        {authors.map((author) => {
          if (!author || !author.name) return null; // Prevents crashes if undefined

          return (
            <li key={author.id}>
              <strong>{author.name}</strong> - {author.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
