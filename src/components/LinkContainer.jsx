import React from 'react'
import Link from './Link'

const links = [
  { id: 'twitter', name : "twitter", link : "https://twitter.com/ayi_dev"},
  { id: "btn_zuri", name : "zuri team", link : "https://training.zuri.team"},
  { id: "books", name : "zuri books", link : "https://books.zuri.team"},
  { id: "book_python", name : "python books", link : "https://books.zuri.team/python-for-beginners?ref_id=boivado2"},
  {id: "pitch", name: "background check for coders", link: "https://background.zuri.team" },
  {id: "book_design", name : "design books", link : "https://books.zuri.team/design-rules"},


]
function LinkContainer() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-8 max-w-[800px] mx-auto">
      {
        links.map(link => (
          <Link key={link.id} data={link} />
        ))
      }
      </div>
  )
}

export default LinkContainer