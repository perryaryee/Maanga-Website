"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/animations/FadeIn";
import image_11 from "../../../assets/creket_6.jpg";

export default function ApplyForMembership() {
    const [formData, setFormData] = useState({
        organizationName: "",
        country: "",
        contactPerson: "",
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
        alert("Application submitted! (This is a demo)");
        console.log(formData);
    };

    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Apply for Membership"
                subtitle="Take the first step towards joining the African Wheelchair Cricket Council. Fill out the form below to express your interest."
                image={image_11.src}
                height="min-h-[52vh]"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <Link href="/membership" className="text-awcc-primary hover:text-awcc-primary-light font-medium flex items-center gap-2 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Back to Membership
                        </Link>
                    </div>

                    <FadeIn delay={0.1}>
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Organization Details</h2>
                            <p className="text-gray-600 mb-8">
                                Please provide accurate information about your organization. All fields are required unless marked optional.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Organization Name
                                        </label>
                                        <input
                                            type="text"
                                            id="organizationName"
                                            name="organizationName"
                                            required
                                            value={formData.organizationName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-awcc-primary focus:border-awcc-primary outline-none transition-all hover:border-awcc-primary/50"
                                            placeholder="e.g. Kenya Wheelchair Cricket"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            required
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-awcc-primary focus:border-awcc-primary outline-none transition-all hover:border-awcc-primary/50"
                                            placeholder="e.g. Kenya"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Contact Person
                                        </label>
                                        <input
                                            type="text"
                                            id="contactPerson"
                                            name="contactPerson"
                                            required
                                            value={formData.contactPerson}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-awcc-primary focus:border-awcc-primary outline-none transition-all hover:border-awcc-primary/50"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-awcc-primary focus:border-awcc-primary outline-none transition-all hover:border-awcc-primary/50"
                                            placeholder="+254 700 000000"
                                        />
                                    </div>
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
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-awcc-primary focus:border-awcc-primary outline-none transition-all hover:border-awcc-primary/50"
                                        placeholder="official@organization.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Additional Information
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-awcc-primary focus:border-awcc-primary outline-none transition-all resize-none hover:border-awcc-primary/50"
                                        placeholder="Tell us briefly about your organization, current activities, and goals..."
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" size="lg" className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-xl bg-awcc-primary text-white hover:bg-awcc-primary-light">
                                        Submit Application
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
