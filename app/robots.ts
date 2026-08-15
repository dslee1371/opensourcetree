import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://open-lab-daily.dslee.chatgpt.site/sitemap.xml" };
}
