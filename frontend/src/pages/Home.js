import {ReactComponentElement,useState} from "react";
import Navbar from "../components/Navbar";
import { useCookies } from "react-cookie";
import Post from "../components/Post";
import { CheckToken } from "../components/CheckToken";
import { useNavigate } from "react-router-dom";
function Home() {
   const authenticated = CheckToken();
   const navigate = useNavigate();
  
   if (!authenticated) {
      navigate("/login");
      return null; // or a loading indicator, or some other fallback UI
   }

   return (
      <>
         <div>
            <div className="border-blue-700">
               <Post />
               
            </div>
         </div>
      </>
   );
}

export default Home;
