
import { Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#000d30] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section - Title and Bio */}
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4"> Dr. Hiram Ting</h2>
              <p className="text-sm text-gray-300 mb-6">
                BE A MAN OF VALUE, REMAIN GRATEFUL, LIVE IN THE MOMENT & STAY PURPOSEFUL
              </p>
              
              <div className="flex space-x-4 text-gray-300">
  <a href="https://www.facebook.com/hiramparousia/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    <Facebook className="h-5 w-5" />
  </a>
  {/* <a href="https://twitter.com/hiramparousia" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    <Twitter className="h-5 w-5" />
  </a> */}
  <a href="https://www.linkedin.com/in/hiram-ting-%E9%99%B3%E8%8A%B3%E5%A0%AF-0a814536/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    <Linkedin className="h-5 w-5" />
  </a>
  <a href="https://scholar.google.com.my/citations?user=PvWwU8UAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    <span className="text-sm font-semibold">GS</span>
  </a>
  <a href="https://www.researchgate.net/profile/Hiram-Ting" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    <span className="text-sm font-semibold">RG</span>
  </a>
  {/* <a href="https://www.ucsiuniversity.edu.my/associate-professor-dr-hiram-ting" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    <span className="text-sm font-semibold">UCSI</span>
  </a> */}
</div>

            </div>
            
            {/* Right Section - Contact Information */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Email Section */}
                <div>
                  <h3 className="text-gray-400 uppercase text-sm font-medium mb-4">Send Mail</h3>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-red-400" />
                    <p>hiramparousia@gmail.com</p>
                  </div>
                </div>
                
                {/* Phone Section */}
                <div>
                  <h3 className="text-gray-400 uppercase text-sm font-medium mb-4">Make Call</h3>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-red-400" />
                    <p>+6018-365 3472</p>
                  </div>
                </div>
                
                {/* Location Section */}
                <div>
                  <h3 className="text-gray-400 uppercase text-sm font-medium mb-4">Get in Touch</h3>
                  <p className="mb-2">2nd-3rd Floor, Lot 153, Jalan Ban Hock, 93100 Kuching, Sarawak, Malaysia</p>
                  <p>Malaysia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer - Copyright */}
      <footer className="bg-[#000d30] text-gray-400 text-center py-6 text-sm">
        © 2025 Dr. Hiram Ting. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
