import React from 'react';
import Link from 'next/link';
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import image_2 from "../../assets/Crekit_2.jpg";

export default function CorporateSolutions() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Logistics for Businesses"
                subtitle="Comprehensive logistics solutions tailored for enterprises, institutions, and growing businesses"
                image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Who We Serve */}
                    <FadeIn delay={0.1}>
                        <div className="mb-24">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Clients</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Who We Serve</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "SMEs",
                                        desc: "Small and medium enterprises looking for reliable delivery solutions",
                                        icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5H3.375c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    },
                                    {
                                        title: "E-commerce Businesses",
                                        desc: "Online retailers needing scalable delivery infrastructure",
                                        icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5H3.375c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    },
                                    {
                                        title: "Banks",
                                        desc: "Financial institutions requiring secure document and package delivery",
                                        icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                                    },
                                    {
                                        title: "Institutions",
                                        desc: "Schools, hospitals, and government organizations",
                                        icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15m-9 0a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15"
                                    },
                                    {
                                        title: "Retail Stores",
                                        desc: "Physical stores expanding their delivery capabilities",
                                        icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v7.5m-4.5 0H6.36m14.25 0H18m-4.5 0v-5.25c0-.414.336-.75.75-.75h2.25c.414 0 .75.336.75.75v5.25M6.36 21v-5.25c0-.414.336-.75.75-.75h2.25c.414 0 .75.336.75.75v5.25M6.36 21H4.5a.75.75 0 01-.75-.75V9.75a.75.75 0 01.75-.75h1.86m14.25 0H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-.75.75h-1.86m-14.25 0h1.86"
                                    },
                                    {
                                        title: "Large Companies",
                                        desc: "Enterprise-level organizations with complex logistics needs",
                                        icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm.75 3.75h.008v.008h-.008v-.008z"
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

                    {/* What We Offer */}
                    <FadeIn delay={0.2}>
                        <div className="mb-24">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Solutions</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Offer</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        title: "Bulk Deliveries",
                                        desc: "Handle large volumes of deliveries efficiently with our dedicated fleet and optimized routes.",
                                        icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                    },
                                    {
                                        title: "Scheduled Dispatch",
                                        desc: "Plan and schedule your deliveries in advance with our flexible scheduling system.",
                                        icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                    },
                                    {
                                        title: "Dedicated Vehicles",
                                        desc: "Reserve dedicated vehicles for your business needs with guaranteed availability.",
                                        icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25c0-1.036-.84-1.875-1.875-1.875H3.375c-1.036 0-1.875.84-1.875 1.875v3.375c0 .621.504 1.125 1.125 1.125h17.25z"
                                    },
                                    {
                                        title: "Monthly Billing",
                                        desc: "Simplified invoicing with monthly billing cycles and detailed reporting.",
                                        icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.125c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:border-awcc-primary/20 hover:shadow-lg transition-all">
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

                    {/* CTA */}
                    <FadeIn delay={0.3}>
                        <div className="bg-gradient-to-br from-awcc-primary to-awcc-primary-light rounded-2xl p-12 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Logistics?</h2>
                            <p className="text-xl mb-8 text-white/90">Book a consultation with our team to discuss your business needs</p>
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-awcc-primary hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                    Book a Consultation
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
