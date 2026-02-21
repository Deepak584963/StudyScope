import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/data";

export const metadata: Metadata = {
  title: `Disclaimer – ${SITE_NAME}`,
  description: `Disclaimer for ${SITE_NAME}. Understand the terms and limitations of the career guidance information provided on our website.`,
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
  openGraph: {
    title: `Disclaimer – ${SITE_NAME}`,
    description: `Disclaimer for ${SITE_NAME}. Terms and limitations of career guidance information.`,
    url: `${SITE_URL}/disclaimer`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Disclaimer – ${SITE_NAME}`,
  description: `Disclaimer for ${SITE_NAME}`,
  url: `${SITE_URL}/disclaimer`,
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Disclaimer", item: `${SITE_URL}/disclaimer` },
    ],
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Disclaimer
      </h1>

      <div className="prose max-w-none">
        <p>
          <strong>Last Updated:</strong> February 15, 2026
        </p>
        <p>
          The information provided on <strong>{SITE_NAME}</strong> ({SITE_URL})
          is for general informational and educational purposes only. While we
          strive to keep the information accurate and up to date, we make no
          representations or warranties of any kind about the completeness,
          accuracy, reliability, or suitability of the information.
        </p>

        <h2>General Information Only</h2>
        <p>
          The content on this website is intended to provide general career
          guidance for Arts students in India. It should not be considered as
          professional career counselling, legal advice, or official
          government information. For specific decisions regarding your
          education or career, we recommend consulting qualified
          professionals.
        </p>

        <h2>Exam &amp; Salary Information</h2>
        <p>
          Exam patterns, eligibility criteria, salary figures, and other
          details mentioned on this website are based on publicly available
          information at the time of writing. These details are subject to
          change by the respective conducting bodies and government
          authorities. Always verify the latest information from official
          sources before making any decisions.
        </p>

        <h2>External Links</h2>
        <p>
          Our website may contain links to external websites. We have no
          control over the content, privacy policies, or practices of
          third-party websites. Inclusion of any link does not imply
          endorsement or recommendation. Users access external links at their
          own risk.
        </p>

        <h2>No Guarantee of Results</h2>
        <p>
          While we provide preparation strategies and career guidance, we
          cannot guarantee success in any exam, career, or job application.
          Results depend on individual effort, circumstances, and various
          external factors beyond our control.
        </p>

        <h2>Affiliate &amp; Advertising Disclosure</h2>
        <p>
          This website may display advertisements through Google AdSense or
          other advertising networks. We may also include affiliate links to
          books or resources. These partnerships help us maintain and improve
          the website. Our editorial content is not influenced by advertising
          relationships.
        </p>

        <h2>User Responsibility</h2>
        <p>
          By using this website, you acknowledge that any reliance on the
          information provided is at your own risk. {SITE_NAME} and its
          authors shall not be liable for any losses, injuries, or damages
          arising from the use of information on this website.
        </p>

        <h2>Contact</h2>
        <p>
          If you find any inaccurate information on our website, please let us
          know at <strong>dk059511@gmail.com</strong> so we can
          correct it promptly. We value accuracy and appreciate feedback from
          our readers.
        </p>
      </div>
    </div>
    </>
  );
}
