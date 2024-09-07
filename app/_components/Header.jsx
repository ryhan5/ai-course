import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-2 md:mb-0">
          Your Logo
        </Link>
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end">
          <nav className="mr-4">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
          <form className="flex">
            <input
              type="search"
              placeholder="Search..."
              className="px-2 py-1 bg-white text-black border border-gray-300 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-white text-black border border-l-0 border-gray-300 rounded-r hover:bg-gray-100"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header