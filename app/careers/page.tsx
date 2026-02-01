import React from 'react';
import Link from 'next/link';
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import image_2 from "../../assets/local.jpg";

export default function Careers() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Careers at SwiftGo"
                subtitle="Join our team and help transform logistics in Ghana"
                image="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1920&q=80"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Available Positions */}
                    <FadeIn delay={0.1}>
                        <div className="mb-16">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Open Positions</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Join Our Team</h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {[
                            {
                                title: "Driver Recruitment",
                                desc: "Join our network of verified partner drivers. Flexible schedule, competitive rates, and weekly payouts.",
                                icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25c0-1.036-.84-1.875-1.875-1.875H3.375c-1.036 0-1.875.84-1.875 1.875v3.375c0 .621.504 1.125 1.125 1.125h17.25z"
                            },
                            {
                                title: "Operations Staff",
                                desc: "Help manage our day-to-day operations, coordinate deliveries, and ensure smooth logistics operations.",
                                icon: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            },
                            {
                                title: "Customer Support",
                                desc: "Provide excellent customer service and support to our clients and driver partners.",
                                icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.434m0 0a5.991 5.991 0 00-1.937 3.918 3.001 3.001 0 004.682 2.72 9.09 9.09 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            },
                            {
                                title: "IT / Tech Roles",
                                desc: "Build and maintain our technology platform, mobile apps, and logistics systems.",
                                icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                            }
                        ].map((position, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="p-8 bg-white rounded-xl border border-gray-100 hover:border-awcc-primary/20 hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 rounded-xl bg-awcc-primary/10 flex items-center justify-center mb-6 text-awcc-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={position.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{position.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{position.desc}</p>
                                    <Link href="/contact">
                                        <Button variant="outline" size="sm" className="border-awcc-primary text-awcc-primary hover:bg-awcc-primary hover:text-white">
                                            Apply Now
                                        </Button>
                                    </Link>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Why Work at SwiftGo */}
                    <FadeIn delay={0.5}>
                        <div className="mb-16">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Why SwiftGo</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Work at SwiftGo?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Growth Opportunities", desc: "Be part of a growing company" },
                                    { title: "Competitive Benefits", desc: "Attractive compensation packages" },
                                    { title: "Innovative Culture", desc: "Work with cutting-edge technology" }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* CTA */}
                    <FadeIn delay={0.6}>
                        <div className="bg-gradient-to-br from-awcc-primary to-awcc-primary-light rounded-2xl p-12 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
                            <p className="text-xl mb-8 text-white/90">Send us your application or get in touch to learn more</p>
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-awcc-primary hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                    Apply for Jobs
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
