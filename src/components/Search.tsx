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
    <div className="my-8">
      <input
        type="search"
        name="query"
        id="query"
        className="py-1 px-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 block w-full"
        placeholder="Search tracks"
        value={query}
        onChange={onQueryChange}
      />
      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex items-center my-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          onClick={onSearchTracks}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
