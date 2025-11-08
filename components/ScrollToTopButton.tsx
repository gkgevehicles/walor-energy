
import React, { useState, useEffect } from 'react';
import ArrowUpIcon from './icons/ArrowUpIcon';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-walor-blue text-white rounded-full p-3 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-walor-dark focus:ring-walor-blue transition-all duration-300 transform z-50 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <ArrowUpIcon className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTopButton;
