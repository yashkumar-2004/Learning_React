import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Yash Kumar' age={22} img="https://images.unsplash.com/photo-1732928352958-6a5457878319?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGZwfGVufDB8fDB8fHww"/>
      <Card user='John Doe' age={30} img="https://images.unsplash.com/photo-1777971911576-de6d56a93681?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
      <Card user='Jane Smith' age={25} img="https://images.unsplash.com/photo-1771747131849-41056d3d9be3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" />
      <Card user='Bob Johnson' age={35} img="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App

