
import React, { useState } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

// --- CONTACT COMPONENT ---
const Contact: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });

    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // State for validation errors
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    // State for successful submission
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validate = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Full Name is required.';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email Address is required.';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email format.';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear the error for the field being edited
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted successfully:', formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' }); // Reset form
            setTimeout(() => setIsSubmitted(false), 5000); // Hide success message after 5 seconds
        } else {
            console.log('Form validation failed.');
        }
    };

    return (
        <section ref={ref} id="contact" className="py-20 bg-walor-dark text-white">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Get in <span className="text-walor-blue">Touch</span></h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Have a question or want to partner with us? We'd love to hear from you.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Contact Form */}
                    <div className={`w-full md:w-2/3 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {isSubmitted ? (
                            <div className="bg-green-500/20 border border-green-500 text-green-300 p-6 rounded-2xl shadow-lg text-center h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                <p>Your message has been sent successfully. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-walor-dark/50 backdrop-blur-sm border border-walor-gray/20 p-8 rounded-2xl shadow-lg space-y-6" noValidate>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full bg-walor-dark/70 border ${errors.name ? 'border-red-500' : 'border-walor-gray/30'} rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-walor-blue focus:border-walor-blue transition`}
                                        placeholder="Your Name"
                                        aria-invalid={!!errors.name}
                                        aria-describedby="name-error"
                                    />
                                    {errors.name && <p id="name-error" className="text-red-400 text-sm mt-2">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full bg-walor-dark/70 border ${errors.email ? 'border-red-500' : 'border-walor-gray/30'} rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-walor-blue focus:border-walor-blue transition`}
                                        placeholder="you@example.com"
                                        aria-invalid={!!errors.email}
                                        aria-describedby="email-error"
                                    />
                                    {errors.email && <p id="email-error" className="text-red-400 text-sm mt-2">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full bg-walor-dark/70 border ${errors.message ? 'border-red-500' : 'border-walor-gray/30'} rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-walor-blue focus:border-walor-blue transition`}
                                        placeholder="How can we help?"
                                        aria-invalid={!!errors.message}
                                        aria-describedby="message-error"
                                    ></textarea>
                                    {errors.message && <p id="message-error" className="text-red-400 text-sm mt-2">{errors.message}</p>}
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-walor-blue text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className={`w-full md:w-1/3 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                         <div className="bg-walor-dark/50 backdrop-blur-sm border border-walor-gray/20 p-8 rounded-2xl shadow-lg h-full">
                            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                            <p className="text-gray-300 mb-2">123 Future Drive, <br /> Bangalore, India</p>
                            <a href="mailto:contact@walorenergy.com" className="text-walor-blue hover:text-blue-400 transition-colors">contact@walorenergy.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
