import React from "react";

function SearchBar({ onSearch }) {
  return (
    <div className="flex mt-3 w-full justify-center items-center">
      <input
        type="text"
        className="w-2/4 h-14 px-2 rounded-lg border-black border-2"
        placeholder="Cari Pokemon..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
