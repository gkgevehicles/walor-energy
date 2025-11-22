
import React from 'react';
import ImageWithFallback from './ImageWithFallback';

// --- HERO COMPONENT ---
const Hero: React.FC = () => (
    <section className="h-screen bg-walor-dark text-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617704548622-02829b4d4b7b?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-walor-dark via-walor-dark/50 to-walor-dark"></div>
        <div className="container mx-auto px-6 text-center z-10">
            <h1 className="text-5xl md:text-7xl font-black mb-4 animate-fade-in-up leading-tight">The Future of Mobility is Here.</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 animate-fade-in-up" >
                Walor Energy introduces India's first 4-wheelers with a groundbreaking dual-battery system. Never stop for a charge again.
            </p>
            <div className="animate-fade-in-up">
                <a href="#features" onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });}} className="bg-walor-blue text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 inline-block shadow-lg shadow-blue-500/20">
                    Discover Our Innovation
                </a>
            </div>
        </div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-walor-dark to-transparent"></div>
         <ImageWithFallback 
            src="https://images.unsplash.com/photo-1614026480344-09c3ff835942?q=80&w=1932&auto=format&fit=crop"
            fallbackSrc="https://placehold.co/1200x600/0F172A/3B82F6?text=Walor+EV"
            alt="Walor Energy Electric Car" 
            className="absolute bottom-[-5%] md:bottom-[-15%] left-1/2 -translate-x-1/2 w-[90%] md:w-[65%] max-w-6xl object-contain z-0"
        />
    </section>
);

export default Hero;
