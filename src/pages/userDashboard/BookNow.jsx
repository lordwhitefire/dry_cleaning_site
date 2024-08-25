import React from 'react'
import Progress from '../../utils/Progress'
import Topbar from '../../component/Topbar'

const BookNow = () => {
  return (
    <div className="w-full bg-white max-w-screen-4xl min-h-screen  mx-auto">
      <Topbar />
      <div className='flex flex-col'>
        <div className='mx-3 md:mx-10 mt-8 mb-16'>
          <Progress />
        </div>
      </div>
    </div>
  )
}

export default BookNow