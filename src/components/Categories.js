const Categories = ({ item, setQuery, setPage }) => {
  return (
    <div className="max-w-sm mx-auto px-2 mb-5 flex flex-row flex-auto flex-wrap">
      {item.map((category, key) => (
        <button
          type="button"
          key={key}
          className="mt-2 mr-2 p-2 bg-gray-900 text-gray-100 text-xs capitalize rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gradient-to-r focus:from-green-400 focus:via-blue-500 focus:to-pink-600 focus:border-transparent"
          onClick={(e) => {
            setQuery(e.target.textContent)
            setPage(5)
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
