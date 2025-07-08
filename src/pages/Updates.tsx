import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUpdates } from "@/hooks/useUpdates";
import { ArrowLeft, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Updates = () => {
  const { updates, loading, error } = useUpdates();

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header searchQuery="" onSearchChange={() => {}} />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
            <div className="grid gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 bg-muted rounded"></div>
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
        <Header searchQuery="" onSearchChange={() => {}} />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-destructive">Error loading updates: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  const featuredUpdates = updates.filter(update => update.is_featured);
  const regularUpdates = updates.filter(update => !update.is_featured);

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery="" onSearchChange={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Directory
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Latest Updates
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest news and announcements from Bhutan's startup ecosystem
          </p>
        </div>

        {featuredUpdates.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Star className="h-6 w-6 mr-2 text-primary" />
              Featured Updates
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredUpdates.map((update) => (
                <Card key={update.id} className="hover-lift border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{update.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(update.published_date).toLocaleDateString()}
                          </div>
                          {update.organization_name && (
                            <Badge variant="secondary">{update.organization_name}</Badge>
                          )}
                        </div>
                      </div>
                      <Badge variant="default" className="ml-4">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {update.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {regularUpdates.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">All Updates</h2>
            <div className="space-y-6">
              {regularUpdates.map((update) => (
                <Card key={update.id} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{update.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(update.published_date).toLocaleDateString()}
                          </div>
                          {update.organization_name && (
                            <Badge variant="outline">{update.organization_name}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {update.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {updates.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg mb-4">
              No updates available yet
            </div>
            <p className="text-sm text-muted-foreground">
              Check back soon for the latest news from Bhutan's startup ecosystem
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Updates;