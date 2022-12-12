import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./context/Auth";

export default function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate =useNavigate()
const handlelogout= async()=>{
  try{
    await logOut()
    navigate('/')
  }catch(error){
 console.log(error)
  }
 
}
console.log(user.email)
  return (
    <div className="flex items-center justify-between p-4 z-50 sticky top-0">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/login">
            <button className="pr-4">Account</button>
          </Link>
         
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer" onClick={handlelogout}>
             Log Out
            </button>
         
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4">Sign In</button>
          </Link>
          <Link to="signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
