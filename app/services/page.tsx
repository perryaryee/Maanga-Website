import React from 'react';
import Link from 'next/link';
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import image_2 from "../../assets/Crekit_2.jpg";

export default function Services() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Our Services"
                subtitle="Comprehensive logistics solutions for individuals, businesses, and enterprises across Ghana"
                image="https://images.unsplash.com/photo-1601581875305-f5a44b2c2af0?w=1920&q=80"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Local Delivery */}
                    <FadeIn delay={0.1}>
                        <div className="mb-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                                <div>
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <span className="h-px w-8 bg-awcc-primary"></span>
                                        <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Service</span>
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Local Delivery</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        Our local delivery service offers same-day and scheduled delivery options for individuals and SMEs across Ghana. Whether you need to send documents, parcels, food, or packages, we've got you covered.
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Same-day delivery available</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Scheduled delivery options</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Real-time tracking</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Example Use Cases:</h3>
                                    <ul className="space-y-2 mb-6">
                                        <li className="text-gray-600">• Send documents</li>
                                        <li className="text-gray-600">• Send parcels</li>
                                        <li className="text-gray-600">• Send food or packages</li>
                                    </ul>
                                </div>
                                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                                        alt="Local Delivery"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Relocation & Moving */}
                    <FadeIn delay={0.2}>
                        <div className="mb-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                                <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1556912172-45b7fa8ef810?w=800&q=80"
                                        alt="Relocation & Moving"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <span className="h-px w-8 bg-awcc-primary"></span>
                                        <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Service</span>
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Relocation & Moving</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        Professional relocation services for homes, offices, and businesses. We handle everything from packing to safe transport, ensuring your belongings arrive safely at their destination.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Home moves</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Office relocation</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Professional packing</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Safe transport</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* E-Commerce Logistics */}
                    <FadeIn delay={0.3}>
                        <div className="mb-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                                <div>
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <span className="h-px w-8 bg-awcc-primary"></span>
                                        <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Service</span>
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">E-Commerce Logistics</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        Tailored logistics solutions for online sellers. Our e-commerce logistics service helps SMEs scale their delivery operations with daily deliveries, flexible subscription plans, and competitive bulk delivery rates.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Daily deliveries</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Subscription plans</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Bulk delivery rates</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80"
                                        alt="E-Commerce Logistics"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Corporate Dispatch */}
                    <FadeIn delay={0.4}>
                        <div className="mb-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                                <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                                        alt="Corporate Dispatch"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <span className="h-px w-8 bg-awcc-primary"></span>
                                        <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Service</span>
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Corporate Dispatch</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        Dedicated logistics solutions for large organizations including banks, schools, telecoms, hospitals, and other large companies. We provide dedicated fleet management, monthly contracts, and invoice billing.
                                    </p>
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3">Who We Serve:</h3>
                                            <ul className="space-y-2">
                                                <li className="text-gray-600">• Banks</li>
                                                <li className="text-gray-600">• Schools</li>
                                                <li className="text-gray-600">• Telecoms</li>
                                                <li className="text-gray-600">• Hospitals</li>
                                                <li className="text-gray-600">• Large companies</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">Features:</h3>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Dedicated fleet</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Monthly contracts</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-awcc-primary mt-0.5 flex-shrink-0">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-gray-700">Invoice billing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* CTA */}
                    <FadeIn delay={0.5}>
                        <div className="bg-gradient-to-br from-awcc-primary to-awcc-primary-light rounded-2xl p-12 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                            <p className="text-xl mb-8 text-white/90">Contact us today to learn more about our services</p>
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-awcc-primary hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
