import React from 'react';
import Link from 'next/link';
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import image_2 from "../../assets/Crekit_2.jpg";

export default function PartnerDrivers() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Drive with SwiftGo"
                subtitle="Join our network of verified partner drivers and earn flexible income with reliable weekly payouts"
                image="https://images.unsplash.com/photo-1601581875305-f5a44b2c2af0?w=1920&q=80"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Why Join SwiftGo */}
                    <FadeIn delay={0.1}>
                        <div className="mb-24">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Benefits</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Join SwiftGo?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        title: "Earn Money",
                                        desc: "Competitive rates and weekly payouts. Earn what you deserve for your hard work.",
                                        icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    },
                                    {
                                        title: "Flexible Schedule",
                                        desc: "Work on your own time. Choose when and how much you want to work.",
                                        icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    },
                                    {
                                        title: "Reliable Payments",
                                        desc: "Weekly payouts directly to your account. No delays, no hassles.",
                                        icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                    },
                                    {
                                        title: "Support System",
                                        desc: "24/7 support from SwiftGo team. We're here to help you succeed.",
                                        icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.434m0 0a5.991 5.991 0 00-1.937 3.918 3.001 3.001 0 004.682 2.72 9.09 9.09 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="p-8 bg-white rounded-xl border border-gray-100 hover:border-awcc-primary/20 hover:shadow-lg transition-all">
                                        <div className="w-16 h-16 rounded-xl bg-awcc-primary/10 flex items-center justify-center mb-6 text-awcc-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Who Can Apply */}
                    <FadeIn delay={0.2}>
                        <div className="mb-24">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Requirements</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Who Can Apply?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { title: "Bike Riders", desc: "Motorcycle owners", image: "https://images.unsplash.com/photo-1558980663-3681c1f673f3?w=400&q=80" },
                                    { title: "Tricycle Operators", desc: "Tricycle owners", image: "https://images.unsplash.com/photo-1601581875305-f5a44b2c2af0?w=400&q=80" },
                                    { title: "Van Owners", desc: "Delivery van owners", image: "https://images.unsplash.com/photo-1601581875305-f5a44b2c2af0?w=400&q=80" },
                                    { title: "Truck Owners", desc: "Truck owners", image: "https://images.unsplash.com/photo-1556912172-45b7fa8ef810?w=400&q=80" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-xl border border-gray-100 hover:border-awcc-primary/20 hover:shadow-lg transition-all overflow-hidden group">
                                        <div className="relative h-40 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* How to Join */}
                    <FadeIn delay={0.3}>
                        <div className="mb-24">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Process</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Join</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { step: "1", title: "Register", desc: "Sign up on our platform" },
                                    { step: "2", title: "Submit Documents", desc: "Upload required documents" },
                                    { step: "3", title: "Get Verified", desc: "Complete verification process" },
                                    { step: "4", title: "Start Accepting Jobs", desc: "Begin earning immediately" }
                                ].map((item, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-20 h-20 rounded-full bg-awcc-primary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* CTA */}
                    <FadeIn delay={0.4}>
                        <div className="bg-gradient-to-br from-awcc-primary to-awcc-primary-light rounded-2xl p-12 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
                            <p className="text-xl mb-8 text-white/90">Join SwiftGo today and become a verified partner driver</p>
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-awcc-primary hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                    Apply Now
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
