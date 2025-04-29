
import React from 'react';
import { Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const PublicationsMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer">
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
              <Link to="/publications/other-publications">
                <NavigationMenuLink className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}>
                  <div className="text-sm font-medium leading-none">Other Publications</div>
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
