import React from 'react'
import {BsGlobe} from 'react-icons/bs'
export default function Footer() {
  return (
    <div>
    <div className='h-80  grid grid-cols-2 p-5 m-5 md:grid-cols-4 py-10 text-slate-400  text-center '>
     
      <p>FAQ</p>
      <p>Investor Relations</p>
      <p>Privacy</p>
      <p>Speed Test</p>
      <p>Help Centre</p>
      <p>Jobs</p>
      <p>Cookie Preferences</p>
      <p>Legal Notices</p>
      <p>Account</p>
      <p>Ways to watch</p>
      <p>Corporate Information</p>
      <p>Omly on Netflix</p>
      <p>Media Centre</p>
      <p>Terms of Use</p>
      <p>Contact Us</p>
    </div>
    <div className='flex justify-between'>
      
    <img src="https://media.wired.com/photos/592682057034dc5f91bebab8/master/pass/NetflixLogo2016.jpg" alt="Netflix" width={100} className="mx-auto" />
    <button className='flex px-4 py-1 items-center'><BsGlobe className='mr-2'/>English</button>
    </div>
    </div>
  )
}
