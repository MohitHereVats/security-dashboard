import type { Vendor } from '../type';

// Simple Icons (for brands that exist)
import { 
  SiAmazoncloudwatch,
  SiConfluence
} from 'react-icons/si';

// Feather Icons (for placeholders)
import { 
  FiLink, // For Ephemeral
  FiSun   // For Convergence
} from 'react-icons/fi';

// Font Awesome Icons (for placeholders)
import { FaLayerGroup, FaBolt } from 'react-icons/fa'; // For Stack3d & Warpspeed

// Ionicons (for ContrastAI)
import { IoContrast } from 'react-icons/io5';

// Bootstrap Icons (for Sisyphus)
import { BsGearFill } from 'react-icons/bs';

export const mockVendors: Vendor[] = [
  {
    id: '1',
    name: 'Ephemeral',
    url: 'ephemeral.io',
    logo: FiLink,
    rating: 60,
    lastAssessed: '22 Jan 2025',
    tags: ['Active', 'Customer data', 'Admin'],
    isMonitored: true,
    movement: 5,
  },
  {
    id: '2',
    name: 'Stack3d Lab',
    url: 'stack3dlab.com',
    logo: FaLayerGroup,
    rating: 72,
    lastAssessed: '20 Jan 2025',
    tags: ['Active', 'Business data', 'Admin'],
    isMonitored: true,
    movement: -4,
  },
  {
    id: '3',
    name: 'Warpspeed',
    url: 'getwarpspeed.com',
    logo: FaBolt,
    rating: 78,
    lastAssessed: '24 Jan 2025',
    tags: ['Active', 'Customer data', 'Financials'],
    isMonitored: true,
    movement: 6,
  },
  {
    id: '4',
    name: 'CloudWatch',
    url: 'cloudwatch.app',
    logo: SiAmazoncloudwatch,
    rating: 38,
    lastAssessed: '26 Jan 2025',
    tags: ['Active', 'Salesforce', 'Admin'],
    isMonitored: false,
    movement: 8,
  },
  {
    id: '5',
    name: 'ContrastAI',
    url: 'contrastai.com',
    logo: IoContrast, 
    rating: 42,
    lastAssessed: '18 Jan 2025',
    tags: ['Active', 'Salesforce', 'Admin'],
    isMonitored: false,
    movement: -1,
  },
  {
    id: '6',
    name: 'Convergence',
    url: 'convergence.io',
    logo: FiSun,
    rating: 66,
    lastAssessed: '28 Jan 2025',
    tags: ['Active', 'Business data', 'Admin'],
    isMonitored: true,
    movement: -6,
  },
  {
    id: '7',
    name: 'Sisyphus',
    url: 'sisyphus.com',
    logo: BsGearFill, 
    rating: 91,
    lastAssessed: '16 Jan 2025',
    tags: ['Inactive', 'Customer data', 'Financials'],
    isMonitored: true,
    movement: 2,
  },
  {
    id: '8',
    name: 'Confluence',
    url: 'confluence.io',
    logo: SiConfluence,
    rating: 85,
    lastAssessed: '15 Jan 2025',
    tags: ['Active', 'Business data'],
    isMonitored: true,
    movement: 15,
  },
];