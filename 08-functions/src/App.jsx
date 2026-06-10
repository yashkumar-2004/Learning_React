import React from 'react'

const App = () => {
  const onWriting=(val)=>{
    console.log(val);
    
  }
  
  return (
    <div>
      <input onChange={(elem)=>{
          onWriting(elem.target.value)
      }} type="text" placeholder='Enter your name' />
      
    </div>
  )
}

export default App