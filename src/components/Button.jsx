import React from 'react'

const Button = (props) => {
    const { children, onClick } = props;
    return (
        <button onClick={onClick ? onClick : undefined} className='bg-primary-500 hover:bg-primary-200 text-white text-sm py-2 px-4 rounded'>
            {children}
        </button>
    )
}

export default Button