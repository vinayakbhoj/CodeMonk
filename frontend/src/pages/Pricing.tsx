import React, { useState } from 'react';
import {
//   Check,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Lock,
  Clock,
  Users,
  Zap,
  Ribbon,
  Monitor,
  Smartphone,
  HardHat,
  Code,
} from 'lucide-react';

// --- Data Definitions ---

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  popular: boolean;
  features: PlanFeature[];
  accentColor: string; // Tailwind color class for border/button
}

interface ValueProp {
  icon: React.ElementType;
  title: string;
  description: string;
  iconBgColor: string; // Tailwind color class for icon background
}

interface ServiceItem {
  icon: React.ElementType;
  category: string;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Component Data ---

const webDevPlans: PricingPlan[] = [
  {
    title: 'Basic Web Development',
    subtitle: 'Perfect for small businesses and startups looking to establish their online presence',
    price: '₹14,999',
    popular: false,
    accentColor: 'border-gray-300',
    features: [
      { text: 'Responsive Website Design', included: true },
      { text: '5 Pages Website Development', included: true },
      { text: 'Contact Form Integration', included: true },
      { text: 'Basic SEO Optimization', included: true },
      { text: 'Social Media Integration', included: true },
      { text: '1 Month Technical Support', included: true },
      { text: 'Custom UI/UX Design', included: false },
      { text: 'E-commerce Integration', included: false },
    ],
  },
  {
    title: 'Advanced Web Development',
    subtitle: 'Ideal for growing businesses requiring custom features and enhanced functionality',
    price: '₹24,999',
    popular: true,
    accentColor: 'border-blue-600',
    features: [
      { text: 'Everything in Basic Package', included: true },
      { text: 'Custom UI/UX Design', included: true },
      { text: '10-15 Pages Website', included: true },
      { text: 'Advanced SEO Optimization', included: true },
      { text: '3 Months Technical Support', included: true },
      { text: 'E-commerce Integration', included: false },
      { text: 'Custom Feature Development', included: false },
      { text: 'Priority Support', included: false },
    ],
  },
  {
    title: 'Premium Web Development',
    subtitle: 'Complete solution for enterprises requiring advanced features and scalability',
    price: '₹74,999',
    popular: false,
    accentColor: 'border-gray-300',
    features: [
      { text: 'Everything in Advanced Package', included: true },
      { text: 'E-commerce Integration', included: true },
      { text: 'Custom Feature Development', included: true },
      { text: 'API Development', included: true },
      { text: '6 Months Technical Support', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Microservices Architecture', included: false },
      { text: '1 Year Technical Support', included: false },
    ],
  },
];

const fullStackPlans: PricingPlan[] = [
  {
    title: 'Basic Full-Stack Development',
    subtitle: 'Essential full-stack solutions for small to medium businesses',
    price: '₹99,999',
    popular: false,
    accentColor: 'border-gray-300',
    features: [
      { text: 'Web & Mobile Application Development', included: true },
      { text: 'Basic Cloud Infrastructure Setup', included: true },
      { text: 'Database Design & Implementation', included: true },
      { text: 'Basic Security Implementation', included: true },
      { text: '3 Months Technical Support', included: true },
      { text: 'Advanced Cloud Infrastructure', included: false },
      { text: 'DevOps Implementation', included: false },
      { text: '1 Year Technical Support', included: false },
    ],
  },
  {
    title: 'Advanced Full-Stack Development',
    subtitle: 'Comprehensive development package for growing enterprises',
    price: '₹2,49,999',
    popular: true,
    accentColor: 'border-purple-600',
    features: [
      { text: 'Everything in Basic Package', included: true },
      { text: 'Advanced Cloud Infrastructure', included: true },
      { text: 'CI/CD Pipeline Setup', included: true },
      { text: 'Advanced Security Features', included: true },
      { text: '6 Months Technical Support', included: true },
      { text: 'Advanced Monitoring & Logging', included: true },
      { text: 'Microservices Architecture', included: false },
      { text: '24/7 Monitoring & Support', included: false },
    ],
  },
  {
    title: 'Premium Full-Stack Development',
    subtitle: 'Enterprise-grade solutions with advanced architecture and scalability',
    price: '₹4,99,999',
    popular: false,
    accentColor: 'border-gray-300',
    features: [
      { text: 'Everything in Advanced Package', included: true },
      { text: 'Microservices Architecture', included: true },
      { text: 'DevOps Implementation', included: true },
      { text: 'Advanced Security & Compliance', included: true },
      { text: '1 Year Technical Support', included: true },
      { text: '24/7 Monitoring & Support', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Custom SLA', included: true },
    ],
  },
];

const valueProps: ValueProp[] = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Rigorous testing ensures performance and reliability.',
    iconBgColor: 'bg-green-100/70 text-green-600',
  },
  {
    icon: Lock,
    title: 'Security First',
    description: 'Built-in security measures protect your data.',
    iconBgColor: 'bg-blue-100/70 text-blue-600',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'On-time delivery with regular updates.',
    iconBgColor: 'bg-orange-100/70 text-orange-600',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced developers create exceptional solutions.',
    iconBgColor: 'bg-purple-100/70 text-purple-600',
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Optimized for speed and scalability.',
    iconBgColor: 'bg-yellow-100/70 text-yellow-600',
  },
  {
    icon: Ribbon,
    title: 'Ongoing Support',
    description: 'Comprehensive post-launch support.',
    iconBgColor: 'bg-red-100/70 text-red-600',
  },
];

const serviceItems: ServiceItem[] = [
  {
    icon: Monitor,
    category: 'WEB SOLUTIONS',
    title: 'Custom Web Development',
    description: 'Professional web applications with modern frameworks for strong online presence.',
  },
  {
    icon: Smartphone,
    category: 'MOBILE SOLUTIONS',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications with seamless user experience.',
  },
  {
    icon: HardHat,
    category: 'ENTERPRISE SOLUTIONS',
    title: 'Full-Stack Development',
    description: 'Complete end-to-end software solutions including frontend and backend.',
  },
];

const faqData: FAQItem[] = [
  {
    question: "What's included in technical support?",
    answer:
      "Technical support includes bug fixes, minor content updates, and critical security patches for the duration specified in your package. For advanced packages, we offer priority and 24/7 support.",
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer:
      'Yes, you can upgrade your plan at any time. Downgrades are handled on a case-by-case basis and may incur a small fee. Contact our sales team to discuss your specific needs.',
  },
  {
    question: 'Do you offer custom software development?',
    answer:
      'Absolutely. Our premium plans are designed for highly customized projects. We work with you to define requirements and build bespoke software tailored to your business processes.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We primarily use modern, scalable technologies such as React, Next.js, Node.js, Python/Django, TypeScript, and various cloud platforms (AWS, GCP, Azure). We choose the best tech stack for your project needs.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Project timelines vary based on complexity. Basic web projects can take 4-6 weeks, while advanced full-stack solutions can take 3-6 months. We provide a detailed timeline after the initial consultation.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Yes, all our plans include a minimum period of post-launch technical support. We also offer long-term maintenance and retainer agreements to keep your application running smoothly.',
  },
];

// --- Sub-Components ---

const PricePlanCard: React.FC<{ plan: PricingPlan; planType: 'web' | 'fullstack' }> = ({ plan, planType }) => {
  const isPopular = plan.popular;
  const popularClasses = isPopular
    ? planType === 'web'
      ? 'border-blue-600 shadow-xl scale-[1.02] transition-all duration-300'
      : 'border-purple-600 shadow-xl scale-[1.02] transition-all duration-300'
    : 'border-gray-300 hover:shadow-lg transition-shadow duration-300';

  const buttonClasses =
    planType === 'web'
      ? 'bg-blue-600 hover:bg-blue-700'
      : 'bg-purple-600 hover:bg-purple-700';

  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl bg-white border-2 ${popularClasses} transition-all duration-300 w-full`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full shadow-lg whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{plan.title}</h3>
        <p className="text-sm text-gray-500">{plan.subtitle}</p>
      </div>

      <div className="text-center mb-8">
        <span className="text-sm text-gray-500 block">Starting from</span>
        <p className="text-5xl font-extrabold text-gray-900 mt-1">{plan.price}</p>
      </div>

      <ul className="space-y-3 grow mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm">
            <CheckCircle
              className={`w-5 h-5 mr-3 shrink-0 ${
                feature.included ? 'text-green-500' : 'text-gray-300'
              }`}
            />
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-auto w-full py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-md ${buttonClasses}`}
      >
        Choose Plan
      </button>
    </div>
  );
};

const ValuePropCard: React.FC<{ prop: ValueProp }> = ({ prop }) => {
  const Icon = prop.icon;
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
      <div
        className={`p-3 rounded-xl mb-4 ${prop.iconBgColor} bg-opacity-80`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-bold text-gray-800 mb-2">{prop.title}</h4>
      <p className="text-sm text-gray-500">{prop.description}</p>
    </div>
  );
};

const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => {
//   const Icon = item.icon;
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-t-blue-500 hover:shadow-lg transition-all duration-300 h-full">
      <p className="text-xs font-semibold text-blue-500 mb-2">{item.category}</p>
      <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
      <p className="text-gray-500 mb-4">{item.description}</p>
      <a href="#" className="flex items-center text-blue-600 font-medium text-sm group">
        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

const FAQAccordion: React.FC<{ faq: FAQItem[] }> = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faq.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <button
            className="flex justify-between items-center w-full text-left font-semibold text-gray-800"
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-gray-600 text-sm">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// --- Main Page Component ---

const PricingPage: React.FC = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-800 pb-20">
      {/* Hero Section Placeholder for Spacing/Context */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold">Codemonk Agency Pricing</h1>
          <p className="text-lg text-gray-500 mt-2">Find the perfect development package for your business needs.</p>
        </div>
      </div>

      {/* Web Development Plans Section */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 mb-3">
              <Monitor className="w-4 h-4 mr-2" /> WEB DEVELOPMENT
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Web Development <span className="text-blue-600">Plans</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Choose the perfect web development package for your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webDevPlans.map((plan, index) => (
              <PricePlanCard key={index} plan={plan} planType="web" />
            ))}
          </div>
        </div>
      </section>

      {/* Full-Stack Development Plans Section */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-600 mb-3">
              <Code className="w-4 h-4 mr-2" /> FULL-STACK SOLUTIONS
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Full-Stack Development <span className="text-purple-600">Plans</span>
            </h2>
            <p className="text-gray-500 mt-2">
              End-to-end development solutions for complex business requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {fullStackPlans.map((plan, index) => (
              <PricePlanCard key={index} plan={plan} planType="fullstack" />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Pricing Special Section (Value Props) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              What Makes Our <span className="text-blue-600">Pricing Special</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Comprehensive services and features that ensure project success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {valueProps.map((prop, index) => (
              <ValuePropCard key={index} prop={prop} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Included Section */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Services Included in Our Pricing Plans
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceItems.map((item, index) => (
              <ServiceCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Find answers to common questions about our pricing and services.
            </p>
          </div>
          <FAQAccordion faq={faqData} />
        </div>
      </section>

      {/* Need More Information/CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-8 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need More Information?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore these resources to learn more about our development approach.
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center text-blue-600 font-medium group hover:underline"
              >
                <ArrowRight className="w-4 h-4 mr-3 shrink-0 text-green-500" />
                View Our Complete Service Portfolio
              </a>
              <a
                href="#"
                className="flex items-center text-blue-600 font-medium group hover:underline"
              >
                <ArrowRight className="w-4 h-4 mr-3 shrink-0 text-green-500" />
                Learn About Our Development Process
              </a>
              <a
                href="#"
                className="flex items-center text-blue-600 font-medium group hover:underline"
              >
                <ArrowRight className="w-4 h-4 mr-3 shrink-0 text-green-500" />
                Meet Our Development Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;