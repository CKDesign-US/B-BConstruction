import { useEffect } from 'react';
import { BUSINESS } from '@/site.ts';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  priceRange: BUSINESS.priceRange,
  areaServed: 'Wisconsin',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'WI',
    addressCountry: 'US',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Painting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flooring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Siding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Renovation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Junk Removal' } },
    ],
  },
};

export default function Schema() {
  useEffect(() => {
    const id = 'bb-schema';
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);

  return null;
}
