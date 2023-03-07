import { useEffect, useState } from "react";
import axios from "axios";

function Settings() {
   const [Age, setAge] = useState("");
   const [Description, setDescription] = useState("");
   const [Occupation, setOccupation] = useState("");
   const [Location, setLocation] = useState("");
   const userId = localStorage.getItem("userid");
   const [userDetails, setUserDetails] = useState({});
   const [Company, setCompany] = useState("");
   useEffect(() => {
      axios
         .get(`http://localhost:1235/users/${userId}`)
         .then((response) => {
            setUserDetails(response.data);
            console.log(response.data);
         })
         .catch((error) => {
            console.error(error);
         });
   }, [userId]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = { Age, Description, Occupation, Location, Company };
      try {
         const response = await axios
            .post(`http://localhost:1235/update/${userId}`, formData)
            .then((res) => {
               alert("Data saved successfully!");
               window.location.reload(false);
            });
         console.log(response);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="mt-4">
         <h3 className="text-xl font-bold text-center">
            Change your Details Here
         </h3>
         <form onSubmit={handleSubmit} className="mt-3 mx-auto max-w-screen-lg">
            <div className="flex flex-col gap-4">
               <div className="flex flex-col">
                  <label
                     htmlFor="age"
                     className="text-sm font-medium text-gray-700"
                  >
                     Age
                  </label>
                  <input
                     type="number"
                     name="age"
                     id="age"
                     value={Age}
                     placeholder={(() => {
                        if (
                           !userDetails.userDetails ||
                           !userDetails.userDetails.Age
                        ) {
                           return 21;
                        } else {
                           return userDetails.userDetails.Age;
                        }
                     })()}
                     onChange={(e) => setAge(e.target.value)}
                     className="mt-1 p-2 rounded-md bg-gray-100"
                  />
               </div>
               <div className="flex flex-col">
                  <label
                     htmlFor="occupation"
                     className="text-sm font-medium text-gray-700"
                  >
                     Occupation
                  </label>
                  <input
                     type="text"
                     name="occupation"
                     id="occupation"
                     value={Occupation}
                     placeholder={(() => {
                        if (
                           !userDetails.userDetails ||
                           !userDetails.userDetails.Occupation
                        ) {
                           return "Student";
                        } else {
                           return userDetails.userDetails.Occupation;
                        }
                     })()}
                     onChange={(e) => setOccupation(e.target.value)}
                     className="mt-1 p-2 rounded-md bg-gray-100"
                  />
               </div>
               <div className="flex flex-col">
                  <label
                     htmlFor="description"
                     className="text-sm font-medium text-gray-700"
                  >
                     Company
                  </label>
                  <textarea
                     id="Company"
                     name="Company"
                     rows={3}
                     value={Company}
                     placeholder={(() => {
                        if (
                           !userDetails.userDetails ||
                           !userDetails.userDetails.Company
                        ) {
                           return "XYZ Company or XYZ College";
                        } else {
                           return userDetails.userDetails.Company;
                        }
                     })()}
                     onChange={(e) => setCompany(e.target.value)}
                     className="mt-1 p-2 rounded-md bg-gray-100"
                  />
               </div>
               <div className="flex flex-col">
                  <label
                     htmlFor="location"
                     className="text-sm font-medium text-gray-700"
                  >
                     Location
                  </label>
                  <input
                     type="text"
                     name="location"
                     id="location"
                     value={Location}
                     placeholder={(() => {
                        if (
                           !userDetails.userDetails ||
                           !userDetails.userDetails.Location
                        ) {
                           return "Hyderabad, India";
                        } else {
                           return userDetails.userDetails.Location;
                        }
                     })()}
                     onChange={(e) => setLocation(e.target.value)}
                     className="mt-1 p-2 rounded-md bg-gray-100"
                  />
               </div>
               <div className="flex flex-col">
                  <label
                     htmlFor="description"
                     className="text-sm font-medium text-gray-700"
                  >
                     Description
                  </label>
                  <textarea
                     id="description"
                     name="description"
                     rows={3}
                     value={Description}
                     placeholder={(() => {
                        if (
                           !userDetails.userDetails ||
                           !userDetails.userDetails.Description
                        ) {
                           return "Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo illum repudiandae minima consequatur ducimuslaboriosam reprehenderit quisquam, velit accusantium beataeincidunt sapiente quis illo molestias suscipit veniamperspiciatis. Nemo tenetur, consectetur odio quos minus,blanditiis repudiandae deserunt quibusdam magni quis et,perspiciatis accusamus pariatur voluptas odit nam praesentiumsequi possimus quod provident earum maiores ipsum temporaveniam! Voluptatum officiis magnam repellendus quam eaquecumque similique unde at, eum minima deserunt quas, fugit,facilis neque !";
                        } else {
                           return userDetails.userDetails.Description;
                        }
                     })()}
                     onChange={(e) => setDescription(e.target.value)}
                     className="mt-1 p-2 rounded-md bg-gray-100"
                  />
               </div>
            </div>

            <button
               type="submit"
               className="mt-6 block w-full px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
               Save
            </button>
         </form>
      </div>
   );
}

export default Settings;
