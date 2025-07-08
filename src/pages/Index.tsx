import { useState, useMemo, useRef } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilter, categories } from "@/components/CategoryFilter";
import { OrganizationGrid } from "@/components/OrganizationGrid";
import { OrganizationDetail } from "@/components/OrganizationDetail";
import { useOrganizations } from "@/hooks/useOrganizations";
import { Organization } from "@/components/OrganizationCard";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null);
  const directoryRef = useRef<HTMLDivElement>(null);
  const { organizations, loading, error } = useOrganizations();

  const filteredOrganizations = useMemo(() => {
    let filtered = organizations;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(org => org.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(org => 
        org.name.toLowerCase().includes(query) ||
        org.description.toLowerCase().includes(query) ||
        org.tags.some(tag => tag.toLowerCase().includes(query)) ||
        org.programs.some(program => program.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [activeCategory, searchQuery, organizations]);

  const handleExploreClick = () => {
    directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDetails = (id: string) => {
    const organization = organizations.find(org => org.id === id);
    if (organization) {
      setSelectedOrganization(organization);
    }
  };

  const handleBackToDirectory = () => {
    setSelectedOrganization(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-64 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-destructive">Error loading organizations: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (selectedOrganization) {
    return (
      <div className="min-h-screen bg-background">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <OrganizationDetail 
          organization={selectedOrganization} 
          onBack={handleBackToDirectory}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <HeroSection onExploreClick={handleExploreClick} />
      
      <div ref={directoryRef}>
        <CategoryFilter 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory}
        />
        
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">
              {activeCategory === "all" 
                ? "All Organizations" 
                : categories.find(c => c.id === activeCategory)?.name
              }
            </h2>
            <p className="text-muted-foreground">
              {filteredOrganizations.length} organizations found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
          
          <OrganizationGrid 
            organizations={filteredOrganizations}
            onViewDetails={handleViewDetails}
          />
        </section>
      </div>
    </div>
  );
};

export default Index;
