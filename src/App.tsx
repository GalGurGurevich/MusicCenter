import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import ImageContainer from './components/ImageContainer';
import RecentSearches from './components/RecentSearches';
import './App.css';

const App = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [selectedTrack, setSelectedTrack] = useState<any>(null);
  const [recent, setRecent] = useState<string[]>([]);
  const [view, setView] = useState<'list' | 'tile'>('list');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTracks = async (searchTerm: string, offset = 0) => {
    setLoading(true);
    const response = await fetch(`https://api.mixcloud.com/search/?q=${searchTerm}&type=cloudcast&limit=6&offset=${offset}`);
    const data = await response.json();
    setResults(data.data);
    setQuery(searchTerm);
    setOffset(offset);
    updateRecent(searchTerm);
    setLoading(false);
  };

  const updateRecent = (search: string) => {
    const prev = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    const updated = [search, ...prev.filter((q: string) => q !== search)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    const viewMode = localStorage.getItem('viewMode') as 'list' | 'tile';
    if (saved) setRecent(JSON.parse(saved));
    if (viewMode) setView(viewMode);
  }, []);

  const handleViewChange = (mode: 'list' | 'tile') => {
    setView(mode);
    localStorage.setItem('viewMode', mode);
  };

  return (
    <div className="app">
        <SearchBar onSearch={fetchTracks} selectedTrack={query} setTrackName={setQuery} />
        <div className="buttons">
          <button disabled={results?.length == 0} onClick={() => fetchTracks(recent[0], offset + 6)}>Next</button>
          <button onClick={() => handleViewChange('list')}>List</button>
          <button onClick={() => handleViewChange('tile')}>Tile</button>
        </div>
        {loading ? <div className='loader'>Loading...</div> : 
        <SearchResults
          results={results}
          onSelect={(track) => {setSelectedTrack(track)}}
          view={view}
        />}
        <ImageContainer track={selectedTrack} />
        <RecentSearches items={recent} onClick={(term) => {
          setSelectedTrack(term);
          setQuery(term)    
          fetchTracks(term);       
        }} />
    </div>
  );
};

export default App;
