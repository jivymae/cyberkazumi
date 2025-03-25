import React, { useState } from 'react';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, TwitterIcon, LucideIcon } from 'lucide-react';

interface FormStatus {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    error: null,
    success: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Raw response:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        throw new Error('Invalid response from server');
      }

      if (!data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error instanceof Error) {
        if (error.message === 'Failed to fetch') {
          errorMessage = 'Could not connect to the server. Please make sure the server is running.';
        } else if (error.message.includes('NetworkError')) {
          errorMessage = 'Network error occurred. Please check your internet connection.';
        } else {
          errorMessage = error.message;
        }
      }

      setStatus({ 
        loading: false, 
        error: errorMessage,
        success: false 
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return <section id="contact" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute -right-40 bottom-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">
              Get In Touch
            </span>
          </h2>
          <div className="h-px w-24 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out to me using
            the contact information below.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold mb-6 text-white">
              Contact Information
            </h3>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <MailIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-purple-300 mb-1">Email</p>
                <p className="text-white">hey.jivy@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <PhoneIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-purple-300 mb-1">Phone</p>
                <p className="text-white">+(63) 919 751 0039</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Connect with Me
              </h3>
              <div className="flex space-x-4">
                <SocialLink icon={<GithubIcon className="h-5 w-5" />} />
                <SocialLink icon={<LinkedinIcon className="h-5 w-5" />} />
                <SocialLink icon={<TwitterIcon className="h-5 w-5" />} />
              </div>
            </div>
          </div>
          {/* Contact form */}
          <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/30">
            <h3 className="text-xl font-bold mb-6 text-white">
              Send a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-purple-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-purple-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-purple-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-purple-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status.loading}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-md text-white font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] relative overflow-hidden group disabled:opacity-50"
              >
                <span className="relative z-10">
                  {status.loading ? 'Sending...' : 'Send Message'}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              {status.error && (
                <p className="text-red-400 text-sm">{status.error}</p>
              )}
              {status.success && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <footer className="mt-20 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Jivy Mae. All rights reserved.</p>
      </footer>
    </section>;
};

interface SocialLinkProps {
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  icon
}) => <a href="#" className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-purple-400 hover:text-white hover:bg-purple-600/50 transition-colors duration-300">
    {icon}
  </a>;

export default Contact;