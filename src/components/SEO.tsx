import { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Sidvin Agro - Premium Coconut Products Exporter India | Virgin Coconut Oil, Coconut Milk';

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading Indian exporter of premium coconut-based products: Virgin Coconut Oil, Coconut Milk (12%, 17%, 22% fat), Desiccated Coconut Powder, Organic & Conventional Coconut Sugar. Export to 15+ countries. FSSAI & ISO certified.');
    }

    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'coconut oil exporter India, virgin coconut oil wholesale, coconut milk supplier, coconut products manufacturer, desiccated coconut powder, coconut sugar exporter, food exporter India, bulk coconut export');
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Sidvin Agro - Premium Coconut Products Exporter');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Premium coconut-based products from India. Virgin Coconut Oil, Coconut Milk, Desiccated Powder. Export quality products to global markets.');
    }

    // Schema.org structured data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Sidvin Agro',
      'url': 'https://sidvinagro.com',
      'description': 'Premium coconut-based products exporter from India',
      'areaServed': ['Middle East', 'Europe', 'Africa', 'Asia'],
      'product': [
        {
          '@type': 'Product',
          'name': 'Virgin Coconut Oil',
          'description': 'Cold-pressed, organic virgin coconut oil for export'
        },
        {
          '@type': 'Product',
          'name': 'Coconut Milk',
          'description': 'Premium coconut milk available in 12%, 17%, and 22% fat content'
        },
        {
          '@type': 'Product',
          'name': 'Desiccated Coconut Powder',
          'description': 'High-quality desiccated coconut powder with 70-75% fat content'
        }
      ]
    });
    document.head.appendChild(schemaScript);

  }, []);

  return null;
};

export default SEO;
