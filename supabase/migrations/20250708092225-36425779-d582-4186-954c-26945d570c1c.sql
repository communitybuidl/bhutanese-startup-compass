-- Create organizations table
CREATE TABLE public.organizations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  logo_url TEXT,
  website TEXT,
  email TEXT,
  programs TEXT[] DEFAULT '{}',
  target_audience TEXT[] DEFAULT '{}',
  location TEXT NOT NULL,
  established INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create updates table
CREATE TABLE public.updates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
  organization_name TEXT,
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.updates ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (no auth required for viewing)
CREATE POLICY "Organizations are viewable by everyone" 
ON public.organizations 
FOR SELECT 
USING (true);

CREATE POLICY "Updates are viewable by everyone" 
ON public.updates 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_organizations_updated_at
  BEFORE UPDATE ON public.organizations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_updates_updated_at
  BEFORE UPDATE ON public.updates
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_organizations_category ON public.organizations(category);
CREATE INDEX idx_organizations_name ON public.organizations(name);
CREATE INDEX idx_updates_published_date ON public.updates(published_date DESC);
CREATE INDEX idx_updates_featured ON public.updates(is_featured) WHERE is_featured = true;