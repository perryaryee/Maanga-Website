import React from 'react';
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import image_1 from "../../assets/crekit_7.jpg";
import image_2 from "../../assets/Crekit_2.jpg";    
import hero from "../../assets/manga_service.jpg";
import about from "../../assets/pacel.jpg";


export default function About() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="About Maanga "
                subtitle="Maanga Logistics Ghana is a technology-driven logistics company providing reliable delivery, relocation, and corporate dispatch services across Ghana using a hybrid fleet model."
                image={hero.src}
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Our Story */}
                    <FadeIn delay={0.1}>
                        <div className="mb-24">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Our Story</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                        Maanga Logistics Ghana was created to address the critical challenges facing Ghana's logistics sector. Traditional delivery services were unreliable, lacked transparency, and failed to meet the growing demands of businesses and individuals across the country.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                        We identified key problems: delayed deliveries, untracked packages, unprofessional service, and limited coverage. These issues were hindering business growth and frustrating customers who needed reliable logistics solutions.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Maanga Logistics solves these challenges by combining cutting-edge technology with a network of verified driver partners. Our platform enables real-time tracking, transparent pricing, and reliable service delivery across Ghana, making movement swift, safe, and smart.
                                    </p>
                                </div>
                                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                                    <img
                                        src={about.src}
                                        alt="Maanga Logistics Team"
                                        className="w-full h-full object-cover  object-[center_top] transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Our Mission */}
                    <FadeIn delay={0.2}>
                        <div className="mb-24">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Mission</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <div className="bg-gradient-to-br from-awcc-primary/10 to-awcc-primary/5 rounded-2xl p-12 border border-awcc-primary/20">
                                <p className="text-2xl font-semibold text-gray-900 leading-relaxed max-w-4xl">
                                    "Our vision is to become the leading force in logistics and transportation services, recognized for our commitment to excellence, cost-effective logistics service, and customer-centric solutions. We strive to reshape the future with confidence and integrity, providing reliable service solutions."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Our Vision */}
                    <FadeIn delay={0.3}>
                        <div className="mb-24">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Vision</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                            <div className="bg-gradient-to-br from-awcc-secondary/10 to-awcc-secondary/5 rounded-2xl p-12 border border-awcc-secondary/20">
                                <p className="text-2xl font-semibold text-gray-900 leading-relaxed max-w-4xl">
                                    "To become Ghana's most trusted movement partner."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Our Fleet */}
                    {/* <FadeIn delay={0.4}>
                        <div className="mb-24">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Our Fleet</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Fleet</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { title: "Dispatch Bikes", desc: "Fast and agile for quick deliveries", image: "https://images.unsplash.com/photo-1558980663-3681c1f673f3?w=600&q=80" },
                                    { title: "Branded Tricycles", desc: "Perfect for medium-sized packages", image: "https://images.unsplash.com/photo-1601581875305-f5a44b2c2af0?w=600&q=80" },
                                    { title: "Delivery Vans", desc: "Ideal for bulk and business deliveries", image: "https://images.unsplash.com/photo-1601581875305-f5a44b2c2af0?w=600&q=80" },
                                    { title: "Trucks for Relocation", desc: "Heavy-duty vehicles for moving", image: "https://images.unsplash.com/photo-1556912172-45b7fa8ef810?w=600&q=80" }
                                ].map((vehicle, i) => (
                                    <div key={i} className="bg-white rounded-xl border border-gray-100 hover:border-awcc-primary/20 hover:shadow-lg transition-all overflow-hidden group">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={vehicle.image}
                                                alt={vehicle.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2 text-gray-900">{vehicle.title}</h3>
                                            <p className="text-gray-600">{vehicle.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn> */}

                    {/* Our Values */}
                    <FadeIn delay={0.5}>
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Our Values</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { title: "Reliability", desc: "Consistent and dependable service" },
                                    { title: "Efficiency", desc: "Fast and optimized operations" },
                                    { title: "Safety", desc: "Secure handling of all deliveries" },
                                    { title: "Customer-centered", desc: "Putting customers first always" }
                                ].map((value, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:border-awcc-primary/20 hover:shadow-lg transition-all">
                                        <div className="bg-awcc-primary w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">{value.title}</h3>
                                            <p className="text-gray-600 text-sm">{value.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
