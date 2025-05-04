import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => (
  <div className="relative">
    <input
      type="text"
      className="bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
      placeholder="Search..."
    />
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <Search className="text-gray-500" size={18} />
    </div>
  </div>
);

export default SearchBar;