import { FaSearch } from 'react-icons/fa';

const Search = ({ search }) => {
  return (
    <div className="max-w-sm mx-auto mb-5 relative rounded shadow-lg">
      <input type="search" className="w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-gradient-to-r focus:from-green-400 focus:via-blue-500 focus:to-pink-600 focus:border-transparent bg-gray-900 shadow rounded p-3 text-gray-100" placeholder="Search something..." onKeyPress={search} />
      <div className="absolute inset-y-0 right-0 mr-3 mt-4 text-gray-100">
        <FaSearch />
      </div>
    </div>
  )
}

export default Search
