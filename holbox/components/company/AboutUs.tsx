'use client';

import { motion } from 'framer-motion';

const AboutUs = () => {

    const benefits = [
  {
    number: '01',
    title: 'GenAI Consulting',
    description:
      'Engage with our GenAI consulting team through a series of workshops to identify the right use-cases & long-term strategy for GenAI adoption.',
  },
  {
    number: '02',
    title: 'GenAI App Development',
    description:
      'Leverage holboxAI fine-tuned LLMs, and custom pipelines to build and deploy GenAI-powered apps 70% faster.',
  },
  {
    number: '03',
    title: 'LLM Ops',
    description:
      'Manage your GenAI workloads in production with SLA-based monitoring, ensuring continuous accuracy of your models.',
  },
  {
    number: '04',
    title: 'GenAI Discovery Workshop',
    description:
      'An interactive session designed to help clients explore the potential of generative AI, understand its applications, and identify how it can drive innovation and value in their business.',
  },
  {
    number: '05',
    title: 'Infrastructure & Data Engineering',
    description:
      'Focuses on building robust, scalable infrastructure and data solutions. It helps businesses design, implement, and optimize data pipelines, cloud architectures, and data platforms to enable seamless operations, enhance performance, and support data-driven decision-making.',
  },
  {
    number: '06',
    title: 'GenAI APIs & Open Source Packages',
    description:
      'Helps clients to integrate AI capabilities into their existing systems, accelerating development and innovation by leveraging open-source technologies, we offer flexible, cost-effective solutions that are easy to adapt and scale to meet specific needs.',
  },
];

  return (
    <section className="bg-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Founded in 2023, <span className="font-semibold text-indigo-600">HolboxAI</span> has rapidly emerged as a leader in the generative AI industry, specializing in delivering cutting-edge consulting services, development, and managed services tailored to the unique needs of businesses across various sectors.
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our portfolio includes state-of-the-art GenAI-powered solutions such as intelligent customer service assistants and smart tools designed to enhance employee productivity and decision-making.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
