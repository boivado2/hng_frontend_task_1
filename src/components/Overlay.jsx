import React from 'react'

function Overlay({ styles }) {
  return (
    <div
      className={` absolute top-0 left-0 h-full w-full bg-custom-text-black opacity-[0.7] ${styles}`} id="overlay" >

      </div>
  )
}

export default Overlay