import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white sticky top-0 z-50 shadow">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <div className="text-black text-2xl font-bold">
                    <Link to="/">invoice<span className='text-primary-500'>App</span></Link>
                </div>
                {/* <div className="hidden md:flex space-x-10">
                    <Link to="/" className={`text-black hover:text-primary-500 ${location.pathname === '/' ? 'text-primary-500' : ''}`}>Home</Link>
                </div> */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9.293l4.293-4.293 1.414 1.414L10 12.121 4.293 6.414 5.707 5l4.293 4.293z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-primary-500">
                    <div className="flex flex-col items-center space-y-2 p-4">
                        <Link to="/" className="text-black hover:text-primary-200" onClick={toggleMenu}>Home</Link>
                        <Link to="/about" className="text-black hover:text-primary-200" onClick={toggleMenu}>About</Link>
                        <Link to="/contact" className="text-black hover:text-primary-200" onClick={toggleMenu}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
