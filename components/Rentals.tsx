
import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import ImageWithFallback from './ImageWithFallback';

// --- RENTALS COMPONENT ---
const Rentals: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });

    return (
    <section ref={ref} id="rentals" className="py-20 bg-white overflow-x-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className={`w-full md:w-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-black text-walor-dark mb-4">Rent the Revolution</h2>
                    <p className="text-lg text-walor-gray mb-6">
                        Experience the freedom of Walor Energy without ownership. Our rental fleet offers the latest models, fully integrated into our battery swapping ecosystem. It's the perfect solution for weekend trips, business travel, or simply trying out the future of driving.
                    </p>
                    <ul className="space-y-3 text-walor-gray mb-8">
                        <li className="flex items-center"><span className="text-walor-blue mr-3">&#10003;</span> Flexible rental plans</li>
                        <li className="flex items-center"><span className="text-walor-blue mr-3">&#10003;</span> Unlimited battery swaps included</li>
                        <li className="flex items-center"><span className="text-walor-blue mr-3">&#10003;</span> 24/7 roadside assistance</li>
                    </ul>
                     <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });}} className="bg-walor-dark text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 inline-block">
                         Book a Rental
                     </a>
                </div>
                <div className={`w-full md:w-1/2 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1621203591936-76a0a9e2f6d5?q=80&w=2070&auto=format&fit=crop"
                        fallbackSrc="https://placehold.co/800x600/ffffff/64748B?text=Rental+Fleet"
                        alt="Walor Energy Rental Car" 
                        className="rounded-2xl shadow-2xl object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
);
};

export default Rentals;
