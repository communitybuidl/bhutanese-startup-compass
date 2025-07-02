import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Organization {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  logo?: string;
  website?: string;
  email?: string;
  programs: string[];
  targetAudience: string[];
  location: string;
  established?: number;
}

interface OrganizationCardProps {
  organization: Organization;
  onViewDetails: (id: string) => void;
}

export const OrganizationCard = ({ organization, onViewDetails }: OrganizationCardProps) => {
  return (
    <div className="bg-card rounded-lg border shadow-card hover-lift p-6 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-card-foreground mb-2 line-clamp-2">
            {organization.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
            {organization.description}
          </p>
        </div>
        {organization.logo && (
          <div className="ml-4 w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-xs font-medium">
              {organization.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {organization.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
        {organization.tags.length > 3 && (
          <Badge variant="outline" className="text-xs">
            +{organization.tags.length - 3}
          </Badge>
        )}
      </div>

      <div className="space-y-2 mb-4 flex-1">
        {organization.programs.length > 0 && (
          <div>
            <span className="text-xs font-medium text-muted-foreground">Programs:</span>
            <p className="text-sm line-clamp-2">
              {organization.programs.slice(0, 2).join(", ")}
              {organization.programs.length > 2 && "..."}
            </p>
          </div>
        )}
        
        <div>
          <span className="text-xs font-medium text-muted-foreground">Location:</span>
          <p className="text-sm">{organization.location}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-xs text-muted-foreground">
          {organization.targetAudience.slice(0, 2).join(", ")}
        </div>
        <Button 
          size="sm" 
          variant="outline"
          onClick={() => onViewDetails(organization.id)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};