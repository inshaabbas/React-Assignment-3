import { useState } from "react"
import { HashLink } from "react-router-hash-link"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <HashLink
          smooth
          to="/#hero"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => setOpen(false)}
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Course<span className="text-teal-700">space</span>
          </span>
        </HashLink>

        {/* RIGHT SIDE (Desktop Buttons + Mobile Toggle) */}
        <div className="flex items-center md:order-2 gap-3">

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-3">
            <button
              type="button"
              className="text-teal-700 text-sm border-2 border-teal-700 rounded-base px-3 py-2 "
            >
              Sign In
            </button>

            <button
              type="button"
              className="text-white bg-teal-700 rounded-base text-sm px-3 py-2"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-expanded={open}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        {/* MENU (Links + Mobile Buttons) */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 ${open ? "block" : "hidden"
            }`}
        >
          <ul className="flex flex-col w-full p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <HashLink
                smooth
                to="/#hero"
                onClick={() => setOpen(false)}
                className="block py-2 px-3 text-gray-500 rounded md:border-0 md:p-0 text-base hover:text-teal-700 font-semibold"
              >
                Home
              </HashLink>
            </li>

            <li>
              <HashLink
                smooth
                to="/#courses"
                onClick={() => setOpen(false)}
                className="block py-2 px-3 text-gray-500 rounded md:border-0 md:p-0 text-base hover:text-teal-700 font-semibold"
              >
                Courses
              </HashLink>
            </li>

            <li>
              <HashLink
                smooth
                to="/#testimonial"
                onClick={() => setOpen(false)}
                className="block py-2 px-3 text-gray-500 rounded md:border-0 md:p-0 text-base hover:text-teal-700 font-semibold"
              >
                Testimonial
              </HashLink>
            </li>

            <li>
              <HashLink
                smooth
                to="/#mentor"
                onClick={() => setOpen(false)}
                className="block py-2 px-3 text-gray-500 rounded md:border-0 md:p-0 text-base hover:text-teal-700 font-semibold"
              >
                Mentor
              </HashLink>
            </li>

            {/* Mobile buttons */}
            <li className="flex flex-col gap-3 mt-4 md:hidden">
              <button className="text-white bg-brand rounded-base px-3 py-2">
                Sign In
              </button>
              <button className="text-white bg-brand rounded-base px-3 py-2">
                Sign Up
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header