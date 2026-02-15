import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact Us – ${SITE_NAME}`,
  description: `Get in touch with ${SITE_NAME}. Send us your questions, suggestions, or feedback about career guidance for Arts students.`,
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Contact Us
      </h1>

      <div className="prose max-w-none">
        <p>
          We appreciate your interest in <strong>{SITE_NAME}</strong>. Whether
          you have a question about a specific career path, want to suggest a
          topic, or need clarification on any information presented on our
          website, we are happy to help.
        </p>

        <h2>How to Reach Us</h2>
        <p>
          You can reach us via email at:{" "}
          <strong>dk059511@gmail.com</strong>
        </p>
        <p>
          We typically respond within 24–48 hours on business days. Please
          include as much detail as possible in your message so we can assist
          you effectively.
        </p>

        <h2>What You Can Write About</h2>
        <ul>
          <li>Career guidance questions related to Arts stream</li>
          <li>Suggestions for new articles or topics</li>
          <li>Corrections or updates to existing content</li>
          <li>Collaboration or partnership proposals</li>
          <li>Advertising enquiries</li>
          <li>General feedback about the website</li>
        </ul>

        <h2>Important Note</h2>
        <p>
          While we strive to provide accurate and helpful career information,
          please note that {SITE_NAME} provides general guidance only. For
          specific academic or career decisions, we recommend consulting with
          qualified career counsellors, academic advisors, or the official
          websites of the relevant exam conducting bodies.
        </p>

        <h2>Connect With Us</h2>
        <p>
          Follow us on social media for regular updates on career guidance,
          exam notifications, and study tips for Arts students. Links will be
          updated here soon.
        </p>
      </div>
    </div>
  );
}
