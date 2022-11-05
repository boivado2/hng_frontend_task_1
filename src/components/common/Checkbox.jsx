import React from 'react'

function Checkbox({style, name, ...other}) {
  return (
    <div className='flex gap-4 justify-start items-center'>
      <input type="checkbox" id={name} name={name} className={` ${style} focus:backdrop-blur-md active:bg-custom-blue-100`} {...other} />
      <p className=' text-sm'>You agree to providing your data to boivado2 who may contact you.</p>
    </div>
  )
}

export default Checkbox