import Link from "next/link";
import Button from "@/components/ui/Button";
import Card, { CardContent } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import image_7 from "../../assets/crekit_7.jpg"

export default function Membership() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Membership"
                subtitle="Join the African Wheelchair Cricket Council and become part of a growing movement to empower athletes and transform lives through cricket."
                image={image_7.src}
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                        {/* Apply Section */}
                        <FadeIn delay={0.1}>
                            <div className="bg-gradient-to-br from-awcc-primary to-awcc-primary-light text-white rounded-2xl p-10 h-full flex flex-col justify-between shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-4">Apply for Membership</h2>
                                    <p className="text-white/90 mb-8 text-lg leading-relaxed">
                                        Are you a national body, club, or organization looking to join the AWCC? Start your application process today and be part of the future.
                                    </p>
                                </div>
                                <Link href="/membership/apply" className="relative z-10">
                                    <Button size="lg" className="w-full bg-white text-awcc-primary hover:bg-gray-100 border-none font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">Start Application</Button>
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Requirements Section */}
                        <FadeIn delay={0.15}>
                            <div className="bg-white rounded-2xl p-10 h-full flex flex-col justify-between border-2 border-gray-100 hover:border-awcc-primary/30 hover:shadow-xl transition-all duration-300">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Membership Requirements</h2>
                                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                        Learn about the criteria and eligibility standards for becoming a member of the AWCC. Ensure you meet the guidelines before applying.
                                    </p>
                                </div>
                                <Link href="/membership/requirements">
                                    <Button size="lg" variant="outline" className="w-full border-2 border-awcc-primary text-awcc-primary hover:bg-awcc-primary hover:text-white py-4 rounded-xl font-semibold transition-all">View Requirements</Button>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="h-px w-12 bg-awcc-primary"></span>
                                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Benefits</span>
                                <span className="h-px w-12 bg-awcc-primary"></span>
                            </div>
                            <h2 className="text-5xl font-bold mb-16 text-gray-900">Why Join AWCC?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { title: "Global Recognition", desc: "Be recognized as an official body under the IWCC." },
                                    { title: "Development Support", desc: "Access resources, coaching programs, and equipment support." },
                                    { title: "Tournament Access", desc: "Participate in regional and international tournaments." }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-awcc-primary/20 hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-xl font-bold text-awcc-primary mb-3">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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
