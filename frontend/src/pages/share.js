import axios from "axios";
import React from "react";
function Share() {
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target);
      const formValues = new FormData(e.target);
      const data = {
         Platform: formValues.get("platform"),
         senderEmail: formValues.get("Semail"),
         publicKey: formValues.get("Rkey"),
         privateKey: formValues.get("Pkey"),
         password:formValues.get("password")
      };
      axios
         .post("http://localhost:1235/api/share", data, {
            headers: {
               "Access-Control-Allow-Origin": "*",
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            if (res.status === 200) {
              console.log(res)
              alert("The Email Has be Sent to User")
            } else {
              alert("Some Error has Occured Check the Credentails")
            }
         }).catch((err)=>{
            alert("Some Error has Occured Check the Credentails")
         });
   };

   return (
      <div className="min-h-screen flex flex-col bg-loginpage bg-cover  bg-no-repeat">
         <div className="flex flex-1 items-center justify-center  ">
            <div className="rounded-lg sm:border-3 border-gray-400 px-4 lg:px-20 py-12 bg-white  shadow-inner  lg:max-w-xl  w-full text-center">
               <form className="text-center" onSubmit={handleSubmit}>
                  <h1 className="font-bold tracking-wider text-3xl mb-8 w-full  h-full text-black-600">
                     Share Credentails
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
                        type="email"
                        name="Semail"
                        className=" border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        placeholder="Your Email"
                        required
                     />
                  </div>
                  <div className="py-2 text-left">
                     <textarea
                        className="border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        placeholder="Recevier Public Key"
                        rows="3"
                        cols="50"
                        name="Rkey"
                        required
                     />
                  </div>

                  <div className="py-2 text-left">
                     <textarea
                        className="border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        placeholder="Your Private Key"
                        rows="3"
                        cols="50"
                        name="Pkey"
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
                  <div className="py-2">
                     <button
                        type="submit"
                        className="border-2 border-gray-100 focus:outline-none bg-green-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg "
                     >
                        Share
                     </button>
                  </div>
               </form>
               
               {/* <div className="text-center mt-12">
                  <span></span>
                  <span>Already have an account?</span>
               </div>
               <div className="text-center">
                  <a
                     href="login"
                     className="font-light text-md text-red-600 underline font-semibold "
                  >
                     Sign in
                  </a>
               </div> */}
            </div>
         </div>
      </div>
   );
}

export default Share;
