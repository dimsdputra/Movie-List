import React from "react";

const Search = (props) => {
  return (
    <div className="h-full w-full sm:w-2/3 mx-auto px-4 py-4">
        <div className="flex justify-between">
          <input
            type="text"
            className="bg-gray-100 rounded-md w-full px-4 py-2 border border-gray-400 focus:border-gray-600 focus:ring-gray-600 placeholder:text-gray-600 text-gray-600 outline-none"
            placeholder="Search Movie"
            onChange={(e) => props.search(e.target.value)}
          />
        </div>
    </div>
  );
};

export default Search;
