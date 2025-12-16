import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article" | "product";
  image?: string;
  schema?: object | object[];
}

const SEO = ({ 
  title, 
  description, 
  canonical, 
  type = "website",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  schema
}: SEOProps) => {
  const siteUrl = "https://raxondigital.in";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Raxon Digital" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

// Reusable Schema Templates
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://raxondigital.in/#business",
  "name": "Raxon Digital",
  "alternateName": "Raxon Digital Computer Repair",
  "description": "Professional computer repair, laptop repair, CCTV installation, data recovery, and IT services in Ahmedabad, Gujarat. Serving Vejalpur, Jodhpur, Satellite, and nearby areas.",
  "url": "https://raxondigital.in",
  "telephone": "+919426322123",
  "email": "info@raxondigital.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "A-238, Shreyash Complex, Near Vejalpur Bus Stand",
    "addressLocality": "Vejalpur",
    "addressRegion": "Ahmedabad",
    "postalCode": "380051",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.0116",
    "longitude": "72.5167"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "10:00",
    "closes": "19:00"
  },
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Card",
  "areaServed": [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "Place", "name": "Vejalpur" },
    { "@type": "Place", "name": "Jodhpur, Ahmedabad" },
    { "@type": "Place", "name": "Satellite, Ahmedabad" },
    { "@type": "Place", "name": "Vastrapur" },
    { "@type": "Place", "name": "Bopal" }
  ],
  "sameAs": [
    "https://wa.me/919426322123"
  ],
  "image": "https://raxondigital.in/logo.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const createServiceSchema = (service: {
  name: string;
  description: string;
  price?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Raxon Digital",
    "@id": "https://raxondigital.in/#business"
  },
  "areaServed": {
    "@type": "City",
    "name": "Ahmedabad"
  },
  "url": service.url,
  ...(service.price && {
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "INR"
    }
  })
});

export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const createProductSchema = (product: {
  name: string;
  description: string;
  price: number;
  image?: string;
  availability?: boolean;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image || "https://raxondigital.in/product-placeholder.png",
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "INR",
    "availability": product.availability !== false 
      ? "https://schema.org/InStock" 
      : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "LocalBusiness",
      "name": "Raxon Digital"
    }
  }
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://raxondigital.in${item.url}`
  }))
});
