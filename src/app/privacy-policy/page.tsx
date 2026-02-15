import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: `Privacy Policy – ${SITE_NAME}`,
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information when you visit our website.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Privacy Policy
      </h1>

      <div className="prose max-w-none">
        <p>
          <strong>Last Updated:</strong> February 15, 2026
        </p>
        <p>
          At <strong>{SITE_NAME}</strong> ({SITE_URL}), we are committed to
          protecting your privacy. This Privacy Policy explains what
          information we collect, how we use it, and your rights regarding
          your personal data.
        </p>

        <h2>Information We Collect</h2>
        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect certain
          information including your IP address, browser type, operating
          system, referring URLs, pages visited, and the date and time of your
          visit. This information is collected through cookies and similar
          technologies for analytics purposes.
        </p>
        <h3>Information You Provide</h3>
        <p>
          If you contact us through email or a contact form, we collect the
          information you voluntarily provide, such as your name and email
          address. We use this information solely to respond to your enquiry.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To analyse website traffic and improve our content</li>
          <li>To respond to your enquiries and communications</li>
          <li>To ensure the website functions properly</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>Third-Party Services</h2>
        <h3>Google Analytics</h3>
        <p>
          We use Google Analytics to understand how visitors interact with our
          website. Google Analytics uses cookies to collect anonymous traffic
          data. You can learn more about Google&apos;s privacy practices at{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-maroon-600 hover:underline">
            Google Privacy Policy
          </a>.
        </p>
        <h3>Google AdSense</h3>
        <p>
          We may use Google AdSense to display advertisements on our website.
          Google AdSense uses cookies to serve ads based on your prior visits
          to our website and other websites. You can opt out of personalised
          advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-maroon-600 hover:underline">
            Google Ads Settings
          </a>.
        </p>

        <h2>Cookies</h2>
        <p>
          Our website uses cookies, which are small text files stored on your
          device. Cookies help us improve your experience by remembering your
          preferences and understanding how you use our site. You can control
          cookies through your browser settings. Disabling cookies may affect
          your experience on some parts of the website.
        </p>

        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect the information collected
          through our website. However, no method of transmission over the
          Internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our website is designed for students and parents. We do not
          knowingly collect personal information from children under 13
          without parental consent. If you believe we have collected such
          information, please contact us immediately.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. You can also opt out of tracking by adjusting your
          browser settings or using privacy tools. For any privacy-related
          requests, please contact us at dk059511@gmail.com.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes
          will be posted on this page with an updated date. We encourage you
          to review this policy periodically.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us
          at <strong>dk059511@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
}
