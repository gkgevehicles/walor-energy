import React from "react";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import ImageWithFallback from "./ImageWithFallback";

// --- GEOFENCE COMPONENT ---
const Geofence: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const steps = [
    {
      number: "01",
      title: "Boundary Breach Protocol",
      description:
        "If the vehicle crosses its designated geofence, the battery system immediately ceases charging and discharging to prevent unauthorized use.",
    },
    {
      number: "02",
      title: "Automated Safety Measures",
      description:
        "The car automatically reduces speed while alerting the driver. Once momentum is lost, the brakes lock, immobilizing the vehicle completely.",
    },
    {
      number: "03",
      title: "Admin-Controlled Recovery",
      description:
        "The vehicle cannot be moved until a certified administrator grants remote permission, ensuring it can be safely recovered.",
    },
  ];

  return (
    <section
      ref={ref}
      id="geofence"
      className="py-20 bg-walor-light overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h2 className="text-4xl md:text-5xl font-black text-walor-dark mb-4">
            Geofence
          </h2>
          <p className="text-lg text-walor-gray max-w-2xl mx-auto">
            Our vehicles are equipped with state-of-the-art geofencing
            technology to ensure ultimate security and control, protecting your
            asset at all times.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 ease-out space-y-8 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}>
            {steps.map((step, index) => (
              <div
                className={`flex items-start transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 transla    te-x-0"
                    : "opacity-0 transalte-x-10"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}>
                <div>
                  <h3 className="text-2xl font-bold text-walor-dark mb-1">
                    {step.title}
                  </h3>
                  <p className="text-walor-gray">{step.description}</p>
                </div>
              </div>
            ))}
            {/* <ul className="space-y-4 text-walor-gray">
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
                        </ul> */}
          </div>
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}>
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
