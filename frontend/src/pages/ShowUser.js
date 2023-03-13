import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { CheckToken } from "../components/CheckToken";

function ShowUser() {
   const { slug } = useParams();
   const [users, setUser] = useState("");
   useEffect(() => {
      axios
         .get(`http://localhost:1235/users/${slug}`)
         .then((response) => {
            setUser(response.data);
            console.log(response.data);
         })
         .catch((error) => {
            console.error(error);
         });
   }, [slug]);

   return <div class="p-10">
         <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">
               <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                  <div>
                     <p class="font-bold text-gray-700 text-xl">22</p>
                     <p class="text-gray-400">Posts</p>
                  </div>
                  <div>
                     <p class="font-bold text-gray-700 text-xl">10</p>
                     <p class="text-gray-400">Shares</p>
                  </div>
                  <div>
                     <p class="font-bold text-gray-700 text-xl">89</p>
                     <p class="text-gray-400">Renowns</p>
                  </div>
               </div>
               <div class="relative">
                  <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                     <svg
                        xmlns="https://picsum.photos/200/300"
                        class="h-24 w-24"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                           clip-rule="evenodd"
                        />
                     </svg>
                  </div>
               </div>

               <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                  <button onClick={()=>{navigator.clipboard.writeText(users.user.public_key)}} class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                     Public Key
                  </button>
                  <button onClick={()=>{navigator.clipboard.writeText(users.user._id)}} class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                     User Id
                  </button>
               </div>
               
            </div>

            <div class="mt-20 text-center border-b pb-12">
               <h1 class="text-4xl font-medium text-gray-700">
                  {!users.user ? "Example Name " : users.user.name}, <span class="font-light text-gray-500">21</span>
               </h1>
               <p class="font-light text-gray-600 mt-3">Hyderabad, India</p>

               <p class="mt-8 text-gray-500">
                  {!users.userDetails? "Example Occupation ": users.userDetails.Occupation}
               </p>
               <p class="mt-2 text-gray-500">
                  {!users.userDetails? "XYZ Company or College": users.userDetails.Company}
               </p>
            </div>

            <div class="mt-12 flex flex-col justify-center">
               <p class="text-gray-600 text-center font-light lg:px-16">
                   {!users.userDetails? "Example Description ": users.userDetails.Description}
               </p>
               <button class="text-indigo-500 py-2 px-4  font-medium mt-4">
                  Show more
               </button>
            </div>
         </div>
      </div>;
}

export default ShowUser;
