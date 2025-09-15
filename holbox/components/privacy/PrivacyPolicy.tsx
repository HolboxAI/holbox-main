"use client"

import { Shield, Mail, FileText, Users, Lock, Globe } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[hsl(221,70%,95%)] text-[hsl(221,70%,50%)] rounded-full text-sm font-medium mb-4">
            PRIVACY POLICY
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Summertown Software LLP Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This privacy policy sets out how Summertown Software LLP collects, uses, discloses, and protects your
            personal data when you use our website, services, AI platform, and related offerings.
          </p>
          <div className="mt-6 text-sm text-gray-500">Effective Date: (to be filled)</div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-[hsl(221,70%,98%)] rounded-lg shadow-sm p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-[hsl(221,70%,50%)]" />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            <a
              href="#important-info"
              className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
            >
              1. Important Information
            </a>
            <a
              href="#contact-details"
              className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
            >
              2. Contact Details
            </a>
            <a
              href="#data-collection"
              className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
            >
              3. Data We Collect
            </a>
            <a href="#data-sources" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              4. How We Collect Data
            </a>
            <a href="#data-usage" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              5. How We Use Data
            </a>
            <a href="#data-sharing" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              6. Data Disclosures
            </a>
            <a
              href="#international-transfers"
              className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
            >
              7. International Transfers
            </a>
            <a
              href="#data-security"
              className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
            >
              8. Data Security
            </a>
            <a
              href="#data-retention"
              className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
            >
              9. Data Retention
            </a>
            <a href="#your-rights" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              10. Your Rights
            </a>
            <a href="#cookies" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              11. Cookies & Tracking
            </a>
            <a
              href="#contact-complaints"
              className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
            >
              14. Contact & Complaints
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1 */}
          <section id="important-info" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">1. Important Information and Who We Are</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Controller</h3>
                <p className="text-gray-600 leading-relaxed">
                  Summertown Software LLP is the data controller for the personal data collected through our website and
                  services (unless otherwise stated). When we act as a processor (e.g. under contract for our clients),
                  we will process personal data in accordance with their documented instructions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Purpose of this Policy</h3>
                <p className="text-gray-600 leading-relaxed mb-3">This Policy tells you about:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>what personal data we may collect;</li>
                  <li>how we use it;</li>
                  <li>who we might share it with;</li>
                  <li>your rights;</li>
                  <li>security, retention, and cross-border transfers; and</li>
                  <li>how to contact us.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">
                  This Policy supplements any other notices or agreements where we collect or use your data specifically
                  (e.g. in contracts, service‐level agreements, job applications etc.).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Jurisdiction / Applicable Laws</h3>
                <p className="text-gray-600 leading-relaxed">
                  Depending on your location, data protection laws may differ (for example GDPR in the European Economic
                  Area, CCPA in California, etc.). We aim to comply with applicable laws in the regions where we operate
                  or have clients.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="contact-details" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">2. Contact Details</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              If you have questions about this Policy or want to exercise your data rights, you can contact:
            </p>
            <div className="bg-[hsl(221,70%,98%)] rounded-lg p-4 mb-4">
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:admin@holbox.ai"
                  className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
                >
                  admin@holbox.ai
                </a>
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              You also have the right to lodge a complaint with relevant supervisory authorities in your jurisdiction.
            </p>
          </section>

          {/* Section 3 */}
          <section id="data-collection" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">3. Data We Collect About You</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              We may collect the following categories of personal data:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-[hsl(221,70%,95%)]">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Category</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Identity Data</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Name, title, date of birth (if relevant), username, or similar identifiers
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Contact Data</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Email address, telephone number, company name, mailing address
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Account / Usage Data</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Login details, account settings, usage metrics of our platform (pages visited, features used, time
                      spent etc.)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Technical Data</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      IP address, browser type & version, device type, operating system, device identifiers, domain,
                      access times, network logs
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Profile / Preference Data
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Job role, interests, preferences, communication preferences
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Transactional / Financial Data
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Billing information, payment history (if you purchase services)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Communications Data</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Records of correspondence, support requests, feedback, survey responses
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">AI-specific Data</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Data you input into our AI tools (text, documents, uploaded files, prompts), outputs generated,
                      usage logs. Depending on client configurations, possibly model training data (if agreed),
                      metadata.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Special Categories / Sensitive Data
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      As needed, e.g. health-related information, biometric data, race/ethnicity etc. Only if you
                      provide it and with explicit consent, or under legal bases permitted.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed mt-6">
              We may also process aggregated or anonymised data, for analytics, improvement of service, research, etc.,
              which does not identify you.
            </p>
          </section>

          {/* Section 4 */}
          <section id="data-sources" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">4. How We Collect Your Data</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">We collect data via:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                <strong>Direct interactions</strong> — When you sign up, request a demo, contact support, engage sales,
                or otherwise correspond with us.
              </li>
              <li>
                <strong>Automated / Technical means</strong> — Cookies, log files, usage tracking, analytics tools,
                monitoring of platform behaviour.
              </li>
              <li>
                <strong>Uploaded data</strong> — Files, prompts, documents, audio, images, other content you supply to
                the platform.
              </li>
              <li>
                <strong>Third parties / public sources</strong> — Partners, service providers, publicly available
                information, referrals, social media.
              </li>
              <li>
                <strong>Contracts / legal obligations</strong> — In cases where we need information to perform
                contractual obligations or to comply with law.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="data-usage" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">5. How We Use Your Personal Data</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              We use your data for the following purposes (and legal bases):
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-[hsl(221,70%,95%)]">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Purpose</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      What We Do
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Legal Basis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Service delivery</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Providing you access to our platform, features, performing the contract between you and us,
                      onboarding, support
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Contract performance</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Account management</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Managing your account, billing, subscription etc.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Contract performance / legal obligations
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Customer and user communications
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Responding to inquiries, support, updates, notifications
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Legitimate interest / consent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Improvement & development
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Monitoring usage, diagnosing issues, improving platform, feature development, AI model improvement
                      (as per terms)
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Legitimate interest / consent (where required)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Security, Fraud prevention, Compliance
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Ensuring system security, detecting misuse, complying with laws, audits
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Legal obligations / legitimate interest
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Marketing and promotions
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Sending you information about products or services we believe you may be interested in, provided
                      you have consented (or where permitted under law)
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Consent / legitimate interest</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Analytics and research
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Aggregated statistics, internal research, measuring and understanding usage
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Legitimate interest (or consent if required)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Legal obligations</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Taxes, data protection laws, regulatory compliance etc.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Legal obligations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed mt-6">
              You may have choices or rights to opt-out of certain uses (especially marketing or profiling) — see the
              "Your Rights" section.
            </p>
          </section>

          {/* Section 6 */}
          <section id="data-sharing" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">6. Disclosures of Your Personal Data</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">We may share your data with:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Affiliates/subsidiaries of Summertown Software LLP if needed for operations.</li>
              <li>
                Service providers/contractors who help with hosting, payment processing, customer support, analytics,
                etc. They process data on our behalf and under our instructions.
              </li>
              <li>
                Clients when you use the platform as a client (e.g. if data is shared under contract) or where you are a
                client or user of someone who is our client.
              </li>
              <li>Legal/regulatory authorities when required by law or to protect rights, property, safety.</li>
              <li>
                Acquisitions / Business transfers — if we merge, are acquired, or sell part of our business, your data
                may be transferred (but we'll require protections).
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We may also share anonymised or aggregated data which does not identify you.
            </p>
          </section>

          {/* Section 7 */}
          <section id="international-transfers" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">7. International Transfers</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              As Summertown Software LLP operates globally (or may use cloud / hosting / third-party services in
              different countries), your personal data may be transferred to, stored in, or processed in countries other
              than your country of residence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">We will ensure such transfers are lawful by using:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Standard contractual clauses or other legal safeguards;</li>
              <li>Ensuring recipients provide adequate protection;</li>
              <li>Data location options/region selection where feasible;</li>
              <li>Encryption and other technical measures.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="data-security" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">8. Data Security</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              We implement reasonable and appropriate technical and organisational measures to protect your personal
              data from unauthorized access, loss, disclosure or alteration, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Access controls and permissions;</li>
              <li>Encryption in transit and where appropriate at rest;</li>
              <li>Secure data storage;</li>
              <li>Monitoring and auditing of systems;</li>
              <li>Incident/breach response procedures.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              If there is a data breach and a notification is required under applicable law, we will notify affected
              users and authorities as needed.
            </p>
          </section>

          {/* Section 9 */}
          <section id="data-retention" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">9. Data Retention</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              We will retain your personal data only as long as needed for the purposes for which it was collected,
              including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>While your account is active;</li>
              <li>For as long as necessary to comply with contractual and legal obligations;</li>
              <li>For audit, tax, regulatory, diagnostic, security and internal governance purposes;</li>
              <li>
                Possible longer retention if required for dispute resolution, enforcing agreements, or if permitted
                under law.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Once data is no longer needed, we will securely delete or anonymise it.
            </p>
          </section>

          {/* Section 10 */}
          <section id="your-rights" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">10. Your Rights</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Depending on the law in your jurisdiction, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Request access to your data;</li>
              <li>Request correction/update of your data;</li>
              <li>Request deletion ("right to be forgotten") where applicable;</li>
              <li>
                Object to or restrict certain processing (e.g. marketing, profiling, data not needed for service);
              </li>
              <li>Withdraw consent at any time (where processing is based on consent);</li>
              <li>Portability of data (i.e. to receive your data in a structured, machine-readable format);</li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We may need to verify your identity before fulfilling such requests. We try to respond within legal
              timeframes (often within one month). If a request is complex, it may take longer, in which case we'll keep
              you informed.
            </p>
          </section>

          {/* Section 11 */}
          <section id="cookies" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">11. Cookies & Tracking Technologies</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies and similar technologies (such as web beacons, analytics pixels) to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Understand user interactions with our website;</li>
              <li>Improve user experience;</li>
              <li>Support performance and security;</li>
              <li>Provide analytics (traffic, usage patterns etc.).</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              You can control cookies via your browser settings and via any cookie consent banner / settings on our
              website.
            </p>
          </section>

          {/* Section 12 */}
          <section className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Change of Purpose</h2>
            <p className="text-gray-600 leading-relaxed">
              If we need to use your personal data for a purpose other than for which it was collected, we will let you
              know beforehand and ensure the legal basis is valid. We will also take reasonable steps to ensure the new
              use is compatible with the original purpose.
            </p>
          </section>

          {/* Section 13 */}
          <section className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Minors</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not intended for children under [e.g. 16] (or as required under applicable law). We do
              not knowingly collect data from minors; if we become aware that we have done so, we will take steps to
              remove it.
            </p>
          </section>

          {/* Section 14 */}
          <section id="contact-complaints" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">14. Contact & Complaints</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              If you have questions, concerns or want to make a request:
            </p>
            <div className="bg-[hsl(221,70%,98%)] rounded-lg p-4 mb-4">
              <p className="text-gray-700">
                Contact our DPO at{" "}
                <a
                  href="mailto:admin@holbox.ai"
                  className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
                >
                  admin@holbox.ai
                </a>
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              If dissatisfied, you may contact the supervisory authority in your jurisdiction.
            </p>
          </section>

          {/* Section 15 */}
          <section className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Miscellaneous</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                <strong>Fees for data requests:</strong> Usually free; in certain jurisdictions, if the request is
                unfounded, excessive, or repetitive, a reasonable fee may apply.
              </li>
              <li>
                <strong>Time to respond:</strong> We aim to respond to your rights requests within applicable law (often
                one month), unless complex.
              </li>
              <li>
                <strong>Accuracy of your data:</strong> Please keep us informed when your personal data changes.
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy - Summertown Software LLP",
            description:
              "Privacy policy for Summertown Software LLP detailing how we collect, use, and protect your personal data.",
            url: "https://holbox.ai/privacy-policy",
            mainEntity: {
              "@type": "Organization",
              name: "Summertown Software LLP",
              email: "admin@holbox.ai",
            },
          }),
        }}
      />
    </div>
  )
}
