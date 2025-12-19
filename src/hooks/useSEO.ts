import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  ogSiteName?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  author?: string;
  robots?: string;
  viewport?: string;
  themeColor?: string;
  alternates?: {
    type?: string;
    href?: string;
    title?: string;
  }[];
  structuredData?: any;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  ogSiteName,
  twitterCard = 'summary_large_image',
  twitterSite,
  twitterCreator,
  author,
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1',
  themeColor = '#000000',
  alternates,
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (description && metaDescription) {
      metaDescription.setAttribute('content', description);
    } else if (description && !metaDescription) {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description;
      document.head.appendChild(newMetaDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (keywords && metaKeywords) {
      const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      metaKeywords.setAttribute('content', keywordsString);
    } else if (keywords) {
      const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = keywordsString;
      document.head.appendChild(newMetaKeywords);
    }

    // Update author
    if (author) {
      const metaAuthor = document.querySelector('meta[name="author"]');
      if (metaAuthor) {
        metaAuthor.setAttribute('content', author);
      } else {
        const newMetaAuthor = document.createElement('meta');
        newMetaAuthor.name = 'author';
        newMetaAuthor.content = author;
        document.head.appendChild(newMetaAuthor);
      }
    }

    // Update robots
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (robots && metaRobots) {
      metaRobots.setAttribute('content', robots);
    } else if (robots && !metaRobots) {
      const newMetaRobots = document.createElement('meta');
      newMetaRobots.name = 'robots';
      newMetaRobots.content = robots;
      document.head.appendChild(newMetaRobots);
    }

    // Update viewport
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (viewport && metaViewport) {
      metaViewport.setAttribute('content', viewport);
    } else if (viewport && !metaViewport) {
      const newMetaViewport = document.createElement('meta');
      newMetaViewport.name = 'viewport';
      newMetaViewport.content = viewport;
      document.head.appendChild(newMetaViewport);
    }

    // Update theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor && metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    } else if (themeColor && !metaThemeColor) {
      const newMetaThemeColor = document.createElement('meta');
      newMetaThemeColor.name = 'theme-color';
      newMetaThemeColor.content = themeColor;
      document.head.appendChild(newMetaThemeColor);
    }

    // Update canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonical && canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    } else if (canonical && !canonicalLink) {
      const newCanonicalLink = document.createElement('link');
      newCanonicalLink.rel = 'canonical';
      newCanonicalLink.href = canonical;
      document.head.appendChild(newCanonicalLink);
    }

    // Update alternate links
    if (alternates) {
      alternates.forEach((alternate) => {
        const existingLink = document.querySelector(`link[rel="alternate"][href="${alternate.href}"]`);
        if (!existingLink) {
          const newAlternateLink = document.createElement('link');
          newAlternateLink.rel = 'alternate';
          if (alternate.type) newAlternateLink.type = alternate.type;
          if (alternate.href) newAlternateLink.href = alternate.href;
          if (alternate.title) newAlternateLink.title = alternate.title;
          document.head.appendChild(newAlternateLink);
        }
      });
    }

    // Update Open Graph meta tags
    updateMetaTag('property', 'og:title', ogTitle || title);
    updateMetaTag('property', 'og:description', ogDescription || description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:url', ogUrl);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:site_name', ogSiteName || title);

    // Update Twitter Card meta tags
    updateMetaTag('name', 'twitter:card', twitterCard);
    updateMetaTag('name', 'twitter:title', ogTitle || title);
    updateMetaTag('name', 'twitter:description', ogDescription || description);
    updateMetaTag('name', 'twitter:image', ogImage);
    if (twitterSite) updateMetaTag('name', 'twitter:site', twitterSite);
    if (twitterCreator) updateMetaTag('name', 'twitter:creator', twitterCreator);

    // Add structured data if provided
    if (structuredData) {
      const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
      if (existingStructuredData) {
        existingStructuredData.textContent = JSON.stringify(structuredData);
      } else {
        const structuredDataScript = document.createElement('script');
        structuredDataScript.type = 'application/ld+json';
        structuredDataScript.textContent = JSON.stringify(structuredData);
        document.head.appendChild(structuredDataScript);
      }
    }

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, ogType, ogSiteName, twitterCard, twitterSite, twitterCreator, author, robots, viewport, themeColor, alternates, structuredData]);

  // Helper function to manage meta tags
  const updateMetaTag = (attribute: string, property: string, content?: string) => {
    if (!content) return;

    let element = document.querySelector(`meta[${attribute}="${property}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, property);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };
};