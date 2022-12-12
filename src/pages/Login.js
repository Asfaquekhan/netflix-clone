import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { UserAuth } from "../component/context/Auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, singUp } = UserAuth();
  const navigate =useNavigate()
  const handleSumbit = (e) => {
    e.preventDefault();
    try {
      singUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user)
  return (
    <div className="w-full h-screen">
      <img
        className="absolute w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/ed2f162a-b9ef-43fd-8042-84978039a3ba/IN-en-20221206-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-20 z-50">
        <div className="max-w-[450px] h-[400px] mx-auto bg-black/75 ">
          <div className="max-w-[320px] mx-auto py-5">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form className="w-full flex flex-col py-4" onSubmit={handleSumbit}>
              <input
                className="p-3 my-2 bg-gray-600 rounded"
                type="email"
                name=""
               
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="p-3 my-2 bg-gray-600 rounded"
                type="password"
                name=""
                
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold" onClick={handleSumbit}>
                Sign In
              </button>
              <div className="flex justify-between items-center">
                <p>
                  <input className="mr-2" type="checkbox" name="" id="" />
                  Remember me
                </p>
                <p>Need Help</p>
              </div>
              <Link to="/signup">
                <p className="my-4 ">
                  <span className="text-gray-600 mr-2">New to Netflix?</span>
                  Sign up
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
