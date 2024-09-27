import React from 'react'
import logo from '/images/jumbotron.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center p-4">
    <div className="flex flex-col text-center md:text-left">
        <p className="text-4xl font-bold text-gray-600 font-inter">
        <span className='text-primary-500'>Simplify</span> your billing  
        </p>
        <p className="text-sm text-gray-500 mt-2">
        Create and manage invoices effortlessly in just a few clicks.
        </p>
        <div className='mt-5'>
        <Link to="/dashboard">
        <Button>Click Here</Button>
        </Link>
        </div>  
    </div>
    <div className="hidden md:block"> {/* Hide on mobile, show on medium screens and up */}
        <img src={logo} alt="Invoice Illustration" className="w-full h-[500px] object-contain" />
    </div>
</div>


  )
}

export default WelcomePage