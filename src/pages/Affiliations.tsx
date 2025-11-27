import { useEffect } from 'react';
import { Building, Briefcase, BookOpen, Award, Globe, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Affiliations = () => {
  // Initialize scroll position at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.fade-up').forEach(el => {
      observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, []);
  

  // Real academic institutions data from the screenshot
      const academicInstitutions = [
      {
        title: 'Senior Research Fellow',
        organization: 'Strategic Research Institute, Asia Pacific University of Technology and Innovation',
        location: 'Kuala Lumpur, Malaysia'
      },
      {
        title: 'Senior Professor',
        organization: 'Faculty of Tourism, Van Hien University',
        location: 'Ho Chi Minh City, Vietnam'
      },
      {
        title: 'Professorial Chairholder',
        organization: 'College of Business and College of Tourism, Hospitality and Transportation Management, Polytechnic University of the Philippines',
        location: 'Philippines'
      },
      {
        title: 'Adjunct Professor',
        organization: 'Faculty of Business, Sohar University',
        location: 'Oman'
      },
      {
        title: 'Adjunct Professor',
        organization: 'Faculty of Vocational Studies, Brawijaya University',
        location: 'Malang, Indonesia'
      },
      {
        title: 'Adjunct Professor',
        organization: 'School of Management and Marketing, Taylor\'s University',
        location: 'Subang Jaya, Malaysia'
      },
      {
        title: 'Visiting Professor',
        organization: 'International College, Krirk University',
        location: 'Bangkok, Thailand'
      },
      {
        title: 'Visiting Professor',
        organization: 'Lyceum of the Philippines University',
        location: 'Manila, Philippines'
      },
      {
        title: 'Visiting Scholar',
        organization: 'Faculty of Management Sciences, Phuket Rajabhat University',
        location: 'Phuket, Thailand'
      },
      {
        title: 'Visiting Fellow',
        organization: 'Center for Tourism Research, Wakayama University',
        location: 'Japan'
      }
    ];

  // Other sections data (placeholders)
  const otherSections = [
    {
      id: 'professional',
      title: 'Professional Engagement',
      icon: Briefcase,
      description: 'Professional roles and industry engagements',
      items: [
        { id: 1, title: 'President', organization: ' Responsible Borneo (REBORN)', period: '' },
        { id: 2, title: 'Chairman', organization: 'Sarawak Research Society', period: '' },
        { id: 3, title: 'Ambassador', organization: 'Emerald Publishing in East Asia', period: '' },
        { id: 4, title: 'Founder Director', organization: 'Southeast Asia Research Academy (SEARA)', period: '' },
        { id: 5, title: 'Special Advisor', organization: 'International Centre of Responsible Tourism Global (ICRT Global)', period: '' },
        { id: 6, title: 'Member', organization: 'UN Tourism (formerly known as UNWTO) Panel of Tourism Experts', period: '' },
        { id: 7, title: 'Vice President', organization: 'MAG (Marketing in Asia Group) Scholar', period: '' },
        { id: 8, title: 'Non-Executive Director', organization: 'CPS College Sarawak', period: '' },
      ]
    },
    {
      id: 'editorial',
      title: 'Journal Editorial',
      icon: BookOpen,
      description: 'Editorial positions and journal affiliations',
      items: [
        { id: 1, title: 'Editor-in-Chief', organization: 'Journal of Responsible Tourism Management (JRTM)', period: '' },
        { id: 2, title: 'Editor-in-Chief', organization: 'Journal of Applied Structural Equation Modelling (SCOPUS Q1)', period: '' },
        { id: 3, title: 'Regional Editor', organization: 'International Journal of Tourism Research (SSCI Q1)', period: '' },
        { id: 4, title: 'Editor-in-Chief', organization: 'Asian Journal of Business Research (SCOPUS Q2)', period: '' },
        { id: 5, title: 'Editor-in-Chief', organization: 'Young Consumers (SCOPUS Q1)', period: '' },
        { id: 6, title: 'Editor-in-Chief', organization: 'Sustainability in Tourism and Hospitality', period: '' },
        { id: 7, title: 'Advisory Board Member', organization: 'Journal of Marketing Advances and Practices', period: '' },
        { id: 8, title: 'Editorial Review Member', organization: 'Tourism Geographies, British Food Journal, Journal of Global Marketing, Journal of Consumer Behaviour', period: '' },
        { id: 9, title: 'Editorial Advisory Board Member', organization: 'Journal of Responsible Production and Consumption', period: '' },
        { id: 10, title: 'Publication Advisor', organization: 'BJSSH, University of Technology Sarawak (UTS); Journal of Agribusiness Marketing, Federal Agriculture Marketing Authority (FAMA); Sarawak Museum Journal, Sarawak Museum Department (SMD)', period: '' },
      ]
    },
    {
      id: 'notable',
      title: 'Other Notable Roles',
      icon: Award,
      description: 'Additional positions and appointments',
      items: [
        {
          id: 1,
          title: "World's Top 2% Scientists (2025)",
          organization: 'Business, Management and Marketing by Stanford University and Elsevier',
          period: ''
        },
        {
          id: 2,
          title: "World's Top 2% Scientists (2023,2024)",
          organization: 'Business, Management and Marketing by Stanford University and Elsevier',
          period: ''
        },
      ]
    }
  ];
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <header className="pt-24 pb-16 bg-[#f8f9fc] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900">
            Affiliations
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-16 max-w-5xl mx-auto">
          {/* Academic Institutions Section - Redesigned */}
          <section id="academic" className="fade-up scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-playfair font-semibold text-gray-900">ACADEMIC INSTITUTIONS</h2>
            </div>
            {/* <p className="text-lg text-gray-600 mb-8">
              Academic positions and institutional affiliations across the globe
            </p> */}

            <div className="space-y-6">
              {academicInstitutions.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-l-4 border-l-red-500 bg-[#ffffff] hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600">
                      <span className="flex items-center">
                        <Building className="inline-block w-4 h-4 mr-2 text-red-500" />
                        {item.organization}, {item.location}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator className="mt-12" />
          </section>


          {otherSections.map((section) => (
            <section key={section.id} id={section.id} className="fade-up scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl font-playfair font-semibold text-gray-900">{section.title}</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">{section.description}</p>

              <div className="space-y-6">
                {section.items.map((item) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden border-l-4 border-l-red-500 bg-[#ffffff] hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600">
                        <span className="flex items-center">
                          <Building className="inline-block w-4 h-4 mr-2 text-red-500" />
                          {item.organization}
                        </span>
                        {item.period && (
                          <span className="flex items-center">
                            <Calendar className="inline-block w-4 h-4 mr-2 text-red-500" />
                            {item.period}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator className="mt-12" />
            </section>
          ))}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Affiliations;
