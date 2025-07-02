import { Organization } from "@/components/OrganizationCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategoryName } from "@/data/sampleOrganizations";

interface OrganizationDetailProps {
  organization: Organization;
  onBack: () => void;
}

export const OrganizationDetail = ({ organization, onBack }: OrganizationDetailProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6"
      >
        ← Back to Directory
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl mb-2">{organization.name}</CardTitle>
                  <Badge variant="secondary" className="mb-4">
                    {getCategoryName(organization.category)}
                  </Badge>
                </div>
                {organization.logo && (
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-lg font-medium">
                      {organization.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {organization.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Programs & Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {organization.programs.map((program, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium">{program}</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Target Audience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {organization.targetAudience.map((audience, index) => (
                  <Badge key={index} variant="outline">
                    {audience}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Location</label>
                <p className="text-sm">{organization.location}</p>
              </div>
              
              {organization.website && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Website</label>
                  <p className="text-sm">
                    <a 
                      href={organization.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Visit Website
                    </a>
                  </p>
                </div>
              )}
              
              {organization.email && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-sm">
                    <a 
                      href={`mailto:${organization.email}`}
                      className="text-primary hover:underline"
                    >
                      {organization.email}
                    </a>
                  </p>
                </div>
              )}

              {organization.established && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Established</label>
                  <p className="text-sm">{organization.established}</p>
                </div>
              )}

              <div className="pt-4">
                <Button className="w-full">
                  Get Connected
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {organization.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};