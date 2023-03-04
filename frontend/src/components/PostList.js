/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function PostList(props) {
   return (
      <div>
         {props.data.map(post => (
            <div key={post.id} className="bg-white rounded-lg p-4 shadow-sm max-w-2xl ">
               <div className="flex items-start bg-[#dae0ec] rounded-lg">
                  <div className="flex-shrink-0 mr-3">
                     <img
                        className=" m-2 h-16 w-16 rounded-full"
                        src="https://picsum.photos/200/300"
                        alt="Profile picture"
                     />
                  </div>
                  <div className="w-full ">
                     <div className="m-3">
                        <h3
                           id="post-content"
                           name="title"
                           className="underline capitalize w-full border rounded-lg p-2 focus:outline-none focus:shadow-outline text-lg "
                           required
                        >
                           {post.title}
                        </h3>
                     </div>
                     <div className="m-2">
                        <h3
                           id="post-content"
                           name="title"
                           className="w-full border rounded-lg p-2 focus:outline-none focus:shadow-outline text-md "
                           required
                        >
                           {post.text}
                        </h3>
                     </div>
                     <div className="ml-5 m-1 flex justify-between items-center">
                        <div>
                           <p
                              type="button"
                              className="text-blue-400 hover:text-blue-600 mr-2"
                           >
                              <h5>Posted on:</h5>
                              <p className=" text-red-600">{post.createdAt}</p>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
