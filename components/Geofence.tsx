
import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import ImageWithFallback from './ImageWithFallback';

// --- GEOFENCE COMPONENT ---
const Geofence: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });

    return (
        <section ref={ref} id="geofence" className="py-20 bg-walor-light overflow-x-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className={`w-full md:w-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <h2 className="text-4xl md:text-5xl font-black text-walor-dark mb-4">
                            Advanced <span className="text-walor-blue">Geofence</span> Security
                        </h2>
                        <p className="text-lg text-walor-gray mb-6">
                            Our vehicles are equipped with state-of-the-art geofencing technology to ensure ultimate security and control, protecting your asset at all times.
                        </p>
                        <ul className="space-y-4 text-walor-gray">
                            <li className="flex items-start">
                                <span className="text-walor-blue font-bold text-xl mr-3 mt-1">&#10148;</span>
                                <div>
                                    <h3 className="font-bold text-walor-dark text-lg">Boundary Breach Protocol</h3>
                                    <p>If the vehicle crosses its designated geofence, the battery system immediately ceases charging and discharging to prevent unauthorized use.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-walor-blue font-bold text-xl mr-3 mt-1">&#10148;</span>
                                <div>
                                    <h3 className="font-bold text-walor-dark text-lg">Automated Safety Measures</h3>
                                    <p>The car automatically reduces speed while alerting the driver. Once momentum is lost, the brakes lock, immobilizing the vehicle completely.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-walor-blue font-bold text-xl mr-3 mt-1">&#10148;</span>
                                <div>
                                    <h3 className="font-bold text-walor-dark text-lg">Admin-Controlled Recovery</h3>
                                    <p>The vehicle cannot be moved until a certified administrator grants remote permission, ensuring it can be safely recovered.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full md:w-1/2 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <ImageWithFallback 
                            src="https://images.unsplash.com/photo-1516893842880-5d81ada31313?q=80&w=1974&auto=format&fit=crop"
                            fallbackSrc="https://placehold.co/800x600/F1F5F9/0F172A?text=Geofence+Security"
                            alt="Geofence security map" 
                            className="rounded-2xl shadow-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Geofence;
