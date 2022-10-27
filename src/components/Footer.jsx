import React from 'react'
import zuriSlugSvg from './assests/I4G.svg'

function Footer() {
  return (
    <div className='w-full p-5 md:p-11'>
      <div className=' flex flex-col md:flex-row justify-start md:justify-between items-start sm:items-center gap-6 border-t-[0.6px] border-custom-gray py-5 text-center'>
      <h2 className=' font-medium text-base'>Zuri <span className=" bg-red-500 w-2 h-2 inline-block rounded-full"></span> Internship</h2>
        <p>HNG Internship 9 Frontend Task</p>
        <img src={zuriSlugSvg} alt="slug_img"/>
      </div>
    </div>
  )
}

export default Footer