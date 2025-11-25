import React, { useState, useEffect } from 'react';
import { Shield, Users, Rocket, Clipboard, Star, Award, Zap, Smartphone, LifeBuoy, Linkedin, Twitter, Quote, TrendingUp } from 'lucide-react';

// --- Types and Data ---

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
}

interface EvolutionStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Milestone {
  icon: React.ElementType;
  title: string;
  year: number;
  description: string;
}

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string; // Placeholder or direct URL (using placeholder here)
  linkedin: string;
  twitter: string;
}

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  company: string;
  text: string;
  results: string;
  link: string;
}

interface Guarantee {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const STATS_DATA: Stat[] = [
  { icon: Shield, value: "5+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Successful Projects" },
  { icon: Star, value: "100%", label: "Client Satisfaction" },
];

const EVOLUTION_DATA: EvolutionStep[] = [
  { icon: Rocket, title: "Innovation Begins", description: "Founded in 2024 by experienced engineers focused on custom software solutions addressing real business challenges." },
  { icon: TrendingUp, title: "Expanding Horizons", description: "Comprehensive services across web, mobile, cloud solutions, and e-commerce for multiple industries." },
];

const MILESTONES_DATA: Milestone[] = [
  { icon: Rocket, title: "Company Launch", year: 2024, description: "Founded with a vision to revolutionize business operations through innovative software solutions." },
  { icon: Clipboard, title: "Enterprise Partnership", year: 2024, description: "Secured first major enterprise client, delivering scalable software solutions." },
  { icon: Star, title: "Platform Launch", year: 2024, description: "Launched flagship custom software development platform for business productivity." },
  { icon: Award, title: "Industry Recognition", year: 2025, description: "Received recognition for innovative software development methodologies." },
];

const TEAM_DATA: TeamMember[] = [
  { name: "Vivek Bhos", title: "Co-Founder", description: "Technology visionary and business strategist with deep expertise in software development.", image: "https://placehold.co/150x150/5B55FF/FFFFFF?text=VB", linkedin: "#", twitter: "#" },
  { name: "Naresh Bhosale", title: "Co-Founder", description: "Software architecture expert specializing in scalable solutions, cloud technologies, and agile delivery.", image: "https://placehold.co/150x150/5B55FF/FFFFFF?text=NB", linkedin: "#", twitter: "#" },
  { name: "Ajay Pathade", title: "Co-Founder", description: "Digital marketing strategist with expertise in growth hacking, SEO, and driving business leads.", image: "https://placehold.co/150x150/5B55FF/FFFFFF?text=AP", linkedin: "#", twitter: "#" },
];

const TESTIMONIALS_DATA: Testimonial[] = [
  { initials: "NG", name: "Nitin Ghodke", role: "Founder & Director", company: "Donate Aid Society", text: "Codemonk transformed our vision into reality with the Donate Aid platform. Their technical expertise and understanding helped us create a transparent, user-friendly donation system...", results: "5000+ active users, ₹50L+ donations processed", link: "#" },
  { initials: "SM", name: "Shekhar Maske", role: "Business Consultant", company: "Start Business Consulting", text: "The team at Codemonk delivered an exceptional business consulting platform that perfectly represents our services. Their attention to detail and professional approach was outstanding...", results: "75+ startups consulted, 85% success rate", link: "#" },
];

const GUARANTEES_DATA: Guarantee[] = [
  { icon: Zap, title: "90+ PageSpeed Score Guarantee", description: "Your website will load faster than 90% of websites online, or we refund 50% of development cost.", color: "text-orange-500" },
  { icon: Star, title: "First Page Google Ranking", description: "We guarantee your website will rank on Google's first page for your business location + service keywords within 6 months.", color: "text-blue-500" },
  { icon: Smartphone, title: "Mobile-Perfect Promise", description: "Your website will look and work perfectly on all devices. Mobile responsiveness guaranteed or free fixes.", color: "text-purple-500" },
  { icon: LifeBuoy, title: "24/7 Support Commitment", description: "Round-the-clock technical support. Any issue resolved within 4 hours or next month's maintenance is free.", color: "text-pink-500" },
];

// --- Utility Components ---

const SectionHeader: React.FC<{ sub: string; titlePrimary: string; titleSecondary: string; description: string }> = ({ sub, titlePrimary, titleSecondary, description }) => (
  <div className="text-center mb-12">
    <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4 uppercase tracking-wider">{sub}</span>
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      {titlePrimary} <span className="text-blue-600">{titleSecondary}</span>
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
  </div>
);

const StatCard: React.FC<{ stat: Stat; delay: number }> = ({ stat, delay }) => (
  <div
    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex items-center space-x-4 transform hover:scale-[1.03] transition-all duration-300"
    style={{ animation: `fadeInUp 0.6s ease-out ${delay}ms forwards`, opacity: 0 }}
  >
    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600">
      <stat.icon className="w-8 h-8" />
    </div>
    <div>
      <p className="text-4xl font-extrabold text-gray-900">{stat.value}</p>
      <p className="text-sm text-gray-500">{stat.label}</p>
    </div>
  </div>
);

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:translate-y-[-5px] group border border-gray-100">
    <div className="flex justify-center mb-6">
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-white group-hover:border-blue-500 transition-all duration-500"
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x150/5B55FF/FFFFFF?text=CM'; }}
      />
    </div>
    <div className="text-center">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
      <p className="text-sm text-blue-500 font-medium mb-3">{member.title}</p>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.description}</p>
      <div className="flex justify-center space-x-4">
        <a href={member.linkedin} aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700 transition-colors duration-300">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href={member.twitter} aria-label="Twitter" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
);

const MilestoneCard: React.FC<{ milestone: Milestone; index: number }> = ({ milestone, index }) => (
  <div
    className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500/0 hover:border-blue-500 transition-all duration-500 transform hover:scale-[1.02]"
    style={{ animation: `fadeInRight 0.7s ease-out ${index * 100}ms forwards`, opacity: 0 }}
  >
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 shrink-0">
        <milestone.icon className="w-6 h-6" />
      </div>
      <div className="grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
          <span className="px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-full">{milestone.year}</span>
        </div>
        <p className="text-gray-600 text-sm">{milestone.description}</p>
      </div>
    </div>
  </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => (
  <div
    className="bg-white p-8 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl flex flex-col justify-between h-full border border-gray-100"
    style={{ animation: `fadeInUp 0.6s ease-out ${index * 150}ms forwards`, opacity: 0 }}
  >
    <div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mr-4">
          {testimonial.initials}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-xs text-gray-500">{testimonial.role} at {testimonial.company}</p>
        </div>
      </div>
      <div className="text-yellow-500 mb-4 text-xl">
        {'★'.repeat(5)}
      </div>
      <p className="text-gray-700 italic mb-6 relative">
        <Quote className="w-5 h-5 absolute -top-2 -left-4 text-blue-100" />
        {testimonial.text}
      </p>
    </div>
    <div className="pt-4 mt-auto border-t border-gray-100">
      <p className="text-sm font-semibold text-gray-700 mb-2">Results:</p>
      <p className="text-blue-600 font-bold text-lg">{testimonial.results}</p>
      <a href={testimonial.link} className="text-blue-500 text-sm font-medium mt-2 block hover:underline">
        View Project &rarr;
      </a>
    </div>
  </div>
);

const GuaranteeCard: React.FC<{ guarantee: Guarantee; index: number }> = ({ guarantee, index }) => (
  <div
    className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-[1.03] flex items-start space-x-4 border border-gray-100"
    style={{ animation: `fadeInLeft 0.7s ease-out ${index * 100}ms forwards`, opacity: 0 }}
  >
    <div className={`p-3 rounded-xl bg-white shadow-md shrink-0 ${guarantee.color}`}>
      <guarantee.icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{guarantee.title}</h3>
      <p className="text-sm text-gray-600">{guarantee.description}</p>
    </div>
  </div>
);

// --- Main App Component ---

const About: React.FC = () => {
  // Simple state for triggering CSS animations after mount (simulating scroll effects)
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // Wait a brief moment to ensure all elements are in the DOM before Aboutlying animations
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>


      {/* 1. Hero Section */}
      <section className="py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <span className="inline-block px-4 py-1 text-sm font-medium text-blue-700 bg-blue-200 rounded-full mb-6 tracking-wide" style={{ animation: 'fadeInUp 0.6s ease-out 0ms forwards', opacity: 0 }}>ABOUT CODEMONK</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6" style={{ animation: 'fadeInUp 0.6s ease-out 100ms forwards', opacity: 0 }}>
              Transforming Ideas into <span className="text-blue-600">Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8" style={{ animation: 'fadeInUp 0.6s ease-out 200ms forwards', opacity: 0 }}>
              Codemonk is a leading software development company delivering custom solutions, web Aboutlications, and digital transformation services that drive business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10 max-w-sm" style={{ animation: 'fadeInUp 0.6s ease-out 300ms forwards', opacity: 0 }}>
              {STATS_DATA.slice(0, 2).map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600">
                        <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4" style={{ animation: 'fadeInUp 0.6s ease-out 400ms forwards', opacity: 0 }}>
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-[1.05]">
                Our Journey
              </button>
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors duration-300 transform hover:scale-[1.05]">
                Meet Our Team
              </button>
            </div>
          </div>

          <div className="relative h-96 w-full lg:h-full lg:min-h-[500px]" style={{ animation: 'fadeInRight 0.8s ease-out 50ms forwards', opacity: 0 }}>
            <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-1 border-4 border-blue-100"></div>
            <img 
              src="https://placehold.co/800x600/5B55FF/FFFFFF?text=Team+Working"
              alt="Team Collaboration"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/5B55FF/FFFFFF?text=Team+Working'; }}
            />
          </div>
        </div>
      </section>

      {/* 2. Journey/Evolution Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            sub="Our Journey"
            titlePrimary="From Startup to"
            titleSecondary="Tech Leader"
            description="Our evolution showcases our commitment to innovation and client success over the years."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative h-96 w-full" style={{ animation: 'fadeInLeft 0.8s ease-out 50ms forwards', opacity: 0 }}>
              <div className="absolute inset-0 bg-gray-100 rounded-3xl border-4 border-blue-500/20 shadow-xl" ></div>
              <img 
                src="https://placehold.co/800x600/0000FF/FFFFFF?text=Office+Environment"
                alt="Office Environment"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl transform translate-x-4 translate-y-4 hover:translate-x-0 hover:translate-y-0 transition-transform duration-700 shadow-2xl"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/0000FF/FFFFFF?text=Office+Environment'; }}
              />
            </div>

            <div className="space-y-8">
              {EVOLUTION_DATA.map((step, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl shadow-md border-l-4 border-blue-600 transform hover:scale-[1.01] transition-all duration-300"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 150 + 100}ms forwards`, opacity: 0 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600 shrink-0">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Milestones Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            sub="Our History"
            titlePrimary="Key"
            titleSecondary="Milestones"
            description="Our journey of innovation and technological excellence, marked by significant achievements."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {MILESTONES_DATA.map((milestone, index) => (
              <MilestoneCard key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            sub="Meet The Founders"
            titlePrimary="Leadership"
            titleSecondary="Team"
            description="Expert team combining software development and business strategy to deliver exceptional results."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {TEAM_DATA.map((member, index) => (
              <div key={index} style={{ animation: `fadeInUp 0.7s ease-out ${index * 150}ms forwards`, opacity: 0 }}>
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Success Stories/Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            sub="Client Success Stories"
            titlePrimary="Real Success from"
            titleSecondary="Real Clients"
            description="See how we transformed digital presence and achieved business growth for our valued partners."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Guarantees Section */}
      <section className="py-20 bg-blue-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our <span className="text-blue-200">Guarantees</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">Confidence in quality backed by guarantees</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {GUARANTEES_DATA.map((guarantee, index) => (
              <GuaranteeCard key={index} guarantee={guarantee} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer-like element (Optional, but good practice) */}
      {/* <div className="text-center py-6 text-sm text-gray-500 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Codemonk. All rights reserved.
      </div> */}
    </div>
  );
};

export default About;