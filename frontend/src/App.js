import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Share from "./pages/Share";
import Email from "./pages/Email";
import Decrypt from "./pages/Decrypt";
import { useState } from "react";
//import * as images from "./assets/";
function importAll(r) {
   let images = {};
   r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
   });
   return images;
}

function App() {
   const [open, setOpen] = useState(true);
   const images = importAll(
      require.context("./assets", false, /\.(png|jpe?g|svg)$/)
   );
   console.log(images["control.png"]);
   const Menus = [
      { title: "Home", src: "Home" },
      { title: "Inbox", src: "Inbox" },
      { title: "Search", src: "Search" },
      { title: "Chat", src: "Chat", gap: true },
      { title: "Share", src: "Share" },
      { title: "Decrypt", src: "Decrypt" },
      { title: "Profile", src: "Profile", gap: true },
      { title: "Setting", src: "Setting" },
   ];
   return (
      <div className="flex">
         <div
            className={` ${
               open ? "w-72" : "w-20 "
            } bg-blue-600 h-screen p-5  pt-8 relative duration-300`}
         >
            <img
               src={images["control.png"]}
               alt="text"
               className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
               onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
               <img
                  src={images["logo.png"]}
                  alt="text"
                  className={`cursor-pointer duration-500 ${
                     open && "rotate-[360deg]"
                  }`}
               />
               <h1
                  className={`text-white origin-left font-medium text-xl duration-200 ${
                     !open && "scale-0"
                  }`}
               >
                  CredShare
               </h1>
            </div>
            <ul className="pt-2">
               {Menus.map((Menu, index) => (
                  <li
                     key={index}
                     className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                        index === 0 && "bg-light-white"
                     } `}
                  >
                     <img src={images[`${Menu.src}.png`]} alt="text" />
                     <span
                        className={`${
                           !open && "hidden"
                        } origin-left duration-200`}
                     >
                        {Menu.title}
                     </span>
                  </li>
               ))}
            </ul>
         </div>
         <div className="h-screen flex-1 p-7">
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/" element={<Home />} />
               <Route path="/search" element={<Share />} />
               <Route path="/email" element={<Email />} />
               <Route path="/decrypt" element={<Decrypt />} />
            </Routes>
            

         </div>
      </div>
   );
}

export default App;
