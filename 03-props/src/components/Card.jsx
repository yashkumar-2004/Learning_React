import React from 'react'

const Card = (props) => {
  console.log(props.user,props.age);
  
  return (
   
      <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Age: {props.age}</p>
        <p>Software Engineer</p>
        <button>View Profile</button>
      </div>
  
  )
}

export default Card