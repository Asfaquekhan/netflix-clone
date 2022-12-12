import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
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
            <h1 className="text-3xl font-bold">Sign up</h1>
  <form className="w-full flex flex-col py-4">
    <input className="p-3 my-2 bg-gray-600 rounded" type="email" name="" id="" placeholder="email"/>
    <input  className="p-3 my-2 bg-gray-600 rounded" type="password" name="" id="" placeholder="password" />
    <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign up</button>
    <div className="flex justify-between items-center">
        <p ><input className="mr-2" type="checkbox" name="" id="" />Remember me
    </p>
    <p>Need Help</p>
   
    </div>
    <Link to="/login">
    <p className="my-4 "><span className="text-gray-600 mr-2">Already Subscribed to Netflix</span>
    Sign In</p>
    </Link>
  </form>
          </div>
        </div>
      </div>
    </div>
  );
}
