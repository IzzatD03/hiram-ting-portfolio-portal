
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Book, Briefcase, Globe, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-playfair">
                Dr. Hiram Ting
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Malaysian Scholar & Expert in Marketing, Tourism, and Responsible Business Practices
              </p>
              <div className="space-x-4">
                <Button asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#publications">View Publications</a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div 
                className="w-full h-full bg-cover bg-center" 
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            {/* Left Column - Highlights */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">First Ambassador</h3>
                <p className="text-gray-600">Emerald Publishing in East Asia</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">UN Tourism Expert</h3>
                <p className="text-gray-600">First Malaysian in UN Tourism Panel</p>
              </Card>
            </div>

            {/* Right Column - Main Bio */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-primary mb-6 font-playfair">Biography</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Dr Hiram is the Director of Responsible Borneo (REBORN) and Chairman of Sarawak Research Society. He is attached to i-CATS University College Sarawak in Malaysia as a Professor.
                </p>
                <p>
                  He is affiliated with several universities abroad, including Wakayama University in Japan and Polytechnic University of the Philippines.
                </p>
                <p>
                  As Editor-in-Chief, he oversees multiple prestigious journals:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Young Consumers</li>
                  <li>Journal of Applied Structural Equation Modeling (JASEM)</li>
                  <li>Responsible Tourism Management (JRTM)</li>
                  <li>Asian Journal of Business Research (AJBR)</li>
                </ul>
                <p>
                  His research appears in reputable journals including European Journal of Marketing, Tourism Management, and International Journal of Contemporary Hospitality Management.
                </p>
                <p>
                  Driven by his passion for youth and responsible tourism, he founded:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Southeast Asia Research Academy (SEARA)</li>
                  <li>International Centre for Responsible Tourism in Southeast Asia (ICRT-SEA)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Positions */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center font-playfair">Academic Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <Briefcase className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{position.title}</h3>
                <p className="text-gray-600">{position.institution}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Research */}
      <section id="publications" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center font-playfair">Publications & Research</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <Book className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-4">{pub.description}</p>
                <p className="text-sm text-gray-500">{pub.year}</p>
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
