import Link from "next/link";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/animations/FadeIn";
import image_11 from "../../../assets/creket_6.jpg";


export default function MembershipRequirements() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Membership Requirements"
                subtitle="To ensure the integrity and growth of Wheelchair Cricket in Africa, we have established clear criteria for membership."
                image={image_11.src}
                height="min-h-[52vh]"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <Link href="/membership" className="text-awcc-primary hover:text-awcc-primary-light font-medium flex items-center gap-2 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Back to Membership
                        </Link>
                    </div>

                    <FadeIn delay={0.1}>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                To become a member of the African Wheelchair Cricket Council (AWCC), organizations must meet the following standards. These ensure that all members are committed to the sustainable development of the sport.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <FadeIn delay={0.2}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-awcc-primary/30 transition-all duration-300 h-full">
                                <div className="bg-awcc-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-awcc-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Legal Status</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-awcc-primary flex-shrink-0"></span>
                                        <span>The organization must be a legally registered entity in its country of origin.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-awcc-primary flex-shrink-0"></span>
                                        <span>Must have a constitution or governing document that aligns with the IWCC's values.</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-awcc-primary/30 transition-all duration-300 h-full">
                                <div className="bg-awcc-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-awcc-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Governance Structure</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-awcc-primary flex-shrink-0"></span>
                                        <span>Must have a democratically elected board or committee.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-awcc-primary flex-shrink-0"></span>
                                        <span>Demonstrate transparent financial management and reporting.</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-awcc-primary/30 transition-all duration-300 h-full">
                                <div className="bg-awcc-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-awcc-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Activity & Participation</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-awcc-primary flex-shrink-0"></span>
                                        <span>Must be actively promoting wheelchair cricket in the country.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-awcc-primary flex-shrink-0"></span>
                                        <span>Have a minimum of two active teams or a development program in place.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-awcc-primary flex-shrink-0"></span>
                                        <span>Commitment to participate in AWCC sanctioned events.</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-awcc-primary/30 transition-all duration-300 h-full">
                                <div className="bg-awcc-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-awcc-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Inclusivity</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-awcc-primary flex-shrink-0"></span>
                                        <span>Policies must ensure non-discrimination based on race, gender, religion, or disability type.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-awcc-primary flex-shrink-0"></span>
                                        <span>Active efforts to include women and youth in the sport.</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.6}>
                        <div className="bg-gradient-to-br from-awcc-primary to-awcc-primary-light rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-6">Ready to Join the Movement?</h2>
                                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                    If your organization meets these criteria, we invite you to submit your application and become part of the AWCC family.
                                </p>
                                <Link href="/membership/apply">
                                    <Button size="lg" className="bg-white text-awcc-primary hover:bg-gray-100 border-none font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                        Start Application
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
