import React from 'react'

function Textarea({ label, name, styles, ...others}) {
  return (
    <div className='flex flex-col items-start justify-start gap-3 '>
      <label htmlFor={name} className="cursor-pointer text-sm">{label}</label>
      <textarea id={name} name={name} className={`${styles} w-full h-[132px] border border-custom-gray-100 rounded-md outline-none resize-none px-4 py-3`} {...others}></textarea>
    </div>
  )
}

export default Textarea