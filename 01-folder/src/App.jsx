import React from 'react'

const App = () => {
  return (
    <> {/* React Fragment used to group multiple elements without adding extra nodes to the DOM */ }
    <div id='father'>
      <h1>Hello I am the father</h1>
    </div>
    <div id='uncle'>
      <h2>Hello I am the uncle</h2>
    </div>
    </>
  )
}

export default App