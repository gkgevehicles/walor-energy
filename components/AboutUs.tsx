
import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import ImageWithFallback from './ImageWithFallback';

// --- PROFILE CARD SUB-COMPONENT ---
const ProfileCard: React.FC<{
    imgSrc: string;
    fallbackSrc: string;
    name: string;
    title: string;
    bio: string;
    isVisible: boolean;
    delay: number;
}> = ({ imgSrc, fallbackSrc, name, title, bio, isVisible, delay }) => (
    <div 
        className={`bg-white text-center p-6 rounded-2xl shadow-lg transition-all duration-500 ease-out transform hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: `${delay}s` }}
    >
        <ImageWithFallback
            src={imgSrc}
            fallbackSrc={fallbackSrc}
            alt={name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
        />
        <h3 className="text-xl font-bold text-walor-dark">{name}</h3>
        <p className="text-walor-blue font-semibold mb-2">{title}</p>
        <p className="text-walor-gray text-sm">{bio}</p>
    </div>
);


// --- ABOUT US COMPONENT ---
const AboutUs: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

    const team = [
        {
            name: "Alexandre Moreau",
            title: "Founder & Chief Visionary Officer",
            bio: "With a passion for sustainable technology, Alexandre founded Walor Energy to solve India's EV range anxiety problem, envisioning a future of seamless green mobility.",
            imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
            fallbackSrc: "https://placehold.co/200x200/ffffff/64748B?text=Founder"
        },
        {
            name: "Priya Sharma",
            title: "Chief Executive Officer",
            bio: "Priya brings over 15 years of experience in the automotive industry. Her leadership is driving Walor's rapid expansion and operational excellence across the nation.",
            imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
            fallbackSrc: "https://placehold.co/200x200/ffffff/64748B?text=CEO"
        },
        {
            name: "Rohan Desai",
            title: "Chief Technology Officer",
            bio: "The mastermind behind our dual-battery system, Rohan leads the R&D team, constantly pushing the boundaries of what's possible in EV battery technology.",
            imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
            fallbackSrc: "https://placehold.co/200x200/ffffff/64748B?text=CTO"
        }
    ];

    return (
        <section ref={ref} id="about-us" className="py-20 bg-walor-light">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-black text-walor-dark mb-4">Meet the Visionaries</h2>
                    <p className="text-lg text-walor-gray max-w-3xl mx-auto">We are a team of innovators, engineers, and dreamers dedicated to creating a sustainable and convenient electric future for everyone.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <ProfileCard 
                            key={member.name}
                            name={member.name}
                            title={member.title}
                            bio={member.bio}
                            imgSrc={member.imgSrc}
                            fallbackSrc={member.fallbackSrc}
                            isVisible={isVisible}
                            delay={0.1 + index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;