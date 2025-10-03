// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://citizenimf.com";
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/", // allow everything
        },
      ],
      sitemap: `${siteUrl}/sitemap.xml`,
    };
  }

  // 👇 On dev / staging, block all crawlers
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/", // block all
      },
    ],
  };
}
