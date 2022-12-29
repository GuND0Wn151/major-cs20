import { React, useState } from "react";
import axios from "axios";
function Decrypt() {
   const [Password, setPassword] = useState("Decrypted text displayed here ...");
   const handleSubmit = (e) => {
      e.preventDefault();
      const formValues = new FormData(e.target);
      const data = {
         message: formValues.get("message"),
         privateKey: formValues.get("Pkey"),
      };
      console.log(data)
      axios
         .post("http://localhost:1235/api/decrypt", data, {
            headers: {
               "Access-Control-Allow-Origin": "*",
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            if (res.status === 200) {
               console.log(res);
               setPassword(res.data.message);
            } else {
               alert("some error has occured Check details");
            }
         })
         .catch((err) => {
            alert("some error has occured");
            console.log(err);
         });
   };
   return (
      <div className="  flex flex-col bg-loginpage bg-cover  bg-no-repeat">
         <div className="flex flex-1 items-center justify-center  ">
            <div className="rounded-lg sm:border-3 border-gray-400 px-4 lg:px-20 py-12 bg-white  shadow-inner  lg:max-w-xl  w-full text-center">
               <form className="text-center" onSubmit={handleSubmit}>
                  <h1 className="font-bold tracking-wider text-3xl mb-8 w-full  h-full text-black-600">
                     Decrypt Credentails
                  </h1>

                  <div className="py-3 text-left">
                     <textarea
                        className="border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        placeholder="Encrypted Text Here ..."
                        rows="3"
                        cols="60"
                        name="message"
                        required
                     />
                  </div>

                  <div className="py-3 text-left">
                     <textarea
                        className="border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        placeholder="Your Private Key Here ...."
                        rows="3"
                        cols="60"
                        name="Pkey"
                        required
                     />
                  </div>
                  <div className="py-3 text-left">
                     <textarea
                        className="border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                        rows="3"
                        cols="60"
                        value={Password}
                        name="message"
                     />
                  </div>
                  <div className="py-2">
                     <button
                        type="submit"
                        className="border-2 border-gray-100 focus:outline-none bg-green-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg "
                     >
                        Decrypt
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Decrypt;
