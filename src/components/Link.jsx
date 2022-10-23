import React from 'react'

function Link(props) {

  const {id, name, link} = props.data
  return (
    <div className=' px-7 py-3 text-custom-text-black bg-custom-gray w-full rounded-md text-center font-medium text-lg'>
      <a href={link} id={id} target="_blank" rel="noopener noreferrer">{name}</a>
    </div>
  )
}

export default Link