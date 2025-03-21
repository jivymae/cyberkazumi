import React from 'react';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
const Contact = () => {
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
                <p className="text-white">jivy.mae@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <PhoneIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-purple-300 mb-1">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
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
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-purple-300 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-purple-300 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-purple-300 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-purple-300 mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-md text-white font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] relative overflow-hidden group">
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="mt-20 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Jivy Mae. All rights reserved.</p>
      </footer>
    </section>;
};
const SocialLink = ({
  icon
}) => <a href="#" className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-purple-400 hover:text-white hover:bg-purple-600/50 transition-colors duration-300">
    {icon}
  </a>;
export default Contact;