import React from 'react';
import { Book } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const PublicationsMenu = () => {
  const navigate = useNavigate();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* NavigationMenuTrigger is a button that redirects */}
          <NavigationMenuTrigger
            onClick={() => navigate('/publications')}
            className="bg-transparent hover:bg-accent/40 px-3 py-2 text-gray-700 hover:text-primary flex items-center gap-2 rounded-md transition-colors"
          >
            <Book className="h-4 w-4" />
            Publications
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="w-[200px] p-2">
              <Link to="/publications/journal-articles">
                <NavigationMenuLink className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}>
                  <div className="text-sm font-medium leading-none">Journal Articles</div>
                </NavigationMenuLink>
              </Link>
              <Link to="/publications/books-chapters">
                <NavigationMenuLink className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}>
                  <div className="text-sm font-medium leading-none">Books and Chapters</div>
                </NavigationMenuLink>
              </Link>
              <Link to="/publications/conference-proceedings">
                <NavigationMenuLink className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}>
                  <div className="text-sm font-medium leading-none">Conference Proceedings</div>
                </NavigationMenuLink>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default PublicationsMenu;
