import React, { useState, useEffect, useCallback } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, TrendingUp, X } from 'lucide-react';

// --- Types and Data ---

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  value: string;
  link: string;
  type: 'email' | 'phone' | 'address';
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const CONTACT_INFO_DATA: ContactInfo[] = [
  { icon: Mail, title: "Email Address", value: "sales@codemonk.com", link: "mailto:sales@codemonk.com", type: 'email' },
  { icon: Phone, title: "Phone Number", value: "+91 98765 43210", link: "tel:+919876543210", type: 'phone' },
  { icon: MapPin, title: "Office Location", value: "404 Tech Tower, Pune, MH, India", link: "#map", type: 'address' },
];

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

// --- Utility Components ---

const ContactInfoCard: React.FC<{ info: ContactInfo; delay: number }> = ({ info, delay }) => {
  const Icon = info.icon;
  
  const linkContent = info.type === 'address' ? (
    <span className="group-hover:text-white transition-colors duration-300">{info.value}</span>
  ) : (
    <a href={info.link} className="hover:underline group-hover:text-white transition-colors duration-300">
      {info.value}
    </a>
  );

  return (
    <div
      className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-start space-y-4 
                 transform hover:scale-[1.05] hover:bg-blue-600 transition-all duration-500 group cursor-pointer"
      style={{ animation: `fadeInUp 0.6s ease-out ${delay}ms forwards`, opacity: 0 }}
    >
      <div className="p-4 rounded-full bg-blue-100 text-blue-600 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-500">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">{info.title}</h3>
      <p className="text-gray-600 text-lg group-hover:text-blue-200 transition-colors duration-300">
        {linkContent}
      </p>
    </div>
  );
};

// --- Main App Component ---

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  // Custom CSS for Animations
  // Reusing the same professional animations as the About page
  useEffect(() => {
    // Only used to trigger the CSS animations on mount
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(styleSheet);
    return () => { document.head.removeChild(styleSheet); };
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (submissionStatus) setSubmissionStatus(null); // Clear status on new input
  }, [submissionStatus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // --- Simulating API call for form submission ---
    // In a real application, you would send formData to a backend endpoint here.
    console.log("Submitting Form Data:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      // Simulate success or failure
      const success = Math.random() > 0.1; // 90% chance of success
      setSubmissionStatus(success ? 'success' : 'error');
      
      if (success) {
        setFormData(INITIAL_FORM_DATA); // Clear form on success
      }
    }, 1500);
  };

  const getFormStatusMessage = () => {
    if (submissionStatus === 'success') {
      return (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg flex items-center justify-between" role="alert">
          <p className="font-medium">Message Sent! We'll be in touch shortly.</p>
          <button onClick={() => setSubmissionStatus(null)} className="text-green-700 hover:text-green-900"><X className="w-5 h-5"/></button>
        </div>
      );
    }
    if (submissionStatus === 'error') {
      return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg flex items-center justify-between" role="alert">
          <p className="font-medium">Error sending message. Please try again or call us.</p>
          <button onClick={() => setSubmissionStatus(null)} className="text-red-700 hover:text-red-900"><X className="w-5 h-5"/></button>
        </div>
      );
    }
    return null;
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Hero/Header Section */}
      <section className="py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 bg-white shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-6 tracking-wide" 
                style={{ animation: 'fadeInUp 0.6s ease-out 0ms forwards', opacity: 0 }}>
            GET IN TOUCH
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4" 
              style={{ animation: 'fadeInUp 0.6s ease-out 100ms forwards', opacity: 0 }}>
            Let's Build <span className="text-blue-600">Something Great</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto" 
             style={{ animation: 'fadeInUp 0.6s ease-out 200ms forwards', opacity: 0 }}>
            Ready to start your next project or just want to say hello? Our team is here to answer all your questions.
          </p>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CONTACT_INFO_DATA.map((info, index) => (
              <ContactInfoCard key={index} info={info} delay={300 + index * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Form and Map/Visual */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Form */}
            <div className="p-8 md:p-12 lg:p-16" style={{ animation: 'fadeInUp 0.8s ease-out 500ms forwards', opacity: 0 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-2"/>
                Start Your Project
              </h2>
              <p className="text-gray-600 mb-8">Fill out the form and a project manager will connect with you within 24 hours.</p>
              
              {getFormStatusMessage()}

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <div className="mt-1 relative rounded-lg shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <div className="mt-1 relative rounded-lg shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                        <div className="mt-1 relative rounded-lg shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                        <div className="mt-1 relative rounded-lg shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MessageSquare className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Website Development"
                            />
                        </div>
                    </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details / Message</label>
                  <div className="mt-1 relative rounded-lg shadow-sm">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your project, budget, and timeline..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3 border border-transparent text-lg font-bold rounded-xl shadow-lg 
                                transition-all duration-300 transform ${isFormValid && !isSubmitting 
                                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.01]' 
                                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="relative min-h-[400px] lg:min-h-full bg-gray-200 border-l border-gray-100" style={{ animation: 'fadeInUp 0.8s ease-out 700ms forwards', opacity: 0 }}>
              <div className="absolute inset-0 p-4 flex items-center justify-center">
                <div className="w-full h-full bg-gray-300 rounded-xl shadow-inner flex flex-col items-center justify-center text-gray-600 space-y-4">
                  <MapPin className="w-12 h-12 text-blue-600 animate-bounce" />
                  <p className="text-xl font-semibold">Our Main Office</p>
                  <p className="text-sm">404 Tech Tower, Pune, MH, India</p>
                  <a href="https://maps.google.com/?q=Pune" target="_blank" rel="noopener noreferrer" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                    View on Map
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Footer-like element (Optional) */}
      <div className="text-center py-6 text-sm text-gray-500 border-t border-gray-200">
        We value your privacy. All information is kept confidential.
      </div>
    </div>
  );
};

export default ContactUs;