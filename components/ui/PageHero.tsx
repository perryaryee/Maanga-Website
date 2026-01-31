"use client";

import FadeIn from "@/components/animations/FadeIn";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image: string;
    height?: string;
}

const PageHero = ({
    title,
    subtitle,
    image,
    height = "min-h-[50vh] lg:min-h-[60vh]"
}: PageHeroProps) => {
    return (
        <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover object-[center_top]"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                <div className="max-w-3xl">
                    <FadeIn direction="up" immediate>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                            {title}
                        </h1>
                    </FadeIn>

                    {subtitle && (
                        <FadeIn direction="up" immediate delay={0.1}>
                            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl font-light">
                                {subtitle}
                            </p>
                        </FadeIn>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHero;
