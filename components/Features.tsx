
import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import BatteryIcon from './icons/BatteryIcon';
import SwapIcon from './icons/SwapIcon';
import SpeedIcon from './icons/SpeedIcon';
import CarRentalIcon from './icons/CarRentalIcon';

// --- FEATURE CARD SUB-COMPONENT ---
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number; isVisible: boolean }> = ({ icon, title, description, delay, isVisible }) => (
    <div className={`bg-walor-dark/50 backdrop-blur-sm border border-walor-gray/20 p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${delay}s` }}>
        <div className="text-walor-blue mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);

// --- FEATURES COMPONENT ---
const Features: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="features" className="py-20 bg-walor-dark text-white">
            <div className="container mx-auto px-6">
                <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">The <span className="text-walor-blue">Walor</span> Advantage</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Our unique dual-battery system ensures you're always on the move.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard 
                        isVisible={isVisible}
                        icon={<BatteryIcon className="w-12 h-12" />} 
                        title="Fixed Main Battery" 
                        description="Our primary high-capacity battery offers a solid 140km range for your daily commutes and city drives." 
                        delay={0.1} 
                    />
                    <FeatureCard 
                        isVisible={isVisible}
                        icon={<SwapIcon className="w-12 h-12" />} 
                        title="Instant Swappable Battery" 
                        description="Run out of charge? Instantly add another 140km range with our portable, swappable battery." 
                        delay={0.2} 
                    />
                    <FeatureCard 
                        isVisible={isVisible}
                        icon={<SpeedIcon className="w-12 h-12" />} 
                        title="Uninterrupted Journeys" 
                        description="Combine both batteries for a total range of 280km. Range anxiety is a thing of the past." 
                        delay={0.3} 
                    />
                    <FeatureCard 
                        isVisible={isVisible}
                        icon={<CarRentalIcon className="w-12 h-12" />} 
                        title="Ecosystem of Rentals" 
                        description="Access our fleet of rental cars, all integrated with the same seamless battery swap network." 
                        delay={0.4} 
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
