import React from 'react'
import Label from './Label'

const Form = (props) => {
  const { name, judulLabel, children, gap} = props
  return (
<div className={`grid w-full grid-cols-1 md:grid-cols-8 gap-4 items-center mb-4`}>
  <div className='col-span-1 md:col-span-1'>
    <Label name={name}>{judulLabel}</Label>
  </div>
  <div className='col-span-2 md:col-span-7'>
    {children}
  </div>
</div>



  )
}

export default Form