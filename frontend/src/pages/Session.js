import axios from "axios";
import React from "react";
import { CheckToken } from "../components/CheckToken";
import { useNavigate } from "react-router-dom";
function Session() {
   const authenticated = CheckToken();
   const navigate = useNavigate();
   if (!authenticated) {
      navigate("/login");
      return null;
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target);
      const formValues = new FormData(e.target);
      const data = {
         Platform: formValues.get("platform"),
         senderEmail: formValues.get("userid"),
         Sender_mail: formValues.get("Semail"),
         username: formValues.get("username"),
         password: formValues.get("password"),
         end_date: formValues.get("endate"),
      };
      axios
         .post("http://localhost:1235/api/session", data, {
            headers: {
               "Access-Control-Allow-Origin": "*",
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            if (res.status === 200) {
               console.log(res);
               alert("The Session Details have been saved for User");
            } else {
               alert("Some Error has Occured Please Try again Later");
            }
         })
         .catch((err) => {
            alert("Some Error has Occured Please Try again Later");
         });
   };
   return (
      <div className="min-h-screen flex flex-col bg-loginpage bg-cover  bg-no-repeat">
         <div className="flex flex-1 items-center justify-center  ">
            <div className="rounded-lg sm:border-3 border-gray-400 px-4 lg:px-20 py-12 bg-white  shadow-inner  lg:max-w-xl  w-full text-center">
               <form className="text-center" onSubmit={handleSubmit}>
                  <h1 className="font-bold tracking-wider text-3xl mb-8 w-full  h-full text-black-600">
                     Share Session 
                  </h1>
                  <div className="py-2 text-left">
                     <input
                        type="text"
                        className="border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        placeholder="Platform"
                        name="platform"
                        required
                     />
                  </div>
                  <div className="py-2 text-left">
                     <input
                        type="text"
                        className="border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        placeholder="User Id"
                        name="userid"
                        required
                     />
                  </div>

                  <div className="py-2 text-left">
                     <input
                        type="email"
                        name="Semail"
                        className=" border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        placeholder="Your Email"
                        required
                     />
                  </div>
                  <div className="py-2 text-left">
                     <input
                        type="text"
                        name="username"
                        className=" border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        placeholder="UserName or Email"
                        required
                     />
                  </div>
                  <div className="py-2 text-left">
                     <input
                        type="password"
                        name="password"
                        className=" border-3 border-gray-100 focus:outline-none  bg-gray-100 block w-full py-2 px-4 rounded-lg "
                        placeholder="Password"
                        required
                     />
                  </div>
                  <div className="py-2 text-left">
                     <input
                        type="password"
                        name="password"
                        className=" border-3 border-gray-100 focus:outline-none  bg-gray-100 block w-full py-2 px-4 rounded-lg "
                        placeholder="Confirm Password"
                        required
                     />
                  </div>
                  <div className="py-2 text-left">
                     <p
                        className="border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        placeholder="End Date"
                        name="userid"
                     >
                        End Date:
                        <div className="py-2 text-left">
                           <input
                              type="date"
                              className="border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                              placeholder="End Date"
                              name="endate"
                           />
                        </div>
                     </p>
                  </div>

                  <div className="py-2">
                     <button
                        type="submit"
                        className="border-2 border-gray-100 focus:outline-none bg-green-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg "
                     >
                        Share
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Session;
