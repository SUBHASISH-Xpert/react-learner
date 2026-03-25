function Body() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100">

      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to My Website 🚀
      </h1>

      <p className="mt-4 text-gray-600 text-center max-w-xl">
        This is a simple UI created using React and Tailwind CSS.
        You can build modern responsive websites using this setup.
      </p>

      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
        Get Started
      </button>

    </div>
  )
}

export default Body