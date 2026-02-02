"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Card, { CardContent } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { Package, UserCheck, MapPin, CheckCircle2 } from "lucide-react";
import image2 from "../assets/image_1.jpg"
import image3 from "../assets/too_big.jpg";
import local from "../assets/local.jpg";
import relocating from "../assets/relocating.jpg";
import intercity from "../assets/intercity.jpg";
import playstore from "../assets/playstore.png";
import appstore from "../assets/App_store.wine.png";
import about from "../assets/pacel.jpg";
import deliveryguy__ from "../assets/deliverYguy.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative  min-h-screen flex items-center justify-center overflow-hidden w-full pt-10  lg:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full">
          <img
            src={image2.src}
            alt="Delivery truck on road"
            className="h-full w-full object-cover max-w-full"
            loading="eager"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24 lg:py-32 overflow-x-hidden">
          <div className="max-w-3xl w-full">
            <FadeIn direction="up" immediate>
              <div className=" lg:pt-10">

              </div>
            </FadeIn>

            <FadeIn direction="up" immediate delay={0.1}>
              <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8 break-words">
                Swift. Safe. Smart{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-awcc-primary 
                to-yellow-200">
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
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <Link href="#download-app" className="group w-full sm:w-auto">
                <img src={playstore.src} alt="playstore" className="w-full max-w-[160px] sm:max-w-[218px] h-auto" /> 
                </Link>
                <Link href="#download-app" className="group w-full sm:w-auto">
                <img src={appstore.src} alt="appstore" className="w-full max-w-[160px] sm:max-w-[190px] h-auto" /> 
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
                  Maanga Logistics Ghana is a technology-driven logistics company providing reliable delivery, relocation, and corporate dispatch services across Ghana using a hybrid fleet model.
                </p>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-2 border-awcc-primary text-awcc-primary hover:bg-awcc-primary hover:text-white px-8 py-4 rounded-xl">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={image3.src}
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
                image: local.src
              },
              {
                title: "Relocation & Moving",
                desc: "Homes, offices, businesses",
                icon: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
                image: relocating.src
              },
              {
                title: "Intercity Delivery",
                desc: "Subscription for SMEs",
                icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5H3.375c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
                image: intercity.src
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

      {/* How Maanga Logistics Works Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <span className="h-px w-12 bg-awcc-primary"></span>
                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Process</span>
                <span className="h-px w-12 bg-awcc-primary"></span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">How Maanga Logistics Works</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Request a delivery", desc: "Book through our app or website", icon: Package, color: "bg-blue-500" },
              { step: "2", title: "Driver gets assigned", desc: "We match you with the best driver", icon: UserCheck, color: "bg-green-500" },
              { step: "3", title: "Track in real-time", desc: "Monitor your delivery live", icon: MapPin, color: "bg-purple-500" },
              { step: "4", title: "Get delivery confirmed", desc: "Receive confirmation when delivered", icon: CheckCircle2, color: "bg-orange-500" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <FadeIn key={index} delay={index * 0.15}>
                  <div className="text-center group">
                    <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                      <div className="absolute top-4 left-4 z-10 w-12 h-12 rounded-full bg-awcc-primary text-white flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="w-full h-48 flex items-center justify-center p-8">
                        <div className={`w-24 h-24 rounded-2xl ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-12 h-12 text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Maanga Logistics Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <span className="h-px w-12 bg-awcc-primary"></span>
                <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">Why Choose Us</span>
                <span className="h-px w-12 bg-awcc-primary"></span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Why Choose Maanga Logistics?</h2>
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
                  Earn with Maanga Logistics as a <span className="text-awcc-primary">verified partner driver</span>
                </h2>
                <div className="space-y-6 mb-10">
                  {[
                    { title: "Flexible work", desc: "Work on your own schedule" },
                    { title: "Weekly payouts", desc: "Get paid every week" },
                    { title: "Steady job flow", desc: "Consistent delivery requests" },
                    { title: "Support from Maanga Logistics", desc: "24/7 driver support team" }
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
                    src={deliveryguy__.src}
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
      {/* <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
      </section> */}
    </div>
  );
}
