import React, { useState } from 'react'

const App = () => {
  const [User, setUser] = useState({name:'Yash',age:22})
  function btnClicked(){
      setUser(prev=>({...prev,name:'John Doe',age:25})) // to change the content of an object 
      // Batch update
      //setNum(prev=>prev+1)
      //setNum(prev=>prev+1)
      //setNum(prev=>prev+1) value gets updated by 3
   
      // but if we do like given below value will be updated by only 1 
      //setNum(num+1)
      //setNum(num+1)
      //setNum(num+1)
  
      
  }


  return (
    <div>
      <h1>{User.name},{User.age}</h1>
      <button onClick={btnClicked} >Click</button>
    </div>
  )
}

export default App