import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='relative shrink-0 h-full w-80 rounded-4xl overflow-hidden'>
      
      <img
        className='h-full w-full object-cover'
        src={props.img}
        alt=""
      />
      <RightCardContent id={props.id} tag={props.tag} />

      
    </div>
  )
}

export default RightCard