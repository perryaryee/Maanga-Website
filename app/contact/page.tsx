"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import image_9 from "../../assets/creket_10.jpg";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to an API
        alert("Message sent! (This is a demo)");
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            {/* Hero Section */}
            <PageHero
                title="Contact Us"
                subtitle="Have questions about our services, partnerships, or need support? We'd love to hear from you."
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
            />

            {/* Main Content */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                        {/* Contact Cards */}
                        <FadeIn delay={0.1}>
                            <div className="bg-gradient-to-br from-awcc-primary to-awcc-primary-light text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="relative z-10">
                                    <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Email Us</h3>
                                    <p className="text-white/90 mb-1 text-sm">info@swiftgo.gh</p>
                                    <p className="text-white/90 text-sm">support@swiftgo.gh</p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <div className="bg-gradient-to-br from-awcc-secondary to-awcc-secondary-light text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="relative z-10">
                                    <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Call Us</h3>
                                    <p className="text-white/90 mb-1 text-sm">+233 XX XXX XXXX</p>
                                    <p className="text-white/90 text-sm">Mon-Fri, 8am-5pm</p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-awcc-primary/30 transition-all duration-300 group h-full">
                                <div className="bg-awcc-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-awcc-primary group-hover:bg-awcc-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Visit Us</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Accra Headquarters<br />
                                    Accra, Ghana<br />
                                    West Africa
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Contact Form Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            <FadeIn delay={0.25}>
                                <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
                                    <h2 className="text-3xl font-bold mb-2 text-gray-900">Send us a Message</h2>
                                    <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                                    
                                    {/* Google Map Placeholder */}
                                    <div className="mb-8 rounded-xl overflow-hidden border border-gray-200">
                                        <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                                            <div className="text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400 mx-auto mb-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                                <p className="text-gray-500 text-sm">Google Map Location</p>
                                                <p className="text-gray-400 text-xs mt-1">Accra, Ghana</p>
                                            </div>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-awcc-primary focus:border-awcc-primary outline-none transition-all hover:border-awcc-primary/50"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-awcc-primary focus:border-awcc-primary outline-none transition-all hover:border-awcc-primary/50"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-awcc-primary focus:border-awcc-primary outline-none transition-all hover:border-awcc-primary/50"
                                                placeholder="+233 XX XXX XXXX"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={6}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-awcc-primary focus:border-awcc-primary outline-none transition-all resize-none hover:border-awcc-primary/50"
                                                placeholder="Tell us more about your inquiry..."
                                            ></textarea>
                                        </div>

                                        <Button type="submit" size="lg" className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-xl bg-awcc-primary text-white hover:bg-awcc-primary-light">
                                            Send Message
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 inline">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                            </svg>
                                        </Button>
                                    </form>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Additional Info */}
                        <div className="lg:col-span-1">
                            <FadeIn delay={0.3}>
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-md h-full">
                                    <h3 className="text-xl font-bold mb-6 text-gray-900">Office Hours</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                            <span className="text-gray-600 font-medium">Monday - Friday</span>
                                            <span className="text-gray-900 font-semibold">8:00 AM - 5:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                            <span className="text-gray-600 font-medium">Saturday</span>
                                            <span className="text-gray-900 font-semibold">9:00 AM - 2:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 font-medium">Sunday</span>
                                            <span className="text-gray-900 font-semibold">Closed</span>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="text-xl font-bold mb-6 text-gray-900">Connect With Us</h3>
                                        <p className="text-gray-600 mb-6 text-sm">Follow us on social media for the latest updates and news.</p>
                                        <div className="flex gap-4">
                                            {/* Social Placeholders */}
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-awcc-primary hover:text-white transition-all cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769 1.079-2.692 3.033-2.692.936 0 1.744.066 1.967.096v2.196z" />
                                                    </svg>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
