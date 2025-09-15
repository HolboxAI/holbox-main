"use client"

import { Shield, Mail, FileText, Users, Globe, AlertTriangle, Scale, BookOpen, Eye } from "lucide-react"

export default function CompliancePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[hsl(221,70%,95%)] text-[hsl(221,70%,50%)] rounded-full text-sm font-medium mb-4">
            COMPLIANCE POLICY
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            HolboxAI – Anti-Corruption, Business Ethics, and Compliance Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This policy codifies the principles that govern our conduct in all jurisdictions where we operate,
            maintaining a zero-tolerance approach to bribery, corruption, fraud, or any conduct that compromises
            integrity.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-[hsl(221,70%,98%)] rounded-lg shadow-sm p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-[hsl(221,70%,50%)]" />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            <a href="#purpose" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              1. Purpose and Commitment
            </a>
            <a href="#scope" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              2. Scope of Application
            </a>
            <a href="#definitions" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              3. Definitions
            </a>
            <a
              href="#compliance-laws"
              className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
            >
              4. Compliance with Laws
            </a>
            <a href="#prohibition" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              5. Prohibition of Bribery
            </a>
            <a href="#gifts" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              6. Gifts & Entertainment
            </a>
            <a href="#third-party" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              7. Third-Party Engagements
            </a>
            <a
              href="#ethical-conduct"
              className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
            >
              8. Ethical Conduct
            </a>
            <a
              href="#record-keeping"
              className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors"
            >
              9. Record-Keeping
            </a>
            <a href="#reporting" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              10. Reporting & Protection
            </a>
            <a href="#training" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              11. Training & Awareness
            </a>
            <a href="#disciplinary" className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors">
              12. Disciplinary Action
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1 */}
          <section id="purpose" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">1. Purpose and Commitment</h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                HolboxAI ("the Company") recognizes that ethical conduct is the foundation of sustainable growth and
                long-term trust. This Anti-Corruption, Business Ethics, and Compliance Policy (the "Policy") has been
                adopted to codify the principles that govern our conduct in all jurisdictions where we operate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Company maintains a zero-tolerance approach to bribery, corruption, fraud, or any conduct that
                compromises integrity. All directors, officers, employees, agents, contractors, and business partners of
                HolboxAI are bound by this Policy and are expected to comply both with its express provisions and with
                its spirit of integrity and accountability.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="scope" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">2. Scope of Application</h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                This Policy applies to all individuals employed by or engaged with HolboxAI, including permanent,
                temporary, and contract staff, as well as consultants, intermediaries, resellers, joint venture
                partners, and other third parties acting on the Company's behalf.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The obligations herein extend to interactions with private businesses, public institutions, and
                government officials, regardless of whether the conduct occurs within or outside of the United States.
                No cultural custom, business norm, or local practice shall justify a deviation from this Policy.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="definitions" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">3. Definitions</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                For the purposes of this Policy, the following terms shall have the meanings assigned to them, it being
                expressly understood that such definitions shall apply broadly and inclusively, and shall cover all
                direct and indirect acts, whether undertaken personally, through intermediaries, or otherwise:
              </p>

              <div className="space-y-6">
                <div className="bg-[hsl(221,70%,98%)] rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">"Bribery"</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Shall mean the act of directly or indirectly offering, promising, giving, requesting, soliciting, or
                    accepting any financial or non-financial advantage, benefit, reward, or inducement, of whatever
                    nature or value, whether tangible or intangible, in order to improperly influence the judgment,
                    decision, action, or inaction of any person in a position of trust, whether in the public or private
                    sector. Bribery shall include, but not be limited to, securing business, obtaining an improper
                    business advantage, retaining business, influencing official acts, or causing another to act
                    dishonestly or improperly in the discharge of their duties.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">"Government Official"</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Shall include any elected or appointed official, officer, employee, or representative of any
                    national, state, provincial, municipal, or local government, agency, authority, or instrumentality
                    thereof; any individual acting in an official capacity on behalf of a government entity, department,
                    or regulatory body; any political party, party official, or candidate for public office; any officer
                    or employee of a government-owned or government-controlled enterprise; and any officer, employee, or
                    representative of a public international organization, including but not limited to the United
                    Nations, World Bank, International Monetary Fund, or similar multilateral or supranational bodies.
                  </p>
                </div>

                <div className="bg-[hsl(221,70%,98%)] rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">"Facilitation Payment"</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Shall mean any payment, however nominal in value, made to secure, expedite, or facilitate the
                    performance of routine, non-discretionary governmental actions or administrative services to which
                    the payer is already legally entitled, including but not limited to actions such as processing
                    permits, licenses, visas, customs clearances, police protection, mail or utility services, or
                    loading and unloading of cargo. For clarity, such payments, regardless of their size, frequency, or
                    customary acceptance in a local jurisdiction, are strictly prohibited by this Policy and shall
                    constitute an act of bribery.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">"Gift"</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Shall mean any item, service, benefit, privilege, favor, advantage, or thing of value, whether
                    tangible or intangible, provided without an expectation of fair market consideration, and shall
                    include, without limitation: cash, cash equivalents, loans, discounts, rebates, vouchers,
                    merchandise, artwork, jewelry, personal property, services, employment opportunities, preferential
                    treatment, tickets to events, transportation, travel, lodging, meals, entertainment, hospitality,
                    sponsorships, charitable donations made at the request of another, or any other benefit conferred
                    upon a person.
                  </p>
                </div>

                <div className="bg-[hsl(221,70%,98%)] rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">"Third Party"</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Shall mean any natural person or legal entity, not being the Company or its direct employees, that
                    is engaged, retained, or otherwise authorized to act on behalf of, represent, assist, support, or
                    provide services to the Company in any capacity. This shall include, without limitation,
                    consultants, advisors, agents, contractors, subcontractors, suppliers, vendors, distributors,
                    resellers, joint venture partners, intermediaries, and any of their affiliates, representatives, or
                    employees.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="compliance-laws" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">4. Compliance with Laws</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              HolboxAI conducts business in accordance with all applicable anti-corruption, anti-bribery, and compliance
              statutes, including but not limited to the U.S. Foreign Corrupt Practices Act (FCPA), the U.K. Bribery Act
              (where applicable), and relevant state and federal laws. All employees and representatives are expected to
              know, understand, and comply with these laws. Ignorance of the law or this Policy shall not constitute a
              defense.
            </p>
          </section>

          {/* Section 5 */}
          <section id="prohibition" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  5. Prohibition of Bribery and Improper Advantages
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              No person acting on behalf of HolboxAI shall, directly or indirectly, offer, authorize, solicit, or accept
              any form of payment, gift, entertainment, or advantage with the intent or effect of improperly influencing
              a decision, obtaining business, or securing an undue advantage. Facilitation payments are strictly
              prohibited under all circumstances. Even where no improper intent exists, employees must avoid situations
              that could create the appearance of impropriety or undermine trust.
            </p>
          </section>

          {/* Section 6 */}
          <section id="gifts" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">6. Gifts, Hospitality, and Entertainment</h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                The exchange of modest business courtesies is permissible only if they are customary, lawful,
                transparent, and of nominal value. Such courtesies must not, in any way, create a sense of obligation or
                expectation of reciprocity. Cash gifts or equivalents, such as vouchers, pre-paid cards, or securities,
                are strictly prohibited.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Employees must exercise heightened caution in dealings with Government Officials: no hospitality,
                travel, or entertainment may be extended without prior written approval from the Compliance Officer, and
                only where permitted by law.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="third-party" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  7. Commissions, Fees, and Third-Party Engagements
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              All arrangements with third parties must be governed by written contracts that detail the nature of
              services, compensation, and terms of engagement. Payments must be reasonable, commensurate with legitimate
              services rendered, and recorded accurately in the Company's books. HolboxAI expressly prohibits the use of
              intermediaries to disguise bribes or to channel improper payments. Third parties who fail to adhere to
              this Policy shall be subject to termination of relationship and possible legal recourse.
            </p>
          </section>

          {/* Section 8 */}
          <section id="ethical-conduct" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">8. Ethical Conduct and Business Integrity</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Employees and representatives of HolboxAI must act honestly, fairly, and with the utmost professionalism
              in all business dealings. Confidential information belonging to clients, employees, or the Company must be
              protected at all times. Actual or potential conflicts of interest must be disclosed immediately. The
              falsification, manipulation, or concealment of records or accounts is prohibited and will be treated as
              gross misconduct, exposing the violator to disciplinary action and potential criminal liability.
            </p>
          </section>

          {/* Section 9 */}
          <section id="record-keeping" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">9. Record-Keeping and Documentation</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The Company requires accurate and transparent record-keeping to ensure compliance with legal and ethical
              obligations. All accounts, invoices, expense claims, and documentation must be complete, truthful, and
              properly recorded. No false, misleading, or artificial entries shall be made in the Company's books. All
              supporting documents relating to business transactions must be retained in accordance with legal and
              regulatory requirements.
            </p>
          </section>

          {/* Section 10 */}
          <section id="reporting" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">10. Reporting and Whistleblower Protection</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Employees and associated persons are obligated to report any suspected or actual breach of this Policy
              promptly to the Compliance Officer through designated reporting channels. Reports may be made
              confidentially and will be investigated promptly and thoroughly. HolboxAI strictly prohibits retaliation
              against any individual who raises concerns in good faith. Retaliation itself shall be treated as a
              violation of this Policy.
            </p>
          </section>

          {/* Section 11 */}
          <section id="training" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">11. Training and Awareness</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              HolboxAI shall provide regular training on anti-corruption and business ethics to employees, managers, and
              relevant third parties. Participation in such training is mandatory. Employees are expected to remain
              informed of changes in applicable laws and Company policies.
            </p>
          </section>

          {/* Section 12 */}
          <section id="disciplinary" className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">12. Disciplinary Action and Legal Consequences</h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Violations of this Policy shall result in disciplinary action, which may include reprimand, suspension,
              demotion, termination of employment or contract, and restitution. Where the violation constitutes a breach
              of law, the Company will fully cooperate with authorities and violators may face prosecution, fines, or
              imprisonment.
            </p>
          </section>

          {/* Section 13 */}
          <section className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Waivers and Exceptions</h2>
            <p className="text-gray-600 leading-relaxed">
              No waiver, exemption, or deviation from this Policy shall be valid unless approved in writing by the
              Compliance Officer and, where necessary, ratified by the Board of Directors. Requests for exceptions shall
              be considered on a case-by-case basis, and only where the waiver does not compromise the Company's legal
              or ethical obligations.
            </p>
          </section>

          {/* Section 14 */}
          <section className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Governance and Periodic Review</h2>
            <p className="text-gray-600 leading-relaxed">
              This Policy has been adopted by the Board of Directors of HolboxAI and shall form part of the Company's
              corporate governance framework. The Policy will be reviewed annually, or more frequently if required by
              changes in law, regulatory guidance, or business operations. Updates shall be communicated to all
              employees and stakeholders, and compliance with the revised Policy shall be mandatory.
            </p>
          </section>

          {/* Section 15 */}
          <section className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Jurisdiction and Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              This Policy shall be governed by and construed in accordance with the laws of the United States and the
              State of Wyoming, without regard to conflict of law principles. Any disputes or claims arising under this
              Policy shall be subject to the exclusive jurisdiction of competent courts in the State of Wyoming, unless
              otherwise required by law.
            </p>
          </section>

          {/* Section 16 */}
          <section className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">16. Contact and Oversight</h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Questions concerning this Policy, requests for clarification, or reports of violations may be directed
                to:
              </p>
              <div className="bg-[hsl(221,70%,98%)] rounded-lg p-4">
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
                HolboxAI considers adherence to this Policy to be a condition of employment, partnership, and
                association. By following these provisions, the Company ensures that its business is conducted with
                honesty, fairness, and transparency, safeguarding its reputation and strengthening its role as a trusted
                leader in the AI and software industry.
              </p>
            </div>
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
            name: "Compliance Policy - HolboxAI",
            description:
              "HolboxAI's Anti-Corruption, Business Ethics, and Compliance Policy outlining our commitment to ethical conduct and legal compliance.",
            url: "https://holbox.ai/compliance-policy",
            mainEntity: {
              "@type": "Organization",
              name: "HolboxAI",
              email: "admin@holbox.ai",
            },
          }),
        }}
      />
    </div>
  )
}
