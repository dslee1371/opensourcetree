import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const baseUrl = "https://open-lab-daily.dslee.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/archive", "/about", "/contact", "/privacy"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date("2026-08-15"), changeFrequency: path === "" || path === "/archive" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .7 }));
  const projectPages = projects.map((project) => ({ url: `${baseUrl}/lab/${project.slug}`, lastModified: new Date(project.updatedAt.replaceAll(".", "-")), changeFrequency: "weekly" as const, priority: .8 }));
  return [...pages, ...projectPages];
}
