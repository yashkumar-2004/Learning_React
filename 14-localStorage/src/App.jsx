import React from 'react'

const App = () => {
  const user={
    username:'Yash',
    age:22,
  }
  localStorage.setItem('user',JSON.stringify(user))
  const userA=JSON.parse(localStorage.getItem('user'))
  console.log(userA);
  
  

  return (
    <div>App</div>
  )
}

export default App