import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get(
      'https://picsum.photos/v2/list?page=3&limit=30'
    )

    setUserData(response.data)
  }

  return (
    <div className='bg-black min-h-screen p-5'>

      <button
        className='bg-red-500 px-6 py-3 text-xl text-white rounded'
        onClick={getData}
      >
        Get Data
      </button>

      <div className='flex flex-wrap gap-9 mt-8'>

        {userData.map((elem, idx) => {
          return (
            <div key={idx} className='bg-gray-900 p-3 rounded'>

              <img
                src={elem.download_url}
                alt=""
                className='w-52 h-52 object-cover rounded-xl'
              />

              <h3 className='text-white mt-3'>
                {elem.author}
              </h3>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default App