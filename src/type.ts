import type { ElementType } from 'react';

export type VendorTag = 'Active' | 'Inactive' | 'Customer data' | 'Business data' | 'Admin' | 'Financials' | 'Salesforce';

export type Vendor = {
  id: string;
  name: string;
  url: string;
  logo: ElementType; // Pass an icon component
  rating: number; // A number from 0 to 100
  lastAssessed: string;
  tags: VendorTag[];
  movement: number; // e.g., 5, -4, 6
  isMonitored: boolean;
};