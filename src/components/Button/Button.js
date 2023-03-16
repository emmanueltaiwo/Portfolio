import React from 'react'

const Button = (props) => {
  return (
    <button className='px-16 py-2 font-sans font-semibold text-white transition duration-300 ease-in-out delay-300 bg-blue-600 border-b-8 border-blue-800 rounded shadow-lg shadow-blue-600/50 hover:skew-y-6 hover:border-b-8 hover:border-blue-700 w-max ml-auto mr-auto'>{props.children}</button>
  )
}

export default Button