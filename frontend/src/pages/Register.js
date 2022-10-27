import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
   const [register, setRegister] = React.useState(0);
  var handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData(e.target);
    const user = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(user)
    if (user.name && user.email && user.password) {
      axios
        .post(
          "http://localhost:1235/api/auth/register",
          {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            setRegister(1);
            console.log("over")
            navigate("/login")
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }
  return (
    <div className="min-h-screen flex flex-col bg-loginpage bg-cover  bg-no-repeat">
      <div className="flex flex-1 items-center justify-center  ">
        <div className="rounded-lg sm:border-3 border-gray-400 px-4 lg:px-20 py-16 bg-white  shadow-inner  lg:max-w-xl  w-full text-center">
          <form className="text-center" onSubmit={handleSubmit}>
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full  h-full text-black-600">
              Register
            </h1>
            <div className="py-2 text-left">
              <input
                type="text"
                className="bg-gray-200 border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                placeholder="Full Name"
                name="name"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="email"
                name="email"
                className="bg-gray-200 border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                placeholder="Email"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="password"
                name="password"
                className="bg-gray-100 border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                placeholder="Password"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="password"
                className="bg-gray-100 border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                placeholder="Confirm Password"
              />
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-green-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg "
              >
                Register
              </button>
            </div>
          </form>

          <div className="text-center mt-12">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register