import React from 'react'

const Label = (props) => {
    const { children, name } = props
  return (
    <label htmlFor={name} className='w-full text-nowrap text-sm font-medium text-gray-500'>{children}</label>
  )
}

export default Label