
import React, { useState, useEffect, useRef } from 'react';

// --- ICONS (as JSX components) ---
const BatteryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 7H14.5V5.5C14.5 4.67 13.83 4 13 4H11C10.17 4 9.5 4.67 9.5 5.5V7H8C6.9 7 6 7.9 6 9V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V9C18 7.9 17.1 7 16 7ZM11.5 14.5H10V16H14V14.5H12.5V13H14V11.5H10V13H11.5V14.5Z" />
  </svg>
);

const SwapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
  </svg>
);

const SpeedIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.74 3.42l1.42 1.42C13.84 8.16 13 9.96 13 12s.84 3.84 2.15 5.15l-1.42 1.42C12.42 17.26 11 14.82 11 12s1.42-5.26 2.74-6.58zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
  </svg>
);

const CarRentalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11C5.84 5 5.28 5.42 5.08 6.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
  </svg>
);

// --- UTILITY HOOK for Intersection Observer ---
const useIntersectionObserver = (options: IntersectionObserverInit & { triggerOnce?: boolean }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                if (options.triggerOnce && ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isIntersecting] as const;
};

// --- IMAGE FALLBACK COMPONENT ---
const ImageWithFallback: React.FC<{
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ src, fallbackSrc, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} onError={handleError} alt={alt} {...props} />;
};


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
        { name: 'Stations', href: '#stations' },
        { name: 'Rentals', href: '#rentals' }
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

// --- HERO COMPONENT ---
const Hero: React.FC = () => (
    <section className="h-screen bg-walor-dark text-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617704548622-02829b4d4b7b?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-walor-dark via-walor-dark/50 to-walor-dark"></div>
        <div className="container mx-auto px-6 text-center z-10">
            <h1 className="text-5xl md:text-7xl font-black mb-4 animate-fade-in-up leading-tight">The Future of Mobility is Here.</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Walor Energy introduces India's first 4-wheelers with a groundbreaking dual-battery system. Never stop for a charge again.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
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

// --- FEATURES COMPONENT ---
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number; isVisible: boolean }> = ({ icon, title, description, delay, isVisible }) => (
    <div className={`bg-walor-dark/50 backdrop-blur-sm border border-walor-gray/20 p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${delay}s` }}>
        <div className="text-walor-blue mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);

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


// --- FOOTER COMPONENT ---
const Footer: React.FC = () => (
    <footer id="contact" className="bg-walor-dark text-gray-300">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
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
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                    <p className="text-gray-400">123 Future Drive, Bangalore, India</p>
                    <p className="text-gray-400">contact@walorenergy.com</p>
                </div>
            </div>
            <div className="mt-12 border-t border-walor-gray/50 pt-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Walor Energy. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="bg-walor-dark">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SwapStations />
        <Rentals />
      </main>
      <Footer />
    </div>
  )
}
