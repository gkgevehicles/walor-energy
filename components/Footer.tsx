
import React from 'react';

// --- FOOTER COMPONENT ---
const Footer: React.FC = () => (
    <footer className="bg-walor-dark text-gray-300">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-black text-white tracking-wider mb-4">WALOR <span className="text-walor-blue">ENERGY</span></h3>
                    <p className="text-gray-400">Revolutionizing electric mobility in India and beyond.</p>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#features" className="hover:text-walor-blue transition-colors">Features</a></li>
                        <li><a href="#how-it-works" className="hover:text-walor-blue transition-colors">How It Works</a></li>
                        <li><a href="#rentals" className="hover:text-walor-blue transition-colors">Rentals</a></li>
                        <li><a href="#about-us" className="hover:text-walor-blue transition-colors">About Us</a></li>
                        <li><a href="#contact" className="hover:text-walor-blue transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-walor-gray/50 pt-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Walor Energy. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;