
import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import ImageWithFallback from './ImageWithFallback';

// --- HOW IT WORKS COMPONENT ---
const HowItWorks: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });

    const steps = [
        { number: '01', title: 'Drive with Confidence', description: 'Enjoy a 140km range on your car\'s main fixed battery. Perfect for everyday use.' },
        { number: '02', title: 'Need More Range?', description: 'When the main battery is low, your swappable battery kicks in, or you can visit a nearby station.' },
        { number: '03', title: 'Swap in Seconds', description: 'Pull into a Walor Swap Station. Our automated system swaps your depleted battery for a fully charged one in under 2 minutes.' },
        { number: '04', title: 'Continue Your Journey', description: 'Drive off with another 140km of range, instantly. No waiting, no hassle.' },
    ];

    return (
        <section ref={ref} id="how-it-works" className="py-20 bg-walor-light overflow-x-hidden">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-black text-walor-dark mb-4">Simple, Swift, Seamless</h2>
                    <p className="text-lg text-walor-gray max-w-2xl mx-auto">Our battery swapping process is designed for your convenience.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                     <div className={`w-full md:w-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <ImageWithFallback 
                            src="https://images.unsplash.com/photo-1678513036152-a66a4f4b3a4a?q=80&w=1932&auto=format&fit=crop"
                            fallbackSrc="https://placehold.co/800x600/F1F5F9/64748B?text=Swap+Station"
                            alt="Battery Swap Station" 
                            className="rounded-2xl shadow-2xl object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        {steps.map((step, index) => (
                            <div 
                                key={step.number} 
                                className={`flex items-start transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                                style={{ transitionDelay: `${200 + index * 150}ms` }}
                            >
                                <div className="text-5xl font-black text-walor-blue mr-6">{step.number}</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-walor-dark mb-1">{step.title}</h3>
                                    <p className="text-walor-gray">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
