const Search = ({
  title,
  onChange,
  onSearchTracks,
}: {
  title: string;
  onChange: (e: any) => void;
  onSearchTracks: () => Promise<void>;
}) => {
  return (
    <div>
      <input value={title} type="text" onChange={onChange} />
      <button onClick={onSearchTracks} type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
