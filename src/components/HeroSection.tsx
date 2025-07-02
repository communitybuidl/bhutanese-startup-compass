import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bhutan-hero.jpg";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Discover Bhutan's{" "}
            <span className="text-gradient">Startup Ecosystem</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive directory connecting entrepreneurs, investors, and ecosystem players 
            across the Kingdom of Bhutan. Find opportunities, avoid duplication, and build collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero" 
              onClick={onExploreClick}
              className="min-w-[200px]"
            >
              Explore Ecosystem
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]">
              Add Your Organization
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">45+</div>
              <div className="text-sm text-muted-foreground">Active Startups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};