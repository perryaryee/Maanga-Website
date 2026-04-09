import React from "react";
import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/ui/PageHero";
import hero from "../../assets/manga_service.jpg";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Maanga Logistics - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  const sections = [
    {
      // label: "Overview",
      title: "Overview",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Maanga Logistics ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application (SwiftGo), and related services.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using our services, you consent to the practices described in this policy. We may update this policy from time to time; we will notify you of material changes by posting the updated policy on our website and updating the "Last updated" date.
          </p>
        </>
      ),
    },
    {
      // label: "Data We Collect",
      title: "Information We Collect",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            We collect information you provide directly, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li><strong>Account information:</strong> Name, phone number, email address, and password when you create an account</li>
            <li><strong>Delivery details:</strong> Pickup and delivery addresses, recipient information, and package descriptions</li>
            <li><strong>Payment information:</strong> Payment method details (processed securely by our payment providers; we do not store full card numbers)</li>
            <li><strong>Driver partner information:</strong> Identity documents, vehicle details, license information, and bank/mobile money details for payouts</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            We also automatically collect certain information when you use our services:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Device information:</strong> Device type, operating system, unique device identifiers</li>
            <li><strong>Location data:</strong> GPS location when you use the app for deliveries (with your permission)</li>
            <li><strong>Usage data:</strong> Pages visited, features used, and interaction patterns</li>
          </ul>
        </>
      ),
    },
    {
      // label: "How We Use It",
      title: "How We Use Your Information",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Provide, maintain, and improve our delivery and logistics services</li>
            <li>Process transactions and send related information (e.g., confirmations, receipts)</li>
            <li>Facilitate communication between customers and driver partners</li>
            <li>Enable real-time tracking of deliveries</li>
            <li>Send promotional communications (with your consent) and service updates</li>
            <li>Detect, prevent, and address fraud and security issues</li>
            <li>Comply with legal obligations and enforce our terms</li>
            <li>Analyze usage to improve our platform and user experience</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            We do not sell your personal information to third parties for marketing purposes.
          </p>
        </>
      ),
    },
    {
      // label: "Sharing",
      title: "Information Sharing and Disclosure",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li><strong>With driver partners:</strong> Necessary delivery details (addresses, contact info) to complete your order</li>
            <li><strong>With service providers:</strong> Payment processors, cloud hosting, analytics, and communication services that assist our operations</li>
            <li><strong>For legal reasons:</strong> When required by law, court order, or to protect our rights, safety, or property</li>
            <li><strong>With your consent:</strong> In other situations where you have given explicit permission</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            We require third parties to protect your information and use it only for the purposes we specify.
          </p>
        </>
      ),
    },
    {
      // label: "Data Security",
      title: "Data Security",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls.
          </p>
          <p className="text-gray-600 leading-relaxed">
            While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.
          </p>
        </>
      ),
    },
    {
      // label: "Your Rights",
      title: "Your Rights and Choices",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Depending on applicable law, you may have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
            <li><strong>Location:</strong> Disable location services in your device settings (note: this may limit certain app features)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            To exercise these rights, contact us at{" "}
            <a href="mailto:info@maangalogistics.com" className="text-awcc-primary font-semibold hover:underline">
              info@maangalogistics.com
            </a>
            . We will respond within a reasonable timeframe.
          </p>
        </>
      ),
    },
    {
      // label: "Cookies",
      title: "Cookies and Tracking",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our website may use cookies and similar technologies to enhance your experience, remember your preferences, and analyze site traffic. You can control cookies through your browser settings.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mobile app may use analytics tools to understand how the app is used and to improve performance. This data is aggregated and does not identify you personally unless you are logged in.
          </p>
        </>
      ),
    },
    {
      // label: "Retention",
      title: "Data Retention",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Transaction and delivery records may be retained for accounting and legal purposes as required by Ghanaian law.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When you delete your account, we will delete or anonymize your personal data within a reasonable period, except where retention is required by law.
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
            For questions about this Privacy Policy or to exercise your rights, contact us at{" "}
            <a href="mailto:info@maangalogistics.com" className="text-awcc-primary font-semibold hover:underline">
              info@maangalogistics.com
            </a>
            , call +233 54 013 1193, or visit our office at Achimota, Tetteh Okulley Street, Accra, Ghana.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Learn how Maanga Logistics collects, uses, and protects your personal information."
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
