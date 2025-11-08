
import React, { useState, useEffect } from 'react';

// --- HEADER COMPONENT ---
const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Geofence', href: '#geofence' },
        { name: 'Stations', href: '#stations' },
        { name: 'Rentals', href: '#rentals' },
        { name: 'About Us', href: '#about-us' }
    ];

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-walor-dark bg-opacity-80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-3xl font-black text-white tracking-wider">WALOR <span className="text-walor-blue">ENERGY</span></a>
                
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                         <a key={link.name} href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-white hover:text-walor-blue transition-colors duration-300 font-medium">{link.name}</a>
                    ))}
                    <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="bg-walor-blue text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105">Contact Us</a>
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Toggle menu">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-walor-dark bg-opacity-95">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(link => (
                             <a key={link.name} href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-white text-lg hover:text-walor-blue transition-colors duration-300 font-medium">{link.name}</a>
                        ))}
                        <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="bg-walor-blue text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105">Contact Us</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;