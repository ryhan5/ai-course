import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-4">
            Master Web Development
            <span className="block text-gray-400 mt-2">From Beginner to Pro</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Unlock your potential with our comprehensive web development course. 
            Learn the latest technologies and build real-world projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/enroll"
              className="block w-full rounded border-2 border-white bg-white px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition duration-300"
            >
              Enroll Now
            </Link>

            <Link
              href="/curriculum"
              className="block w-full rounded border-2 border-white px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:bg-gray-300 sm:w-auto transition duration-300"
            >
              View Curriculum
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero