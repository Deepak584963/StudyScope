import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/data";

export const metadata: Metadata = {
  title: `About Us – ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, India's trusted career guidance platform for Arts students providing information on careers, government jobs, and competitive exams.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        About {SITE_NAME}
      </h1>

      <div className="prose max-w-none">
        <p>
          Welcome to <strong>{SITE_NAME}</strong> — India&apos;s dedicated career guidance
          platform built specifically for Arts students. We understand that
          choosing the right career path after 12th Arts, BA, or MA can feel
          overwhelming, especially with limited guidance available for
          humanities students.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to provide clear, accurate, and actionable
          career information to every Arts student in India. We believe that
          Arts is not a &quot;backup stream&quot; — it is a powerful foundation for some
          of the most rewarding careers in the country, from civil services to
          creative industries.
        </p>

        <h2>What We Cover</h2>
        <ul>
          <li>
            <strong>Career Options:</strong> Detailed guides on career paths
            after 12th Arts, BA, and MA, including creative, teaching, and
            professional careers.
          </li>
          <li>
            <strong>Government Jobs:</strong> Comprehensive information on
            UPSC, SSC, Banking, Railways, and State PSC exams that are ideal
            for Arts graduates.
          </li>
          <li>
            <strong>Competitive Exams:</strong> Exam patterns, syllabus,
            eligibility criteria, and preparation strategies for all major
            exams.
          </li>
          <li>
            <strong>Course Comparisons:</strong> Honest, side-by-side
            comparisons to help students and parents make informed decisions.
          </li>
          <li>
            <strong>Study Resources:</strong> Proven study tips, book
            recommendations, and preparation strategies that actually work.
          </li>
        </ul>

        <h2>Who We Help</h2>
        <p>
          Our content is designed for Indian Arts students at every stage —
          whether you have just completed 12th, are pursuing your BA or MA, or
          are preparing for competitive exams. We also help parents who want
          to understand the career prospects available for their children in
          the Arts stream.
        </p>

        <h2>Our Approach</h2>
        <p>
          Every article on {SITE_NAME} is written in simple, easy-to-understand
          English. We provide structured information with clear headings,
          practical salary figures, eligibility details, and honest advantages
          and disadvantages. We do not promote unrealistic expectations — we
          present facts that help you plan your career wisely.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions or suggestions? We would love to hear from you. Visit
          our <a href="/contact" className="text-maroon-600 hover:underline">Contact page</a> to get in touch.
        </p>
      </div>
    </div>
  );
}
