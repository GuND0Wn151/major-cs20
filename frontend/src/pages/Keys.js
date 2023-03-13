import React, { useState, useEffect } from "react";
import axios from "axios";
import { CheckToken } from "../components/CheckToken";
import { useNavigate } from "react-router-dom";

function Keys() {
   const [credsList, setCredsList] = useState([]);
   const authenticated = CheckToken();
   const navigate = useNavigate();

   if (!authenticated) {
      navigate("/login");
   }
   const handleSubmit = (username, password) => {
      axios
         .post(
            "http://localhost:1235/open/vmeg",
            { username, password },
            {
               headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
               },
            }
         )
         .then(async (res) => {
            if (res.status === 200) {
               const cookies = res.data;
               console.log(res.data);
               const url =
                  "https://studentscorner.vardhaman.org/Students_Corner_Frame.php"; // set your desired URL here
               const newTab = window.open(url, "_blank");

               // add load event listener to the new tab only if it exists
               if (newTab) {
                  newTab.addEventListener("load", () => {
                     newTab.document.cookie = cookies; // set the cookie in the new tab
                  });
               }
               alert("New Tab opened");
            } else {
               alert("Some Error has Occured Check the Credentails");
            }
         });
   };
   useEffect(() => {
      const userId = localStorage.getItem("userId");
      axios
         .post("http://localhost:1235/getkeys", { userId })
         .then((response) => {
            setCredsList(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [authenticated, navigate]);

   if (!authenticated) {
      navigate("/login");
      return null; // or a loading indicator, or some other fallback UI
   }

   return (
      <div className="flex flex-col items-center">
         <h2 className="font-bold text-2xl mb-4">All User Credentials</h2>
         {credsList.map((key) => (
            <div
               className="bg-gray-200 rounded-md p-4 mb-4 w-1/2"
               key={key._id}
            >
               <h3 className="font-bold text-lg mb-2">{key.Platform}</h3>
               <p className="text-gray-700 text-base mb-2">
                  End Date: {key.endDate}
               </p>
               <button
                  onClick={() =>
                     handleSubmit(key.credentials[0][0], key.credentials[0][1])
                  }
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
               >
                  Login
               </button>
            </div>
         ))}
      </div>
   );
}

export default Keys;
