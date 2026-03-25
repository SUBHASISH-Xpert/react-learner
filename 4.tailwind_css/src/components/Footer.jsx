function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            MyWebsite
          </h2>
          <p className="text-sm">
            This website is built using React and Tailwind CSS.
            It demonstrates modern UI design and responsive layouts
            for web development projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h2>

          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Services</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Contact
          </h2>

          <p>Email: info@mywebsite.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: India</p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2026 MyWebsite | Built with React & Tailwind CSS
      </div>

    </footer>
  )
}

export default Footer