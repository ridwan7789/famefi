// Schema markup utility for structured data
export const generateSchema = (type: string, data: any) => {
  switch (type) {
    case 'Organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.name || 'FameFi',
        legalName: data.legalName || 'FameFi Protocol',
        url: data.url || 'https://www.famefi.com',
        logo: data.logo || 'https://www.famefi.com/logo.png',
        foundingDate: data.foundingDate || '2024',
        founders: data.founders || [
          {
            '@type': 'Person',
            name: 'FameFi Team',
          },
        ],
        description: data.description || 'A creator-first SocialFi protocol built on Solana empowering creators with on-chain ownership and fair monetization.',
        sameAs: data.sameAs || [
          'https://twitter.com/FameFiProtocol',
          'https://tiktok.com/@famefi',
          'https://instagram.com/famefi_protocol',
          'https://youtube.com/@famefi',
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Worldwide'
        },
        areaServed: data.areaServed || 'Worldwide',
        serviceType: data.serviceType || 'Blockchain Platform, SocialFi, Creator Economy',
        knowsLanguage: data.knowsLanguage || ['en', 'es', 'zh', 'ko']
      };

    case 'WebSite':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: data.name || 'FameFi - Creator Economy Platform',
        url: data.url || 'https://www.famefi.com',
        description: data.description || 'A decentralized platform for creators to tokenize and monetize their digital content on Solana',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.famefi.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        publisher: {
          '@type': data.publisherType || 'Organization',
          name: data.publisherName || 'FameFi',
        }
      };

    case 'WebPage':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: data.title || 'FameFi - Creator Economy Platform',
        description: data.description || 'A decentralized platform for creators to tokenize and monetize their digital content',
        url: data.url || 'https://www.famefi.com',
        datePublished: data.publishedTime || '2024-01-01',
        dateModified: data.modifiedTime || new Date().toISOString(),
        author: {
          '@type': 'Organization',
          name: data.authorName || 'FameFi Team',
        },
        publisher: {
          '@type': 'Organization',
          name: data.publisherName || 'FameFi',
          logo: {
            '@type': 'ImageObject',
            url: data.publisherLogo || 'https://www.famefi.com/logo.png',
          },
        },
        breadcrumb: data.breadcrumb || undefined
      };

    case 'SoftwareApplication':
      return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: data.name || 'FameFi Platform',
        description: data.description || 'A creator-first SocialFi protocol built on Solana empowering creators with on-chain ownership and fair monetization.',
        applicationCategory: data.applicationCategory || 'BusinessApplication',
        operatingSystem: data.operatingSystem || 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: data.price || '0',
          priceCurrency: data.priceCurrency || 'USD',
        },
        creator: {
          '@type': 'Organization',
          name: data.creatorName || 'FameFi Team',
        },
        softwareVersion: data.softwareVersion || '1.0',
        applicationSubCategory: data.applicationSubCategory || ['Blockchain', 'SocialFi', 'Creator Economy'],
        featureList: data.featureList || [
          'Content Tokenization',
          'Creator Rewards',
          'NFT Marketplace',
          'SocialFi Features'
        ]
      };

    case 'FAQPage':
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions || [
          {
            '@type': 'Question',
            name: 'What is FameFi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'FameFi is a creator-first SocialFi protocol built on Solana that empowers creators with on-chain ownership and fair monetization.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does FameFi work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'FameFi allows creators to turn their viral content into tradeable on-chain assets and earn rewards through the Creator Viral Reward Program.',
            },
          },
        ],
      };

    case 'BreadcrumbList':
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.items || []
      };

    case 'HowTo':
      return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: data.name || 'How to use FameFi',
        description: data.description || 'Step-by-step guide on how to use the FameFi platform',
        step: data.steps || []
      };

    case 'Product':
      return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: data.name || 'FameFi Platform',
        description: data.description || 'A creator-first SocialFi protocol on Solana',
        brand: {
          '@type': 'Organization',
          name: data.brandName || 'FameFi'
        },
        offers: {
          '@type': 'Offer',
          price: data.price || '0',
          priceCurrency: data.priceCurrency || 'USD',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: data.sellerName || 'FameFi Team'
          }
        },
        category: data.category || 'Blockchain Platform',
        keywords: data.keywords || 'SocialFi, Creator Economy, Solana, NFT, Web3'
      };

    default:
      return {
        '@context': 'https://schema.org',
        '@type': type,
        ...data,
      };
  }
};

// Function to add JSON-LD script tag to the document head
export const addSchema = (schema: any) => {
  // Check if a script with the same schema type already exists to avoid duplication
  const existingSchema = document.querySelectorAll('script[type="application/ld+json"]');
  const schemaString = JSON.stringify(schema);

  // Check if the schema already exists
  let schemaExists = false;
  existingSchema.forEach(tag => {
    if (tag.textContent === schemaString) {
      schemaExists = true;
    }
  });

  if (!schemaExists) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = schemaString;
    document.head.appendChild(script);
  }
};