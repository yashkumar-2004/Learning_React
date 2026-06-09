import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='h-full w-3/12'>
      <div className='flex flex-col gap-10 h-full py-10'>
        
        <h1 className='text-4xl font-extrabold px-10  '>
          Prospective customer segmentation
        </h1>

        <p className='px-10 text-base text-gray-500 mt-15 '>
          Depending on customer satisfaction and success to banking products,
          potential target audience can be divided into three groups.
        </p>

        <div className='px-10 mt-auto'>
          <div className='w-12 h-12 rounded-full bg-black text-white flex items-center justify-center'>
            <i className="ri-arrow-right-up-line text-xl"></i>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeftContent