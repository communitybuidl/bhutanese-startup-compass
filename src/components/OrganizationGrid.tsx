import { Organization, OrganizationCard } from "@/components/OrganizationCard";

interface OrganizationGridProps {
  organizations: Organization[];
  onViewDetails: (id: string) => void;
}

export const OrganizationGrid = ({ organizations, onViewDetails }: OrganizationGridProps) => {
  if (organizations.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground text-lg mb-4">
          No organizations found matching your criteria
        </div>
        <p className="text-sm text-muted-foreground">
          Try adjusting your search terms or category filter
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {organizations.map((organization) => (
        <OrganizationCard
          key={organization.id}
          organization={organization}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};