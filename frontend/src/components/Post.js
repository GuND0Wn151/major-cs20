import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Post() {
   return (
      <div className="border-red-500 bg-slate-200">
         <div className="border-red-500 mt-8 flex  w-[30rem]">
            <div>
               <img
                  src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                  alt={`'s profile image`}
                  className="w-16 h-16 rounded-full object-fit mr-4 "
                  width="384"
                  height="512"
               />
            </div>
            <div>
               <form action="">
                  <textarea
                     name="message"
                     id=""
                     cols="50"
                     rows="10"
                     placeholder="Write Something Here..."
                     className="border-gray-300 border-2 pl-4 pt-2 bg-slate-200"
                  ></textarea>
                  <label for="file-input">
                     <FontAwesomeIcon icon="fa-solid fa-image" />
                  </label>
                  <input type="file" id="file-input" className="none" />
               </form>
            </div>
         </div>
      </div>
   );
}

export default Post;
