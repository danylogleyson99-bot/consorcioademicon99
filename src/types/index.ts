export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'lost' | 'won';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  status: LeadStatus;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  full_name?: string;
  avatar_url?: string;
  email: string;
}
