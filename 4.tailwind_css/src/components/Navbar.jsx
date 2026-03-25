function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-400 font-mono">
        MY STARTUP INDIA
      </h1>

      <ul className="flex space-x-6">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Services</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar