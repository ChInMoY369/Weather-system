const RecentSearches = ({ searches, onSelect }) => {
  if (!searches || searches.length === 0) return null;
  
  return (
    <div className="w-full max-w-md mb-6">
      <h3 className="text-lg font-medium text-gray-700 mb-2 dark:text-gray-300">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((search, index) => (
          <button
            key={index}
            onClick={() => onSelect(search)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm py-1 px-3 rounded-full transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches; 