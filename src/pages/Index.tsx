
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Book, Briefcase, Globe, Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-red-500 font-medium">Scholar & Expert in Marketing</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                I'm Professor
                <br /> 
                Dr. Hiram Ting
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Malaysian Scholar & Expert in Marketing, Tourism, and Responsible Business Practices
              </p>
              <div className="flex items-center gap-6 pt-4">
              <a href="https://wa.me/60183653472" target="_blank" rel="noopener noreferrer">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8">
                  Contact Me
                </Button>
              </a>

                {/* <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    ▶
                  </div>
                  <span>Watch Video</span>
                </button> */}
              </div>
            </div>
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] mx-auto">
              {/* Red Circle */}
              <div className="absolute inset-0 rounded-full bg-red-500" />

              {/* Photo */}
              <div className="relative w-[260px] h-[300px] sm:w-[300px] sm:h-[340px] md:w-[320px] md:h-[360px] mx-auto flex items-center justify-center">
                <img
                  src="/lovable-uploads/Dr_Hiram_Ting.png"
                  alt="Dr. Hiram Ting"
                  className="object-cover rounded-2xl w-full h-full"
                />
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* Biodata Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-red-500 font-medium mb-4">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Designing
                <br />
                With Passion
                <br />
                While Exploring
                <br />
                The World
              </h2>
              <div className="flex gap-6">
                {/* <Button className="bg-red-500 hover:bg-red-600">
                  Download CV
                </Button> */}
                {/* <Button variant="outline">
                  My Process
                </Button> */}
              </div>
            </div>
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                I specialize in marketing research and responsible tourism practices, leading academic initiatives and research teams across Southeast Asia. I enjoy creating impactful research that bridges theory and practice, contributing to both academic knowledge and industry development.
              </p>
              <p className="leading-relaxed">
                As the Director of Responsible Borneo (REBORN) and Chairman of Sarawak Research Society, I work towards sustainable tourism development and responsible business practices in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Positions */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-500 font-medium mb-4">Academic Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Academic Positions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 bg-[#fff5f5] border-none"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-red-500" />
                </div>
                <div className="space-y-3">
                  <p className="text-red-500 text-sm">{position.duration}</p>
                  <h3 className="font-bold text-xl text-gray-900">{position.title}</h3>
                  <p className="text-gray-600">{position.institution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Research */}
      <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <p className="text-red-500 font-medium mb-4">Latest Work</p>
              <h2 className="text-5xl font-bold text-gray-900 mb-12">
                Publications & Research
              </h2>

              <div className="flex flex-col space-y-16">
                {publications.map((pub, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-red-500">
                    <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-red-500"></span>
                    <p className="text-red-500 mb-1">{pub.year}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                    <p className="text-gray-600">{pub.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images - Creative Layout */}
{/* <div className="lg:w-1/2 relative">
 
  <div className="relative mb-16">

    <div className="absolute right-0 top-8 w-4/5 h-72 bg-gray-100"></div>
    

    <div className="relative z-10 ml-8 mb-2">
      <img src="/api/placeholder/600/400" alt="Research" className="w-full h-72 object-cover shadow-lg" />
    </div>
    

    <div className="absolute -bottom-12 -left-4 w-2/5 z-20">
      <img src="/api/placeholder/300/300" alt="Publication detail" className="w-full h-40 object-cover shadow-lg border-4 border-white" />
    </div>
    

    <div className="absolute -right-5 -bottom-5 w-16 h-16 bg-red-500 flex items-center justify-center shadow-lg z-30">
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
  

  <div className="relative ml-16">
    <img src="/api/placeholder/500/300" alt="Research work" className="w-full h-56 object-cover shadow-lg" />
    

    <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-red-500"></div>
  </div>
</div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#000d30] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section - Title and Bio */}
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4"> Dr Hiram.</h2>
              <p className="text-sm text-gray-300 mb-6">
                Malaysian Scholar & Expert in Marketing, Tourism, and Responsible Business Practices
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 text-gray-300">
                <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-behance"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            
            {/* Right Section - Contact Information */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Email Section */}
                <div>
                  <h3 className="text-gray-400 uppercase text-sm font-medium mb-4">Send Mail</h3>
                  <p className="mb-2">hiramparousia@gmail.com</p>
                  <p></p>
                </div>
                
                {/* Phone Section */}
                <div>
                  <h3 className="text-gray-400 uppercase text-sm font-medium mb-4">Make Call</h3>
                  <p className="mb-2">+6018-365 3472</p>
                  <p></p>
                </div>
                
                {/* Location Section */}
                <div>
                  <h3 className="text-gray-400 uppercase text-sm font-medium mb-4">Get in Touch</h3>
                  <p className="mb-2">2nd-3rd Floor Lot 153, Jalan Ban Hock 93100, Jalan Ban Hock, 93350 Kuching, Sarawak</p>
                  <p>Malaysia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const positions = [
  // {
  //   title: "Adjunct Professor",
  //   institution: "Taylor's University, Malaysia",
  //   duration: "2020-Present"
  // },
  // {
  //   title: "Adjunct Professor",
  //   institution: "Sohar University, Oman",
  //   duration: "2019-Present"
  // },
  // {
  //   title: "Visiting Professor",
  //   institution: "Krirk University, Thailand",
  //   duration: "2021-Present"
  // },
  // {
  //   title: "Chairman",
  //   institution: "Sarawak Research Society",
  //   duration: "2018-Present"
  // },
  {
    title: "Director",
    institution: "Centre for Responsible Borneo (REBORN)",
    duration: "2019-Present"
  },
  // {
  //   title: "Editor-in-Chief",
  //   institution: "Journal of Responsible Tourism Management",
  //   duration: "2020-Present"
  // },
];

const publications = [
  // {
  //   title: "Guide on SmartPLS 3.0",
  //   description: "Comprehensive guide for using SmartPLS 3.0 in research",
  //   year: "2023",
  // },
  {
    title: "Responsible Tourism Management",
    description: "Research on sustainable tourism practices in Southeast Asia",
    year: "2022",
  },
  {
    title: "Consumer Behavior Studies",
    description: "Analysis of consumer patterns in Malaysian markets",
    year: "2022",
  },
  {
    title: "Heritage Tourism in Sarawak",
    description: "Feasibility study on heritage tourism development",
    year: "2021",
  },
];

export default Index;
