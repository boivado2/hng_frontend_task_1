import React from 'react'

function Textarea({id, label, name, styles, ...others}) {
  return (
    <div className='flex flex-col items-start justify-start gap-3'>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={name} className={`${styles} w-full h-[132px] border border-custom-gray-100 rounded-md outline-none resize-none px-4 py-3`} {...others}></textarea>
    </div>
  )
}

export default Textarea