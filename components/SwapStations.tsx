
import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

// --- SWAP STATIONS COMPONENT ---
const SwapStations: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.4, triggerOnce: true });

    return (
        <section id="stations" className="py-20 bg-walor-dark text-white bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=2070&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-walor-dark bg-opacity-80"></div>
            <div ref={ref} className={`container mx-auto px-6 relative z-10 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                 <h2 className="text-4xl md:text-5xl font-black mb-4">A Network That Grows With You</h2>
                 <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                     Our rapidly expanding network of automated swap stations ensures you're never far from a full battery. Find us in major cities, on highways, and in your neighborhood.
                 </p>
                 <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });}} className="bg-walor-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 inline-block shadow-lg shadow-blue-500/20">
                     Find a Station
                 </a>
            </div>
        </section>
    );
};

export default SwapStations;
