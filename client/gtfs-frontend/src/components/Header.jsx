import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ title }) => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-semibold">{title}</h1>
    <SearchBar />
  </div>
);

export default Header;