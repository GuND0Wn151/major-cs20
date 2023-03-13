import React, { useState } from "react";
import axios from "axios";
import { CheckToken } from "../components/CheckToken";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const authenticated = CheckToken();
  const navigate = useNavigate();

  if (!authenticated) {
    navigate("/login");
    return null; // or a loading indicator, or some other fallback UI
  }

  const handleSearch = async (event) => {
    const username = event.target.value;
    try {
      const response = await axios.post("http://localhost:1235/search", { name: username });
      setSearchResults(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="w-1/2 mt-14 py-2 px-3 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500"
          placeholder="Search"
          aria-label="Search"
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-col ">
        {searchResults.map((user) => (
          <div key={user._id} className="my-2 p-4 rounded-md bg-gray-200 hover:bg-gray-300 flex items-center">
            <img src={`https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100) + 1}`} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <a href={`http://localhost:3000/users/${user._id}`} className="font-bold">{user.name}</a>
              <div className="text-gray-600">{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;
