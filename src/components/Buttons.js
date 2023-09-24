import React from 'react'

const Buttons = ({name}) => {
  return (
    <div className='box-border'>

        <button className='px-4 py-1 m-1 bg-gray-100 rounded-lg'>{name}</button>
    </div>
  )
}

export default Buttons;