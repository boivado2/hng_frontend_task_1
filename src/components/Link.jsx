import React from 'react'

function Link(props) {

  const {id, name, link} = props.data
  return (
  
      <a className=' px-7 py-3 text-custom-text-black bg-custom-gray w-full rounded-md text-center font-medium text-lg hover:bg-custom-gray-100 cursor-pointer capitalize' href={link} id={id} target="_blank" rel="noopener noreferrer">{name}</a>
  )
}

export default Link