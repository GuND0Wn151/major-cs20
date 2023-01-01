import React from "react";
import Navbar from "../components/Navbar";
import { useCookies } from "react-cookie";
import Post from "../components/Post";

function Home() {
   return (
      <>
      <div>
         here
      </div>
      <div className="bg-slate-200 border-2 w-[40rem]">

      <Post/>
      </div>
      </>
   );
}

export default Home;
