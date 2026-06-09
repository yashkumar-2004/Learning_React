import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-10 h-[90vh] gap-10 py-10 items-center flex '>
      <LeftContent/>
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content