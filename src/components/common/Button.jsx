import React from 'react'

function Button({label, type, styles}) {
  return (
    <button type={type} className={` px-5 py-3 rounded-md text-base ${styles}`} id="btn__submit">{ label}</button>
  )
}

export default Button