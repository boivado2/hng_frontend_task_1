import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from './Link'

const links = [
  { id: 'twitter_link', name : "twitter", link : "https://twitter.com/ayi_dev", },
  { id: "btn__zuri", name : "zuri team", link : "https://training.zuri.team"},
  { id: "books", name : "zuri books", link : "https://books.zuri.team"},
  { id: "book__python", name : "python books", link : "https://books.zuri.team/python-for-beginners?ref_id=boivado2"},
  {id: "pitch", name: "background check for coders", link: "https://background.zuri.team" },
  { id: "book__design", name: "design books", link: "https://books.zuri.team/design-rules" },

]
function LinkContainer() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-8 max-w-[800px] mx-auto">
      {
        links.map(link => (
          <Link key={link.id} data={link} />
        ))
      }

<RouterLink id='contact' to={`/contact`} className=" px-7 py-3 text-custom-text-black bg-custom-gray w-full rounded-md text-center font-medium text-lg hover:bg-custom-gray-100 cursor-pointer capitalize">Contact</RouterLink>
      </div>
  )
}

export default LinkContainer