import React from 'react'

import { CheckToken } from "../components/CheckToken";
import { useNavigate } from "react-router-dom";
function Search() {
const authenticated = CheckToken();
const navigate = useNavigate();

if (!authenticated) {
   navigate("/login");
   return null; // or a loading indicator, or some other fallback UI
}
  return (  
    <div>Search</div>
  )
}

export default Search