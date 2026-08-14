"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import image_9 from "../../assets/creket_10.jpg";
import contact from "../../assets/contact.jpg";

const socialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/share/1C182nWxrD/?mibextid=wwXIfr",
        icon: (
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/maangalogistics?igsh=d2J1ZGhudm1xb2Rl",
        icon: (
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        ),
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@maanga.logistics?_r=1&_t=ZS-98soISAXjVp",
        icon: (
            <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743 2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 0010.857-4.424V8.687a8.182 8.182 0 004.773 1.526V6.79a4.831 4.831 0 01-1.003-.104z" />
        ),
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/233540131193",
        icon: (
            <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.46 0 .09 5.37.09 11.96c0 2.11.55 4.17 1.6 5.98L0 24l6.21-1.63a11.98 11.98 0 005.84 1.49h.01c6.6 0 11.97-5.37 11.97-11.96 0-3.2-1.25-6.2-3.51-8.42zM12.06 21.84h-.01a9.95 9.95 0 01-5.07-1.39l-.36-.21-3.68.96.98-3.59-.23-.37a9.9 9.9 0 01-1.52-5.28c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 012.9 7.01c-.01 5.47-4.46 9.89-9.95 9.89zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35z" />
        ),
    },
];

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
                image={contact.src}
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
                                    <p className="text-white/90 mb-1 text-sm">info@maangalogistics.gh</p>
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
                                    <p className="text-white/90 mb-1 text-sm">+233 54 013 1193</p>
                                    <p className="text-white/90 mb-1 text-sm">+233 30 243 3953</p>

                                    <p className="text-white/90 text-sm">Monday - Sunday</p>
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
                                    Achimota<br />
                                    Tetteh Okulley Street<br />
                                    Accra, Ghana
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    GE-373-2740
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
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 font-medium">Monday - Sunday</span>
                                            <span className="text-gray-900 font-semibold">Open 24/7</span>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="text-xl font-bold mb-6 text-gray-900">Connect With Us</h3>
                                        <p className="text-gray-600 mb-6 text-sm">Follow us on social media for the latest updates and news.</p>
                                        <div className="flex gap-4">
                                            {socialLinks.map((social) => (
                                                <a
                                                    key={social.label}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={social.label}
                                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-awcc-primary hover:text-white transition-all cursor-pointer"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                                        {social.icon}
                                                    </svg>
                                                </a>
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
