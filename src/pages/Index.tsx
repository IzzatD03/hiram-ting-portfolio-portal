import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Book, Briefcase, Globe, Mail, Phone } from "lucide-react";

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
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8">
                  Contact Me
                </Button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    ▶
                  </div>
                  <span>Watch Video</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-4 -top-4 w-[500px] h-[500px] bg-red-500 rounded-full" />
              <div 
                className="relative w-full h-[500px] bg-cover bg-center rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: 'url(/lovable-uploads/2dac7cea-ed94-42ce-a4ae-69928dc9db2a.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
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
                <Button className="bg-red-500 hover:bg-red-600">
                  Download CV
                </Button>
                <Button variant="outline">
                  My Process
                </Button>
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
                  <p className="text-red-500 text-sm">{position.duration || '2020-Present'}</p>
                  <h3 className="font-bold text-xl text-gray-900">{position.title}</h3>
                  <p className="text-gray-600">{position.institution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Research */}
      <section id="publications" className="py-20 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-500 font-medium mb-4">Latest Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Publications & Research
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 bg-white border-none"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Book className="w-6 h-6 text-red-500" />
                </div>
                <div className="space-y-3">
                  <p className="text-red-500 text-sm">{pub.year}</p>
                  <h3 className="font-bold text-xl text-gray-900 line-clamp-2">{pub.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{pub.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center font-playfair">Contact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Mail className="w-8 h-8 mx-auto text-primary mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">hiramparousia@gmail.com</p>
            </Card>
            <Card className="p-6 text-center">
              <Phone className="w-8 h-8 mx-auto text-primary mb-4" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-600">+6018-365 3472</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="w-8 h-8 mx-auto text-primary mb-4" />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-600">Malaysia</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

const positions = [
  {
    title: "Adjunct Professor",
    institution: "Taylor's University, Malaysia",
  },
  {
    title: "Adjunct Professor",
    institution: "Sohar University, Oman",
  },
  {
    title: "Visiting Professor",
    institution: "Krirk University, Thailand",
  },
  {
    title: "Chairman",
    institution: "Sarawak Research Society",
  },
  {
    title: "Director",
    institution: "Centre for Responsible Borneo (REBORN)",
  },
  {
    title: "Editor-in-Chief",
    institution: "Journal of Responsible Tourism Management",
  },
];

const publications = [
  {
    title: "Guide on SmartPLS 3.0",
    description: "Comprehensive guide for using SmartPLS 3.0 in research",
    year: "2023",
  },
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
