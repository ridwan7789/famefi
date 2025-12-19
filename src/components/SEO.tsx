import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  article?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  type?: string;
  locale?: string;
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
}

const SEO: React.FC<SEOProps> = ({
  title = 'FameFi - Creator Economy Platform',
  description = 'A decentralized platform for creators to tokenize and monetize their digital content on Solana',
  keywords = 'creator economy, socialfi, blockchain, nft, solana, digital assets, content monetization',
  canonicalUrl,
  imageUrl = '/og-image.jpg',
  article = false,
  publishedTime,
  modifiedTime,
  author = 'FameFi Team',
  type = 'website',
  locale = 'en_US',
  siteName = 'FameFi',
  twitterCard = 'summary_large_image',
}) => {
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Remove existing meta tags
    const existingTags = document.querySelectorAll('meta[data-seo]');
    existingTags.forEach(tag => tag.remove());

    // Create and add new meta tags
    const metaTags = [
      // Standard meta tags
      { name: 'description', content: description, 'data-seo': 'true' },
      { name: 'keywords', content: keywords, 'data-seo': 'true' },
      { name: 'author', content: author, 'data-seo': 'true' },

      // Open Graph protocol tags
      { property: 'og:title', content: title, 'data-seo': 'true' },
      { property: 'og:description', content: description, 'data-seo': 'true' },
      { property: 'og:type', content: article ? 'article' : type, 'data-seo': 'true' },
      { property: 'og:url', content: canonicalUrl || currentUrl, 'data-seo': 'true' },
      { property: 'og:image', content: imageUrl, 'data-seo': 'true' },
      { property: 'og:site_name', content: siteName, 'data-seo': 'true' },
      { property: 'og:locale', content: locale, 'data-seo': 'true' },

      // Article-specific Open Graph tags
      ...(article ? [
        { property: 'article:published_time', content: publishedTime, 'data-seo': 'true' },
        { property: 'article:modified_time', content: modifiedTime, 'data-seo': 'true' },
        { property: 'article:author', content: author, 'data-seo': 'true' },
      ] : []),

      // Twitter Card tags
      { name: 'twitter:card', content: twitterCard, 'data-seo': 'true' },
      { name: 'twitter:title', content: title, 'data-seo': 'true' },
      { name: 'twitter:description', content: description, 'data-seo': 'true' },
      { name: 'twitter:image', content: imageUrl, 'data-seo': 'true' },
      { name: 'twitter:site', content: '@FameFiProtocol', 'data-seo': 'true' },
    ];

    metaTags.forEach(tagAttrs => {
      const metaTag = document.createElement('meta');
      Object.entries(tagAttrs).forEach(([key, value]) => {
        if (value) metaTag.setAttribute(key, value);
      });
      document.head.appendChild(metaTag);
    });

    // Add canonical URL if provided
    if (canonicalUrl) {
      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonicalUrl;
      canonicalLink.setAttribute('data-seo', 'true');
      document.head.appendChild(canonicalLink);
    }

    // Clean up function
    return () => {
      const seoTags = document.querySelectorAll('meta[data-seo], link[data-seo]');
      seoTags.forEach(tag => tag.remove());
    };
  }, [title, description, keywords, canonicalUrl, imageUrl, article, publishedTime, modifiedTime, author, type, locale, siteName, twitterCard, currentUrl]);

  return null;
};

export default SEO;