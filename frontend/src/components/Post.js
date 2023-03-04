import axios from "axios";
import React, { useState,useEffect } from "react";
import PostList from "../components/PostList";

const Post = () => {
   const [postContent, setPostContent] = useState("");
   const [postTitle, setpostTitle] = useState("");
   const [posts, setposts] = useState([]);

   useEffect(() => {
     axios
        .get("http://localhost:1235/api/getposts", {
           headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
           },
        })
        .then((res) => {
           console.log(res.data);
           setposts(res.data);
        });
   },[] )
   
   const handleSubmit = (event) => {
     axios
        .get("http://localhost:1235/api/getposts", {
           headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
           },
        })
        .then((res) => {
           console.log(res.data);
           setposts(res.data);
        });
      event.preventDefault();
      console.log(event.target);
      const message = new FormData(event.target);
      const data = {
         email: message.get("message"),
      };
      axios.post(
         "http://localhost:1235/api/post",
         {
            message: message.get("message"),
            title: message.get("title"),
            email: localStorage.getItem("user-email"),
         },
         {
            headers: {
               "Access-Control-Allow-Origin": "*",
               "Content-Type": "application/json",
            },
         }
      );
   };

   return (
      <>
         <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-4 shadow-sm max-w-2xl border-blue-500"
         >
            <div className="flex items-start bg-[#dae0ec] rounded-lg">
               <div className="flex-shrink-0 mr-3">
                  <img
                     className=" m-2 h-16 w-16 rounded-full"
                     src="https://placekitten.com/200/200"
                     alt="Profile picture"
                  />
               </div>
               <div className="w-full ">
                  <div className="m-4">
                     <input
                        id="post-content"
                        value={postTitle}
                        name="title"
                        onChange={(e) => setpostTitle(e.target.value)}
                        placeholder="Need Something?"
                        className="w-full border rounded-lg p-2 focus:outline-none focus:shadow-outline text-lg border-blue-700"
                        rows={5}
                        required
                     />
                  </div>
                  <div className="m-4">
                     <textarea
                        id="post-content"
                        value={postContent}
                        name="message"
                        onChange={(event) => setPostContent(event.target.value)}
                        placeholder="Why U Need It?"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:shadow-outline text-lg border-blue-700"
                        rows={4}
                        required
                     />
                  </div>
                  <div className="flex justify-between items-center">
                     <div></div>
                     <button
                        type="submit"
                        className=" m-3 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline"
                     >
                        Post
                     </button>
                  </div>
               </div>
            </div>
         </form>

         
          <PostList data = {posts}/>
         
      </>
   );
};

export default Post;
