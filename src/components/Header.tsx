import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gradient">
            Startup Bhutan
          </h1>
          <span className="text-sm text-muted-foreground hidden md:block">
            Ecosystem Directory
          </span>
        </div>
        
        <div className="flex items-center space-x-4 flex-1 max-w-md ml-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search organizations..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 focus-ring"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Link to="/updates">
            <Button variant="ghost" size="sm">
              Updates
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex"
            onClick={() => window.open('https://forms.gle/p44D3S4YohJ8L7m19', '_blank')}
          >
            Add Organization
          </Button>
          <Button variant="default" size="sm">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};