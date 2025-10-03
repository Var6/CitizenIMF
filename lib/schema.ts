// lib/schema.ts
export function generateProductSchema({
  name,
  description,
  url,
  image,
  brand = "Citizen IMF",
  category = "Insurance",
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  brand?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    category,
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: "0", // set if you display actual premiums
      availability: "https://schema.org/InStock",
    },
  };
}
