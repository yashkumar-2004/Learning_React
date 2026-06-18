import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(100)

  useEffect(()=>{
    
    console.log('a is changing...');
    
  },[a])
  useEffect(()=>{
    
    console.log('b is changing...');
    
  },[b])

  return (
    <div>
      <h3>A {a}</h3>
      <h3>B {b}</h3>
      <button
      onClick={()=>{
        setA(a+1)
      }}
      >Change A</button>
      <button
      onClick={()=>{
        setB(b+10)
      }}
      >Change B</button>
    </div>
  )
}

export default App