/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from "react"
import MenuCategories from "./MenuCategories"
import Search from "./Search"

function Menu() {
  const [open, setOpen] = useState(false)

  return <div className="sticky top-0 z-40 w-full py-4 flex bg-white border-b border-gray-300 relative">
    <button onClick={() => setOpen(!open)}>
      <img src={open ? "/img/x.svg" : "/img/hamburger.svg"} alt="Menu" className="h-8 ml-4 lg:hidden" />
    </button>
    <img src="/img/producthunt.svg" alt="Product Hunt" className="h-8 ml-4" />
    <Search />
    <MenuCategories open={open} />
  </div>
}

export default Menu