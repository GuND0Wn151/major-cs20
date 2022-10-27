import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(e.target)
    const data = new FormData(e.target)
    const user = {
      email:data.get("email"),
      password:data.get("password")
    }
    if (user.email === "  " || user.password === " ") {
      alert("Please fill all the fields");
    }
    else {
      axios.post(
      "http://localhost:1235/api/auth/login",
     {
      email:data.get("email"),
      password:data.get("password")
    },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
      ).then((res)=>{
        if(res.data.token){
          localStorage.setItem("token",res.data.token)
          navigate("/")
        }
      }

      )
    }
  }

  return (
    <div lassName="min-h-screen flex flex-col bg-loginpage bg-cover  bg-no-repeat">
      <div className="flex flex-1 items-center justify-center  ">
        <div className="rounded-lg sm:border-3 border-gray-400 px-4 lg:px-20 py-16 bg-white  shadow-inner  lg:max-w-xl  w-full text-center">
          <form className="text-center" onSubmit={handleSubmit}>
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full  h-full text-black-600">
              Login Page
            </h1>
            <div className="py-2 text-left">
              <input
                type="email"
                className="bg-gray-200 border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="password"
                className="bg-gray-100 border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-green-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg "
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center">
            <a href="/" className="hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="text-center mt-12">
            <span></span>
            <span>Dont have an account?</span>
          </div>
          <div className="text-center">
            <a
              href="/register"
              className="font-light text-md text-red-600 underline font-semibold "
            >
              Create One Here..
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
