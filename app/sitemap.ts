import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';

const baseUrl = 'https://alnuraqscrap.com';

// Static routes for both locales
const staticRoutes = [
  '', // home
  'about',
  'blog',
  'contact',
  'faq',
  'how-it-works',
  'industrial-solutions',
  'scrap-pickup',
  'service-areas',
  'services',
  'scrap',
  'scrap/aluminium-scrap',
  'scrap/battery-scrap',
  'scrap/cable-wire-scrap',
  'scrap/cable-wire',
  'scrap/cars',
  'scrap/construction',
  'scrap/copper-scrap',
  'scrap/e-scrap',
  'scrap/electrical-panels',
  'scrap/household',
  'scrap/industrial-scrap',
  'scrap/iron-steel-scrap',
  'scrap/iron-steel',
  'scrap/machinery-scrap',
  'scrap/metal-scrap',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // Add static routes for English
  staticRoutes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/en/${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    });
  });

  // Add static routes for Arabic
  staticRoutes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    });
  });

  // Add blog posts for English
  blogPosts.forEach((post) => {
    sitemap.push({
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  // Add blog posts for Arabic
  blogPosts.forEach((post) => {
    sitemap.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return sitemap;
}
