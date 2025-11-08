
import { useState, useEffect, useRef } from 'react';

// --- UTILITY HOOK for Intersection Observer ---
export const useIntersectionObserver = (options: IntersectionObserverInit & { triggerOnce?: boolean }) => {
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
