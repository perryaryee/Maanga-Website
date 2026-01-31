import React from 'react';
import Card, { CardContent } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import image_10 from "../../assets/creket_11.jpg";

interface BoardMember {
    name: string;
    role: string;
    bio: string;
}

const boardMembers: BoardMember[] = [
    {
        name: "Dr. John Doe",
        role: "Chairperson",
        bio: "Dr. Doe has over 20 years of experience in sports administration and disability advocacy.",
    },
    {
        name: "Jane Smith",
        role: "Vice Chairperson",
        bio: "Jane is a former paralympic athlete dedicated to promoting inclusive sports.",
    },
    {
        name: "Michael Johnson",
        role: "Secretary General",
        bio: "Michael brings a wealth of knowledge in organizational management and event planning.",
    },
    {
        name: "Sarah Williams",
        role: "Treasurer",
        bio: "Sarah is a chartered accountant ensuring financial transparency and sustainability.",
    },
    {
        name: "David Brown",
        role: "Director of Development",
        bio: "David focuses on grassroots programs and talent identification across the continent.",
    },
    {
        name: "Emily Davis",
        role: "Director of Communications",
        bio: "Emily manages the council's public relations and digital presence.",
    },
];

export default function AdvisoryBoard() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Advisory Board"
                subtitle="Meet the dedicated individuals guiding the strategic direction of the African Wheelchair Cricket Council."
                image={image_10.src}
            />
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {boardMembers.map((member, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-awcc-primary/20">
                                    <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&sig=${index}`}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6 text-center">
                                        <div className="inline-block bg-awcc-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                                            {member.role}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
