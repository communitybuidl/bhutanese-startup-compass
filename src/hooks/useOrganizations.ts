import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Organization } from '@/components/OrganizationCard';

export const useOrganizations = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrganizations = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('organizations')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;

      const formattedData: Organization[] = data.map(org => ({
        id: org.id,
        name: org.name,
        description: org.description,
        category: org.category,
        tags: org.tags || [],
        logo: org.logo_url,
        website: org.website,
        email: org.email,
        programs: org.programs || [],
        targetAudience: org.target_audience || [],
        location: org.location,
        established: org.established
      }));

      setOrganizations(formattedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  return { organizations, loading, error, refetch: fetchOrganizations };
};