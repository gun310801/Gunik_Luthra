import Link from "next/link"
import { smoothScroll } from "../utils/smoothScroll"

export default function Header() {
  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-md text-blue-600 py-4 sticky top-0 z-10 shadow-md">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8">
          {["Home", "Education", "Projects", "Experience", "Publications", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={smoothScroll}
                className="hover:text-blue-800 transition-colors duration-200 text-lg font-medium"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

