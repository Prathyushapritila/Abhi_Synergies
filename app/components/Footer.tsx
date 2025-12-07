import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-textMain text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 border-2 border-white flex items-center justify-center rounded-sm">
              <span className="font-serif text-2xl font-bold text-brandOrange">ABHI</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © Abhi Elite Services. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-300 hover:text-brandOrange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brandOrange focus:ring-offset-2 focus:ring-offset-textMain rounded px-2 py-1"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-brandOrange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brandOrange focus:ring-offset-2 focus:ring-offset-textMain rounded px-2 py-1"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

