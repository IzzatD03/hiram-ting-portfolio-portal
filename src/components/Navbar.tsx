import { useState } from 'react';
import { Menu, X, Home, Users, Package, Calendar, FileText, Newspaper } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import PublicationsMenu from './PublicationsMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home }, 
    { name: 'Affiliations', href: '/affiliations', icon: Users },
    // Publications is now handled by the PublicationsMenu component
    { name: 'Projects', href: '/projects', icon: Package },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Curriculum Vitae', href: '/cv', icon: FileText },
    { name: 'News', href: '/news', icon: Newspaper },
  ];
  
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-playfair font-bold text-primary">Dr. Hiram Ting</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {/* Home and Affiliations */}
              {navigation.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
              
              {/* Publications Menu - Now using our hover-activated component */}
              <PublicationsMenu />
              
              {/* Projects, Events, CV, and News */}
              {navigation.slice(2).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Home and Affiliations */}
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
            
            {/* Publications in Mobile Menu - Keep the expanded version for mobile */}
            <div className="px-3 py-2">
              <div className="text-gray-700 font-medium flex items-center gap-2">
                <Book className="h-5 w-5" />
                Publications
              </div>
              <div className="ml-7 mt-1 space-y-1">
                <Link
                  to="/publications/journal-articles"
                  className="text-gray-600 hover:text-primary block py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Journal Articles
                </Link>
                <Link
                  to="/publications/books-chapters"
                  className="text-gray-600 hover:text-primary block py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Books and Chapters
                </Link>
                <Link
                  to="/publications/other-publications"
                  className="text-gray-600 hover:text-primary block py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Other Publications
                </Link>
              </div>
            </div>
            
            {/* Projects, Events, CV, and News */}
            {navigation.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
