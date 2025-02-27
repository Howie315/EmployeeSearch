import { useEffect, useState } from 'react';
import './App.css';
import { fetchAuthors } from './requests/api/author/authorRequests';
import { Author } from './requests/api/author/author.typings';
import SearchBot from './features/SearchBot/SearchBot';

function App() {
  return(
    <SearchBot/>
  )
  
}

export default App;
