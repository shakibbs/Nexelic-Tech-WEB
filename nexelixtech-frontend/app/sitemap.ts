import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexelixtech.com"; // The production URL

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/contact",
    "/calculator",
    "/careers",
    "/blog",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const workRoutes = caseStudies.map((work) => ({
    url: `${baseUrl}/work/${work.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes];
}
