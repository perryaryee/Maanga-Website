import React from "react";
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import hero from "../../assets/manga_service.jpg";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Maanga Logistics - Swift. Safe. Smart Deliveries Across Ghana.",
};

export default function TermsPage() {
  const sections = [
    {
      // label: "Acceptance",
      title: "Acceptance of Terms",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            By accessing or using the Maanga Logistics platform, including our website, mobile application (SwiftGo), and related services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          <p className="text-gray-600 leading-relaxed">
            These terms apply to all users—customers who request deliveries, driver partners who provide delivery services, and visitors to our website. We reserve the right to update these terms at any time; continued use of our services after changes constitutes acceptance of the revised terms.
          </p>
        </>
      ),
    },
    {
      // label: "Services",
      title: "Description of Services",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Maanga Logistics provides on-demand delivery, relocation, and corporate logistics services across Ghana. Our platform connects customers with verified driver partners for package delivery, document dispatch, relocation assistance, and business logistics solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Services are subject to availability within our operating areas. We strive to provide accurate estimates for delivery times and pricing, but actual results may vary based on traffic, weather, and other factors beyond our control.
          </p>
        </>
      ),
    },
    {
      // label: "User Obligations",
      title: "User Obligations",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            You agree to provide accurate information when creating an account and placing orders. You must not use our services for any illegal purpose, including but not limited to transporting prohibited items such as weapons, drugs, hazardous materials, or counterfeit goods.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Driver partners must maintain valid licenses, insurance, and vehicle registration as required by Ghanaian law. You agree to conduct yourself professionally and treat all parties with respect.
          </p>
        </>
      ),
    },
    {
      // label: "Payments",
      title: "Payments and Fees",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Payment for services is due at the time of booking or upon delivery completion, as specified for each service type. We accept mobile money, card payments, and other methods as displayed in the app. All fees are quoted in Ghana Cedis (GHS) unless otherwise stated.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Refunds may be issued in accordance with our refund policy for cancelled orders, failed deliveries, or service issues. Disputes regarding charges should be reported within 7 days of the transaction.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Driver partners receive payment according to the terms of their partnership agreement. Maanga Logistics may deduct applicable fees, commissions, or adjustments as outlined in the partner agreement.
          </p>
        </>
      ),
    },
    {
      // label: "Liability",
      title: "Limitation of Liability",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            To the fullest extent permitted by law, Maanga Logistics shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability for any claim shall not exceed the amount you paid for the specific service in question.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are not liable for delays, losses, or damages caused by circumstances beyond our reasonable control, including but not limited to natural disasters, civil unrest, government actions, or third-party failures.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For high-value or fragile items, we recommend purchasing additional insurance or declaring the value of your shipment. Maanga Logistics provides standard coverage as described in our service documentation.
          </p>
        </>
      ),
    },
    {
      // label: "Termination",
      title: "Termination",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may suspend or terminate your access to our services at any time for violation of these terms, fraudulent activity, or for any other reason at our discretion. You may also close your account at any time by contacting us.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Upon termination, your right to use our services ceases immediately. Provisions of these terms that by their nature should survive termination shall remain in effect, including but not limited to liability limitations and dispute resolution.
          </p>
        </>
      ),
    },
    {
      // label: "Contact",
      title: "Contact Us",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed">
            For questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:info@maangalogistics.com" className="text-awcc-primary font-semibold hover:underline">
              info@maangalogistics.com
            </a>{" "}
            or call +233 54 013 1193. Our office is located at Achimota, Tetteh Okulley Street, Accra, Ghana.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using Maanga Logistics services. By using our platform, you agree to be bound by these terms."
        image={hero.src}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-gray-500 text-sm">Last updated: April 2026</p>
          </div>

          {sections.map((section, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <article className="mb-24 last:mb-0">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="h-px w-8 bg-awcc-primary" />
                  <span className="text-sm font-semibold text-awcc-primary uppercase tracking-wider">
                    {index + 1}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  {section.content}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
