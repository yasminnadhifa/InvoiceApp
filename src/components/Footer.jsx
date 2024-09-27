import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center px-4">
                <div className="text-center md:text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} InvoceApp. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
