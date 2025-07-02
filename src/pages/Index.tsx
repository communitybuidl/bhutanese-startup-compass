import { useState, useMemo, useRef } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilter, categories } from "@/components/CategoryFilter";
import { OrganizationGrid } from "@/components/OrganizationGrid";
import { OrganizationDetail } from "@/components/OrganizationDetail";
import { sampleOrganizations } from "@/data/sampleOrganizations";
import { Organization } from "@/components/OrganizationCard";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null);
  const directoryRef = useRef<HTMLDivElement>(null);

  const filteredOrganizations = useMemo(() => {
    let filtered = sampleOrganizations;

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
  }, [activeCategory, searchQuery]);

  const handleExploreClick = () => {
    directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDetails = (id: string) => {
    const organization = sampleOrganizations.find(org => org.id === id);
    if (organization) {
      setSelectedOrganization(organization);
    }
  };

  const handleBackToDirectory = () => {
    setSelectedOrganization(null);
  };

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
