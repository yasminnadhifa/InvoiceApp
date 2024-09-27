import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAddchart } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(prev => !prev); // Toggle sidebar visibility
    };

    const closeSidebar = () => {
        setIsOpen(false); // Close sidebar
    };

    return (
        <div className="flex h-full">
            {/* Sidebar */}
            <div 
                className={`fixed inset-y-0 left-0 bg-white text-white transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block md:w-64`}>
                <div className="flex items-center justify-center p-4">
                    <Link to='/'>
                    <h2 className="text-xl font-bold text-black">Invoice<span className='text-primary-500'>App</span></h2>
                    </Link>
                    <button onClick={closeSidebar} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9.293l4.293-4.293 1.414 1.414L10 12.121 4.293 6.414 5.707 5l4.293 4.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col  p-4">
                    <Link to="/dashboard" className={`flex items-center text-grey py-2 px-4 hover:bg-primary-100 hover:rounded hover:py-2 hover:px-4 mb-2 ${location.pathname === '/dashboard' ? 'bg-primary-100 rounded py-2 px-4' : ''}`} onClick={closeSidebar}><RxDashboard className="mr-2"/>Dashboard</Link>
                    <Link to="/invoices" className={`flex items-center text-grey py-2 px-4 hover:bg-primary-100 hover:rounded hover:py-2 hover:px-4 mb-2 ${location.pathname === '/invoices' ? 'bg-primary-100 rounded py-2 px-4' : ''}`} onClick={closeSidebar}><MdOutlineAddchart className='mr-2'/>Add Invoice</Link>
                    <Link to="/published_invoice" className={`flex items-center text-grey py-2 px-4 hover:bg-primary-100 hover:rounded hover:py-2 hover:px-4 mb-2 ${location.pathname === '/published_invoice' ? 'bg-primary-100 rounded py-2 px-4' : ''}`} onClick={closeSidebar}><IoReaderOutline className='mr-2' />Published Invoice</Link>
                </nav>
            </div>
            
            {/* Main Content Area */}
            <div className={`bg-silver flex-grow transition-all duration-300 ease-in-out ${isOpen ? "md:ml-64" : "md:ml-0"} h-full`}>
                {/* Navbar */}
                <div className="bg-primary-300 text-white py-4 flex items-center justify-between px-4 md:px-8 h-16">
                    {/* Toggle Button for Sidebar on Mobile */}
                    <button onClick={toggleSidebar} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            {isOpen ? (
                                <path fillRule="evenodd" d="M10 9.293l4.293-4.293 1.414 1.414L10 12.121 4.293 6.414 5.707 5l4.293 4.293z" clipRule="evenodd" />
                            ) : (
                                <path fillRule="evenodd" d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Render child components here */}
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
