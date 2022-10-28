import React from 'react'
import profile_url from './assests/profile__img.png'
import share_arrow_icon from './assests/_Avatar share button (1).svg'
import share_dot_icon from './assests/_Avatar share button.svg'
import cameraIcon from './assests/Icon.svg'
import Overlay from './Overlay'


function Header() {
  return (
    <div className='flex flex-col justify-center items-center  px-5 py-4 gap-3 relative'>

      <div className=' absolute top-[15%] right-[10%] md:right-[20%]'>

        <a href='https://github.com/boivado2' target="_blank" rel="noopener noreferrer">
        <img src={share_arrow_icon} id="share-arrow-icon" className='hover:bg-custom-gray-100 w-10 h-10 rounded-full hidden md:block' alt='share-icon' />      
      </a>
          
          <a href='https://slack.com/John' target="_blank" rel="noopener noreferrer">
                  <img src={share_dot_icon} id="share-dot-icon" className=' w-8 h-8 rounded-full md:hidden hover:bg-custom-gray-100' alt='share-icon' />
        </a>

      </div>
      
      <div id='profile_img_container' className=' cursor-pointer relative'>
        <img src={profile_url} id="profile_url" className=' w-28 h-28 rounded-full' alt='profile_url ' />
        <img src={cameraIcon} id="camera_icon" alt='camera-icon' className=' invisible absolute top-16 left-[40%]' />
        <Overlay styles=" rounded-full invisible"/>

     </div>

      <h3 className=' font-medium text-base md:text-xl text-custom-text-black py-4' id='twitter'>Ayebamondiafere Godwin</h3>
      <h3 id="slack" className=' invisible'>John Ayebamondiafere Godwin</h3>
    </div>
  )
}

export default Header