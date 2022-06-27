const Search = ({
  query,
  onQueryChange,
  onSearchTracks,
}: {
  query: string;
  onQueryChange: (e: any) => void;
  onSearchTracks: () => Promise<void>;
}) => {
  return (
    <div>
      <input value={query} type="text" onChange={onQueryChange} />
      <button onClick={onSearchTracks} type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
