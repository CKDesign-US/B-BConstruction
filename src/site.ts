export const BUSINESS = {
  name: 'B&B Construction',
  phone: '920-316-8308',
  phoneHref: 'tel:9203168308',
  email: 'blakqori2008@gmail.com',
  priceRange: '$$',
  tagline: 'Quality Craftsmanship & Reliable Home Services',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#quote' },
];

export const STATS = [
  { stat: '100+', label: 'Projects Completed' },
  { stat: '5.0', label: 'Average Star Rating' },
  { stat: '100%', label: 'Satisfaction Guarantee' },
  { stat: 'Fast', label: 'Response Time' },
];

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: 'painting',
    icon: 'PaintRoller',
    title: 'Painting',
    description: 'Transform your space with flawless interior and exterior painting delivered by skilled professionals.',
    features: ['Interior & Exterior', 'Cabinet Refinishing', 'Deck Staining'],
    image: 'https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'flooring',
    icon: 'Columns3',
    title: 'Flooring',
    description: 'Premium flooring installation — hardwood, luxury vinyl, tile, and laminate built to last.',
    features: ['Hardwood', 'LVP / LVT Vinyl Plank', 'Tile & Laminate'],
    image: 'https://images.pexels.com/photos/1388944/floor-flooring-hand-man-1388944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'siding',
    icon: 'Home',
    title: 'Siding',
    description: 'Protect and beautify your home with durable vinyl siding repair and replacement services.',
    features: ['Vinyl Siding Repair & Replacement', 'Trim Work', 'Fascia & Soffit'],
    image: 'https://images.pexels.com/photos/5071141/pexels-photo-5071141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'renovations',
    icon: 'Hammer',
    title: 'Home Renovations',
    description: 'Full-scale remodeling for kitchens, bathrooms, basements, and home additions — done right.',
    features: ['Kitchen & Bathroom Remodeling', 'Basement Finishing', 'Home Additions'],
    image: 'https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'junk-removal',
    icon: 'Truck',
    title: 'Junk Removal',
    description: 'Fast, affordable haul-away for property cleanouts, construction debris, and yard waste.',
    features: ['Property Cleanouts', 'Construction Debris Hauling', 'Yard Waste Removal'],
    image: 'https://images.pexels.com/photos/15432186/pexels-photo-15432186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type GalleryItem = {
  image: string;
  title: string;
  category: string;
};

export const GALLERY: GalleryItem[] = [
  {
    image: 'https://images.pexels.com/photos/10827337/pexels-photo-10827337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Modern Kitchen Remodel',
    category: 'Renovation',
  },
  {
    image: 'https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Interior Painting',
    category: 'Painting',
  },
  {
    image: 'https://images.pexels.com/photos/3935327/pexels-photo-3935327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Hardwood Flooring',
    category: 'Flooring',
  },
  {
    image: 'https://images.pexels.com/photos/5071177/pexels-photo-5071177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Exterior Siding',
    category: 'Siding',
  },
  {
    image: 'https://images.pexels.com/photos/5353881/pexels-photo-5353881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Custom Cabinetry',
    category: 'Renovation',
  },
  {
    image: 'https://images.pexels.com/photos/20542611/pexels-photo-20542611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Exterior Refresh',
    category: 'Painting',
  },
];

export const DIFFERENTIATORS = [
  {
    icon: 'BadgeDollarSign',
    title: 'Competitive Pricing',
    description: 'Honest, upfront quotes with no hidden fees. You get premium work without the premium price tag.',
  },
  {
    icon: 'Clock',
    title: 'On-Time Guarantee',
    description: 'We respect your schedule. Projects start and finish when we say they will — every time.',
  },
  {
    icon: 'Sparkles',
    title: 'Clean Worksite',
    description: 'We treat your home like our own. Daily cleanup and thorough site protection throughout.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind. Every project is backed by our guarantee.',
  },
];
