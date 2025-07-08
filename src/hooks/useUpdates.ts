import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Update {
  id: string;
  title: string;
  content: string;
  organization_id?: string;
  organization_name?: string;
  published_date: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export const useUpdates = () => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUpdates = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('updates')
        .select('*')
        .order('published_date', { ascending: false });

      if (error) throw error;

      setUpdates(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  return { updates, loading, error, refetch: fetchUpdates };
};