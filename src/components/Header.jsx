import React from 'react'
import profile_url from './assests/me3.jpg'

function Header() {
  return (
    <div className='flex flex-col justify-center items-center mb-16 px-5 py-4 gap-3'>
      <img src={profile_url} id="profile_url" className=' w-28 h-28 rounded-full' alt='profile_url
      ' />
      <h3 className='' id='twitter'>Ayebamondiafere Godwin</h3>
      <h3 id="slack" className=' invisible'>John Ayebamondiafere Godwin</h3>
    </div>
  )
}

export default Header