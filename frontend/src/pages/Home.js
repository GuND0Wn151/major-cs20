import React from "react";
import Navbar from "../components/Navbar";
import { useCookies } from 'react-cookie';

function Home() {
   const handleclick=()=>{
      const win = window.open("https://google.com")
      console.log(win.document.cookie.split(';'))
      console.log(win.document)
      const timer = setInterval(() => {
      if (win.closed) {
      clearInterval(timer);
      
      alert("hmm")
    }
   }, 500);
   }
   return (
      <button onClick={handleclick} className='border-black'>here
      </button>
   );
}

export default Home;
