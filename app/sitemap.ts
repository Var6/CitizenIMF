import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://citizenimf.com";

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/join-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/renew`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Products main page
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Product subpages
    {
      url: `${baseUrl}/products/accident`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/cargo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/commercial`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/four-wheeler`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/health`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/home`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/indemnity`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/keyman`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/life`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/shop`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/travel`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/two-wheeler`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
