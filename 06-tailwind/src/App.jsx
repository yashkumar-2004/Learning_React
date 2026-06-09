import React from 'react'

const App = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">Logo</h1>

       <ul className="flex gap-8">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
       </ul>
      </nav>
      <h1>This is the tutorial of tailwind</h1>
      
    </div>
  )
}

export default App