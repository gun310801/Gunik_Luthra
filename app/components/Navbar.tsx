import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Gunik Luthra
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/education" className="hover:underline">
              Education
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:underline">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/publications" className="hover:underline">
              Publications
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

