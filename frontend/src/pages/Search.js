import React from "react";
import axios from "axios";
import { CheckToken } from "../components/CheckToken";
import { useNavigate } from "react-router-dom";

function Search() {
   const authenticated = CheckToken();
   const navigate = useNavigate();

   if (!authenticated) {
      navigate("/login");
      return null; // or a loading indicator, or some other fallback UI
   }

   const handleSubmit = () => {
      axios
         .get("http://localhost:1235/open/vmeg", {
            headers: {
               "Access-Control-Allow-Origin": "*",
               "Content-Type": "application/json",
            },
         })
         .then(async (res) => {
            if (res.status === 200) {
               const cookies = res.data;
               console.log(res.data);
               const url =
                  "https://studentscorner.vardhaman.org/Students_Corner_Frame.php"; // set your desired URL here
               const newTab = window.open(url, "_blank");
               document.cookie = res.data;
               // add load event listener to the new tab only if it exists
               if (newTab) {
                  newTab.addEventListener("load", () => {
                       
                     newTab.document.cookie = cookies;
                  });
               }
               alert("The Email Has be Sent to User");
            } else {
               alert("Some Error has Occured Check the Credentails");
            }
         });
   };

   return <button onClick={handleSubmit}>Submit</button>;
}

export default Search;
