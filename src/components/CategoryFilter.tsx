import { Button } from "@/components/ui/button";

export const categories = [
  { id: "all", name: "All Categories", count: 150 },
  { id: "government", name: "Government Partners", count: 15 },
  { id: "events", name: "Events & Communities", count: 25 },
  { id: "media", name: "Media", count: 12 },
  { id: "incubators", name: "Incubators & Accelerators", count: 8 },
  { id: "investors", name: "Investors & VC", count: 18 },
  { id: "education", name: "Education", count: 20 },
  { id: "training", name: "Training & Mentorship", count: 22 },
  { id: "infrastructure", name: "Startup Infrastructure", count: 14 },
  { id: "market", name: "Market Access", count: 16 },
  { id: "policy", name: "Bhutan Access Policy", count: 6 },
  { id: "startups", name: "Startups & SMEs", count: 45 },
  { id: "miscellaneous", name: "Miscellaneous", count: 9 }
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="w-full bg-muted/30 border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "category"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className="text-xs"
            >
              {category.name}
              <span className="ml-1 text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};