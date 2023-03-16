import React from 'react'
import StackButton from '../Button/StackButton'


const TechStack = ({ title, logo }) => {
  return (
    <div className='mx-2 my-2'>
        <StackButton><img src={logo} className='w-7' alt="" />{title}</StackButton>
    </div>
  )
}

export default TechStack