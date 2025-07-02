import { Organization } from "@/components/OrganizationCard";

export const sampleOrganizations: Organization[] = [
  {
    id: "1",
    name: "UNDP Bhutan",
    description: "United Nations Development Programme supporting sustainable development and innovation initiatives in Bhutan, including startup acceleration programs.",
    category: "government",
    tags: ["Development", "UN", "Sustainability", "Innovation"],
    programs: ["Startup Acceleration", "Innovation Labs", "SDG Implementation"],
    targetAudience: ["Early Stage Startups", "Social Entrepreneurs"],
    location: "Thimphu",
    website: "https://undp.org.bt",
    established: 1973
  },
  {
    id: "2",
    name: "Druk Holding & Investments",
    description: "Government-owned investment arm promoting private sector development and innovation in Bhutan through strategic investments and support programs.",
    category: "government",
    tags: ["Investment", "Government", "Private Sector"],
    programs: ["Strategic Investments", "Business Development", "Innovation Funding"],
    targetAudience: ["Growth Stage Companies", "SMEs"],
    location: "Thimphu"
  },
  {
    id: "3",
    name: "Startup Weekend Bhutan",
    description: "Annual entrepreneurship event bringing together developers, designers, and business minds to build startups in 54 hours.",
    category: "events",
    tags: ["Events", "Networking", "Hackathon"],
    programs: ["Startup Weekend", "Networking Events", "Pitch Competitions"],
    targetAudience: ["Aspiring Entrepreneurs", "Students", "Developers"],
    location: "Thimphu"
  },
  {
    id: "4",
    name: "Business Bhutan",
    description: "Leading business publication covering startup stories, industry trends, and economic development in Bhutan.",
    category: "media",
    tags: ["Media", "News", "Business"],
    programs: ["Business Coverage", "Startup Stories", "Industry Analysis"],
    targetAudience: ["Entrepreneurs", "Investors", "General Public"],
    location: "Thimphu"
  },
  {
    id: "5",
    name: "Loden Foundation",
    description: "Non-profit organization supporting entrepreneurship development through education, mentorship, and micro-financing programs.",
    category: "incubators",
    tags: ["Incubation", "Education", "Microfinance"],
    programs: ["Entrepreneurship Education", "Mentorship", "Micro-lending"],
    targetAudience: ["Rural Entrepreneurs", "Youth", "Women Entrepreneurs"],
    location: "Thimphu"
  },
  {
    id: "6",
    name: "Bhutan Innovation Foundation",
    description: "Venture capital firm focusing on early-stage technology startups and innovative businesses in Bhutan and the region.",
    category: "investors",
    tags: ["VC", "Technology", "Early Stage"],
    programs: ["Seed Funding", "Series A", "Mentorship"],
    targetAudience: ["Tech Startups", "Innovative Businesses"],
    location: "Thimphu"
  },
  {
    id: "7",
    name: "Royal University of Bhutan",
    description: "Leading higher education institution offering entrepreneurship programs and supporting student innovation initiatives.",
    category: "education",
    tags: ["University", "Education", "Research"],
    programs: ["Entrepreneurship Courses", "Innovation Labs", "Research Programs"],
    targetAudience: ["Students", "Researchers", "Faculty"],
    location: "Thimphu"
  },
  {
    id: "8",
    name: "Bhutan Chamber of Commerce & Industry",
    description: "Peak private sector organization providing training, mentorship, and market access support for businesses and startups.",
    category: "training",
    tags: ["Training", "Mentorship", "Business Support"],
    programs: ["Business Training", "Export Assistance", "Networking"],
    targetAudience: ["SMEs", "Exporters", "New Businesses"],
    location: "Thimphu"
  },
  {
    id: "9",
    name: "Thimphu TechPark",
    description: "Technology park providing world-class infrastructure, co-working spaces, and business support services for IT companies and startups.",
    category: "infrastructure",
    tags: ["TechPark", "Co-working", "IT"],
    programs: ["Co-working Spaces", "Business Incubation", "IT Services"],
    targetAudience: ["IT Companies", "Tech Startups", "Freelancers"],
    location: "Thimphu"
  },
  {
    id: "10",
    name: "Bhutan Trade Support Network",
    description: "Organization facilitating market access and trade opportunities for Bhutanese businesses in domestic and international markets.",
    category: "market",
    tags: ["Trade", "Export", "Market Access"],
    programs: ["Export Facilitation", "Market Research", "Trade Missions"],
    targetAudience: ["Exporters", "Manufacturers", "Service Providers"],
    location: "Thimphu"
  },
  {
    id: "11",
    name: "Department of Industry",
    description: "Government department overseeing industrial policy, FDI regulations, and business registration processes in Bhutan.",
    category: "policy",
    tags: ["Policy", "FDI", "Regulations"],
    programs: ["Business Registration", "Policy Development", "Industrial Licensing"],
    targetAudience: ["Foreign Investors", "Local Businesses", "Policy Makers"],
    location: "Thimphu"
  },
  {
    id: "12",
    name: "Drukair Digital",
    description: "Tech startup developing digital solutions for the aviation industry, focusing on customer experience and operational efficiency.",
    category: "startups",
    tags: ["Aviation", "Digital", "SaaS"],
    programs: ["Product Development", "Customer Solutions"],
    targetAudience: ["Aviation Industry", "Travelers"],
    location: "Paro",
    established: 2020
  }
];

export const getCategoryName = (categoryId: string): string => {
  const categoryMap: Record<string, string> = {
    government: "Government Partners",
    events: "Events & Communities",
    media: "Media",
    incubators: "Incubators & Accelerators",
    investors: "Investors & VC",
    education: "Education",
    training: "Training & Mentorship",
    infrastructure: "Startup Infrastructure",
    market: "Market Access",
    policy: "Bhutan Access Policy",
    startups: "Startups & SMEs",
    miscellaneous: "Miscellaneous"
  };
  return categoryMap[categoryId] || categoryId;
};