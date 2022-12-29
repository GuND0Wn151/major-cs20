import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Share from "./pages/Share";
import Email from "./pages/Email";
import Decrypt from "./pages/Decrypt";
import { useState } from "react";
//import * as images from "./assets/";
import Profile from "./pages/Profile";
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
      <div className="flex ">
         <div
            className={` ${
               open ? "w-72" : "w-20 "
            } bg-blue-600 h-screen p-5  pt-8 top-0 left-0 z-1  fixed  duration-300`}
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
                  <a
                     key={index}
                     className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                        index === 0 && "bg-light-white"
                     } `}
                     href={`${Menu.title}`}
                  >
                     <img src={images[`${Menu.src}.png`]} alt="text" />
                     <span
                        className={`${
                           !open && "hidden"
                        } origin-left duration-200`}
                     >
                        {Menu.title}
                     </span>
                  </a>
               ))}
            </ul>
         </div>
      <div className={`h-screen ml-300 duration-300 flex-1 pl-30 ${open? "ml-80" : "ml-28"}`}>
            <Routes>
               <Route path="/Login" element={<Login />} />
               <Route path="/Register" element={<Register />} />
               <Route path="/Home" element={<Home />} />
               <Route path="/Share" element={<Share />} />
               <Route path="/email" element={<Email />} />
               <Route path="/Decrypt" element={<Decrypt />} />
               <Route path="/Profile" element={<Profile />} />
            </Routes>
            

         </div>
      </div>
   );
}

export default App;
