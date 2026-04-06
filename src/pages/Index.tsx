
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Book, Briefcase, Globe, Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { useEffect } from "react";


const Index = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
  {/* test */}
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* <p className="text-red-500 font-medium">Scholar & Expert in Marketing</p> */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <br />
                Prof. Dr. Hiram Ting
              </h1>

              {/* Align logo to match the left edge of the heading */}
              <img 
                src="/lovable-uploads/logo.png"
                alt="REBORN Logo"
                className="h-16 w-auto mt-2"
              />

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
                  src="/lovable-uploads/dr_hiram_crop3.png"
                  alt="Dr. Hiram Ting"
                  className="object-cover rounded-2xl w-full h-full"
                />
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* Biodata Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-red-500 font-medium mb-4">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                A Passionate Sarawakian
                <br />
                and Global Citizen
                <br />
                Driven by Curiosity,
                <br />
                Responsibility and
                <br />
                Value Co-creation
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
            <div className="space-y-6 text-gray-600 text-justify">
              <p className="leading-relaxed">
                Dr. Hiram is the President of Responsible Borneo (REBORN) 
                and Chairman of Sarawak Research Society (SRS). He works at 
                Strategic Research Institute, Asia Pacific University of 
                Technology and Innovation (APU) (Malaysia) as Senior 
                Research Fellow. He is also attached to Van Hien University 
                (Viet Nam), Brawijaya University (Indonesia), Wakayama 
                University (Japan), Phuket Rajabhat University (Thailand), 
                Sohar University (Oman), and Polytechnic University of the 
                Philippines (Philippines) in different capacities.

                <br/><br/>

                He serves as Editor-in-Chief of Young Consumers (Scopus & 
                JCR Q1), Journal of Applied Structural Equation Modeling 
                (Scopus Q1), Journal of Responsible Tourism Management 
                (JRTM), and Asian Journal of Business Research (Scopus Q2) as 
                well as Regional Editor of International Journal of Tourism 
                Research (Scopus & JCR Q1). He also serves as Editorial Board 
                Member of other journals, such as Journal of Consumer 
                Behaviour and Tourism Geographies. His papers are published 
                in some of the reputable journals, including European Journal 
                of Marketing, Tourism Management, International Journal of 
                Contemporary Hospitality Management, Journal of Retailing 
                and Consumer Services and Internet Research.

                <br/><br/>

                He has guest-edited more than 20 special issues on topics 
                related to marketing, consumer behaviour, tourism and 
                hospitality. His passion for youth and community as well as 
                responsible tourism led him to found Southeast Asia Research 
                Academy (SEARA) and International Centre for Responsible 
                Tourism in Southeast Asia (ICRT-SEA). He is the first 
                Ambassador of Emerald Publishing in East Asia, Special Advisor 
                of the International Centre of Responsible Tourism Global 
                (ICRT Global) from Southeast Asia, and Panel Member of 
                Tourism Experts of the UN Tourism (formerly known as 
                UNWTO). He is ranked among the World's Top 2% Scientists in 
                Business, Management and Marketing by Stanford University 
                and Elsevier. He is also acknowledged by Emerald Publishing 
                for being the most cited scholar in Southeast Asia (ranked 
                number 1) based on his publication in Emerald’s journals 
                indexed in Scopus in 2019-2024.

                <br/><br/>

                He can be contacted at: hiramparousia@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Positions */}
      {/* <section id="position" className="py-20 bg-white fade-up">
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
      </section> */}

      {/* Publications & Research */}
      {/* <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-white fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
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
            </div> */}

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
          {/* </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

const positions = [
  {
    title: "Director",
    institution: "Centre for Responsible Borneo (REBORN)",
    duration: "2019-Present"
  },
  // {
  //   title: "Professor",
  //   institution: "i-CATS University College, Sarawak, Malaysia",
  // },
  // {
  //   title: "Associate Professor",
  //   institution: "UCSI University, Faculty of Hospitality and Tourism Management",
  //   duration: "2018-2023"
  // },
  // {
  //   title: "Adjunct Professor",
  //   institution: "Taylor's University, Malaysia",
  //   duration: "2024-Present"
  // },
  // {
  //   title: "Adjunct Associate Professor",
  //   institution: "Ming Chuan University, Taiwan"
  // },
  // {
  //   title: "Professional Chair",
  //   institution: "Polytechnic University of the Philippines"
  // },
  // {
  //   title: "Visiting Fellow",
  //   institution: "Centre for Tourism Research, Wakayama University, Japan"
  // },
  // {
  //   title: "Research Officer",
  //   institution: "Faculty of Economics and Business, Universiti Malaysia Sarawak (UNIMAS)",
  //   duration: "2010-2016"
  // },
  // {
  //   title: "Tutor",
  //   institution: "Universiti Malaysia Sarawak (UNIMAS)",
  //   duration: "2011-2013"
  // },
  // {
  //   title: "Part-time MBA Lecturer",
  //   institution: "SEGi College Sarawak"
  // },
  // {
  //   title: "Part-time Lecturer/Tutor",
  //   institution: "Swinburne University of Technology, Sarawak"
  // },
  // {
  //   title: "Part-time MSc Tutor",
  //   institution: "Open University Malaysia, Sarawak Learning Centre"
  // },
  {
    title: "Chairman",
    institution: "Sarawak Research Society",
    duration: "2018-Present"
  },
  {
    title: "Co-Director",
    institution: "Southeast Asia Research Academy (SEARA)"
  },
  {
    title: "Editor-in-Chief",
    institution: "Young Consumers; Journal of Applied Structural Equation Modeling (JASEM); Responsible Tourism Management (JRTM); Asian Journal of Business Research (AJBR)"
  },
  {
    title: "Ambassador",
    institution: "Emerald Publishing, East Asia"
  },
  {
    title: "Panel Member",
    institution: "UN Tourism (formerly UNWTO) Panel of Tourism Experts"
  }
];


const publications = [
  {
    title: "An Outlook on Responsible Tourism in Southeast Asia",
    description: "Explores sustainable tourism practices and challenges in Southeast Asia.",
    year: "2022",
  },
  {
    title: "Do Privacy Stress and Brand Trust Still Matter?",
    description: "Investigates the impact of privacy concerns and brand trust on continuous online purchasing intentions in China.",
    year: "2022",
  },
  {
    title: "Responsible Tourism Management",
    description: "Research on sustainable tourism practices in Southeast Asia.",
    year: "2022",
  },
  {
    title: "Consumer Behavior Studies",
    description: "Analysis of consumer patterns in Malaysian markets.",
    year: "2022",
  },
  {
    title: "To Move or Not to Move? A Study of Sustainable Retirement Village in Malaysia",
    description: "Examines factors influencing the decision to relocate to sustainable retirement communities in Malaysia.",
    year: "2022",
  },
  {
    title: "The Dark and Bright Side of Online Consumer Behavior",
    description: "Analyzes both positive and negative aspects of online consumer behavior.",
    year: "2021",
  },
  {
    title: "Heritage Tourism in Sarawak",
    description: "Feasibility study on heritage tourism development.",
    year: "2021",
  },
  {
    title: "Editorial: Ethnic Food and Its Implications for Destination Tourism in Asia",
    description: "Discusses how ethnic cuisine influences tourism destinations in Asia.",
    year: "2020",
  },
  {
    title: "Compulsive Buying of Branded Apparel and the Mediating Role of Brand Attachment",
    description: "Studies the relationship between compulsive buying behavior and brand attachment in the context of branded apparel.",
    year: "2020",
  },
  {
    title: "Consumer Behavior and Disposition Decisions: The Why and How of Smartphones Disposition",
    description: "Investigates consumer behavior related to the disposal of smartphones.",
    year: "2019",
  },
  {
    title: "Beliefs About the Use of Instagram: An Exploratory Study",
    description: "Explores user beliefs and attitudes towards Instagram usage in emerging markets.",
    year: "2015",
  },
];


export default Index;
