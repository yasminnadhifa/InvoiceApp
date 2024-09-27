import React from 'react'

const Input = (props) => {
    const { placeholder, name, type, value, onChange } = props
  return (
    <input 
    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 placeholder-gray-400 hover:border-primary-500' 
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}  
    onChange={onChange}
    id={name}
    style={{outline: 'none'}}/>
  )
}

export default Input