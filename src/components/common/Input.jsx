import React from 'react'

function Input({ label, name, styles, ...other }) {
  console.log(label, name)
  return ( 
    <div className='flex flex-col justify-start items-start gap-4'>
      <label htmlFor={name} className=" text-sm">{ label}</label>
      <input {...other}  id={name} name={name} className={`${styles} text-base px-4 py-3 w-full border border-custom-gray-100 rounded-md outline-none`} />
    </div> 
  )
}

export default Input