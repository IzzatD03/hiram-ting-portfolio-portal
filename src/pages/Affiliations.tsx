
import { useEffect } from 'react';
import { Building, Briefcase, BookOpen, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Affiliations = () => {
  // Initialize scroll position at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Placeholder data - you can replace this with your actual content later
  const sections = [
    {
      id: 'academic',
      title: 'Academic Institution',
      icon: Building,
      description: 'Academic positions and institutional affiliations',
      items: [
        // Placeholders - replace with actual data later
        { id: 1, title: 'Your academic position will go here', organization: 'Your institution name', period: 'Duration' },
      ]
    },
    {
      id: 'professional',
      title: 'Professional Engagement',
      icon: Briefcase,
      description: 'Professional roles and industry engagements',
      items: [
        // Placeholders - replace with actual data later
        { id: 1, title: 'Your professional role will go here', organization: 'Organization name', period: 'Duration' },
      ]
    },
    {
      id: 'editorial',
      title: 'Journal Editorial',
      icon: BookOpen,
      description: 'Editorial positions and journal affiliations',
      items: [
        // Placeholders - replace with actual data later
        { id: 1, title: 'Your editorial role will go here', organization: 'Journal name', period: 'Duration' },
      ]
    },
    {
      id: 'notable',
      title: 'Other Notable Roles',
      icon: Award,
      description: 'Additional positions and appointments',
      items: [
        // Placeholders - replace with actual data later
        { id: 1, title: 'Your notable role will go here', organization: 'Organization name', period: 'Duration' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <header className="pt-24 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 animate-fade-in">Affiliations</h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            Professional connections, academic positions, and editorial roles that shape my contributions to research and education.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-16 max-w-5xl mx-auto">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="fade-up scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-playfair font-semibold text-gray-900">{section.title}</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">{section.description}</p>
              
              <div className="space-y-6">
                {section.items.map((item) => (
                  <Card key={item.id} className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600">
                        <span className="flex items-center">
                          <Building className="inline-block w-4 h-4 mr-2" />
                          {item.organization}
                        </span>
                        <span className="flex items-center">
                          <span className="inline-block w-4 h-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </span>
                          {item.period}
                        </span>
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

      {/* Add scroll reveal effect */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', () => {
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
          });
        `
      }} />
    </div>
  );
};

export default Affiliations;
