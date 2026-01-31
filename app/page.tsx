"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Card, { CardContent } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601581875305-f5a44b2c2af0?w=1920&q=80"
            alt="Delivery truck on road"
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
          <div className="max-w-3xl">
            <FadeIn direction="up" immediate>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>
                <span className="text-sm font-semibold text-white tracking-wide">
                  Maanga Logistics
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" immediate delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8">
                Swift. Safe. Smart{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">
                  Deliveries
                </span>{" "}
                Across Ghana
              </h1>
            </FadeIn>

            <FadeIn direction="up" immediate delay={0.2}>
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light mb-10">
                Your trusted partner for on-demand delivery, relocation, and business logistics.
              </p>
            </FadeIn>

            <FadeIn direction="up" immediate delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="#download-app" className="group">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-awcc-primary hover:bg-gray-100 px-8 py-7 text-lg rounded-2xl shadow-lg shadow-white/25 hover:shadow-xl hover:shadow-white/30 transition-all duration-300 hover:-translate-y-1 border-none font-semibold">
                    Download Customer App
                  </Button>
                </Link>
                <Link href="/partner-drivers" className="group">
                  <Button size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-7 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 font-semibold">
                    Become a Driver Partner
                  </Button>
                </Link>
                <Link href="#request-delivery" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-300">
                  Request a Delivery
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M3 12h18" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="h-px w-12 bg-awcc-primary"></span>
                  <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">About Us</span>
                </div>
                <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Who We Are</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  SwiftGo Ghana is a technology-driven logistics company providing reliable delivery, relocation, and corporate dispatch services across Ghana using a hybrid fleet model.
                </p>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-2 border-awcc-primary text-awcc-primary hover:bg-awcc-primary hover:text-white px-8 py-4 rounded-xl">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80"
                  alt="Logistics and delivery team"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <span className="h-px w-12 bg-awcc-primary"></span>
                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Services</span>
                <span className="h-px w-12 bg-awcc-primary"></span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Our Services</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Local Delivery",
                desc: "Same-day & scheduled deliveries",
                icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25c0-1.036-.84-1.875-1.875-1.875H3.375c-1.036 0-1.875.84-1.875 1.875v3.375c0 .621.504 1.125 1.125 1.125h17.25z",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
              },
              {
                title: "Relocation & Moving",
                desc: "Homes, offices, businesses",
                icon: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
                image: "https://images.unsplash.com/photo-1556912172-45b7fa8ef810?w=600&q=80"
              },
              {
                title: "E-Commerce Logistics",
                desc: "Subscription for SMEs",
                icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5H3.375c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
                image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80"
              },
              {
                title: "Corporate Dispatch",
                desc: "Banks, schools, businesses",
                icon: "M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.25m0 0l4.5-5.25m-4.5 5.25l-4.5-5.25M3.75 14.15v4.25c0 .414.336.75.75.75h4.5a.75.75 0 01-.75-.75v-4.25m0 0l4.5-5.25m-4.5 5.25l-4.5-5.25",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
              }
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.15} className="group">
                <div className="h-full rounded-2xl bg-white border border-gray-100 hover:border-awcc-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-awcc-primary/10 flex items-center justify-center mb-6 text-awcc-primary group-hover:bg-awcc-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                    <Link href="/services">
                      <Button variant="outline" size="sm" className="border-awcc-primary text-awcc-primary hover:bg-awcc-primary hover:text-white">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How SwiftGo Works Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <span className="h-px w-12 bg-awcc-primary"></span>
                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Process</span>
                <span className="h-px w-12 bg-awcc-primary"></span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">How SwiftGo Works</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Request a delivery", desc: "Book through our app or website", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80" },
              { step: "2", title: "Driver gets assigned", desc: "We match you with the best driver", image: "https://images.unsplash.com/photo-1601581875305-f5a44b2c2af0?w=400&q=80" },
              { step: "3", title: "Track in real-time", desc: "Monitor your delivery live", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" },
              { step: "4", title: "Get delivery confirmed", desc: "Receive confirmation when delivered", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="text-center group">
                  <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
                    <div className="absolute top-4 left-4 z-10 w-12 h-12 rounded-full bg-awcc-primary text-white flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SwiftGo Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <span className="h-px w-12 bg-awcc-primary"></span>
                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Why Choose Us</span>
                <span className="h-px w-12 bg-awcc-primary"></span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Why Choose SwiftGo?</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Reliable & Tracked Deliveries", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
              { title: "Trained Drivers", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
              { title: "Transparent Pricing", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Multiple Vehicle Options", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25c0-1.036-.84-1.875-1.875-1.875H3.375c-1.036 0-1.875.84-1.875 1.875v3.375c0 .621.504 1.125 1.125 1.125h17.25z" },
              { title: "Secure Payments", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
              { title: "Nationwide Coverage", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.944 11.944 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-awcc-primary/20 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-lg bg-awcc-primary/10 flex items-center justify-center flex-shrink-0 text-awcc-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 pt-2">{item.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Download the App Section */}
      <section id="download-app" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-awcc-primary to-awcc-primary-light text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">Download the App</h2>
              <p className="text-xl sm:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Get started with SwiftGo today. Download our app and experience seamless deliveries.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="#" className="block">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-4">
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-2.24-1.01-3.89-2.02-4.93-3.35C4.96 13.2 4 10.7 4 8.5c0-2.6.83-4.7 2.5-6.28C7.5 2.04 8.5 2.5 9.5 3c1.46.67 2.88 1.32 4.5 1.32s3.04-.65 4.5-1.32c1-.5 2-.96 3-1.78 1.67 1.58 2.5 3.68 2.5 6.28 0 2.2-.96 4.7-2.46 6.29-1.04 1.33-2.69 2.34-4.93 3.35-1.16.48-2.15.94-3.24 1.44-1.03.48-2.1.55-3.08-.4zM12 2.75c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8.25 5.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm16.5 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs opacity-80">Download on</div>
                        <div className="text-xl font-bold">Google Play</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="block">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-4">
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs opacity-80">Download on</div>
                        <div className="text-xl font-bold">App Store</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
                  alt="Mobile app tracking delivery"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="h-px w-12 bg-awcc-primary"></span>
                  <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Partner With Us</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Earn with SwiftGo as a <span className="text-awcc-primary">verified partner driver</span>
                </h2>
                <div className="space-y-6 mb-10">
                  {[
                    { title: "Flexible work", desc: "Work on your own schedule" },
                    { title: "Weekly payouts", desc: "Get paid every week" },
                    { title: "Steady job flow", desc: "Consistent delivery requests" },
                    { title: "Support from SwiftGo", desc: "24/7 driver support team" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-awcc-primary/10 flex items-center justify-center flex-shrink-0 text-awcc-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/partner-drivers">
                  <Button size="lg" className="bg-awcc-primary text-white hover:bg-awcc-primary-light px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto">
                    Apply to be a Driver
                  </Button>
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://images.unsplash.com/photo-1601581875305-f5a44b2c2af0?w=800&q=80"
                    alt="Delivery driver partner"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Corporate Clients Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <span className="h-px w-12 bg-awcc-primary"></span>
                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Corporate Partners</span>
                <span className="h-px w-12 bg-awcc-primary"></span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Trusted by Leading Businesses</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                We serve banks, SMEs, schools, and retail companies across Ghana with reliable logistics solutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { name: "Banks", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80" },
              { name: "SMEs", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80" },
              { name: "Schools", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80" },
              { name: "Retail", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80" }
            ].map((client, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all overflow-hidden group">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 font-semibold">{client.name}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <Link href="/corporate-solutions">
              <Button size="lg" className="bg-awcc-primary text-white hover:bg-awcc-primary-light px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Request Corporate Partnership
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
