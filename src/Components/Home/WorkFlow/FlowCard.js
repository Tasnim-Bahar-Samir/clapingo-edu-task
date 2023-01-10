import React from 'react'

const FlowCard = ({title, details}) => {
  return (
    <div className='px-6 py-8 shadow-xl rounded-lg mb-20'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-[16px]'>{details}</p>
    </div>
  )
}

export default FlowCard