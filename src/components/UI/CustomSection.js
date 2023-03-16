import React from 'react'

const CustomSection = (props) => {
  return (
    <div className='mt-36 ml-auto mr-auto flex flex-col gap-4'>
        {props.children}
    </div>
  )
}

export default CustomSection