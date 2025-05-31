type SearchBarProps = {
  onSearch: (term: string) => void;
  selectedTrack?: string;
  setTrackName: (val: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, selectedTrack, setTrackName }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTrack) return; // could be a bit overkill snice button disabled anyways 
    onSearch(selectedTrack);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <label htmlFor="track-search" className="sr-only">Search for tracks</label>
      <input
        id="track-search"
        type="text"
        value={selectedTrack}
        onChange={e => setTrackName(e.target.value)}
        placeholder="Search for tracks..."
      />
      <button type="submit" disabled={!selectedTrack}>Search</button>
    </form>
  );
};

export default SearchBar;
