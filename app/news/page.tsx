import Link from "next/link";
import Card, { CardContent } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import image_8 from "../../assets/creget_8.jpg"
import image_11 from "../../assets/criket__1.jpg"

interface NewsItem {
    id: number;
    title: string;
    date: string;
    summary: string;
    image: string; // In a real app, this would be a URL
}

const newsItems: NewsItem[] = [
    {
        id: 1,
        title: "How to Send Packages Safely in Ghana",
        date: "November 24, 2025",
        summary: "Learn essential tips for packaging and sending items safely across Ghana. Discover best practices for secure deliveries and how SwiftGo ensures your packages arrive intact.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
        id: 2,
        title: "Why Real-Time Tracking Matters",
        date: "October 15, 2025",
        summary: "Real-time tracking is revolutionizing logistics in Ghana. Find out how SwiftGo's tracking technology gives you peace of mind and transparency throughout the delivery process.",
        image: "https://images.unsplash.com/photo-1601581875305-f5a44b2c2af0?w=600&q=80",
    },
    {
        id: 3,
        title: "How SwiftGo is Changing Logistics",
        date: "September 01, 2025",
        summary: "SwiftGo is transforming the logistics landscape in Ghana with technology-driven solutions. Learn about our innovative approach to delivery, relocation, and corporate dispatch services.",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80",
    },
    {
        id: 4,
        title: "Tips for SMEs Using Delivery Services",
        date: "August 20, 2025",
        summary: "Small and medium enterprises can leverage delivery services to scale their business. Discover how SwiftGo's e-commerce logistics solutions help SMEs grow efficiently.",
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80",
    },
];

export default function News() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="News & Blog"
                image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
                subtitle="Stay updated with the latest news, tips, and insights from SwiftGo Ghana"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item, index) => (
                            <FadeIn key={item.id} delay={index * 0.1}>
                                <Link href={`/news/${item.id}`} className="group block h-full">
                                    <div className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-awcc-primary/20">
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={item.image || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full text-xs font-bold text-awcc-primary shadow-md">
                                                BLOG
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <span className="text-sm text-gray-500 font-medium mb-3 block">{item.date}</span>
                                            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-awcc-primary transition-colors leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                                                {item.summary}
                                            </p>
                                            <span className="text-awcc-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Read Story
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
