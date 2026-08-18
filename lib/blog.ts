// ---------------------------------------------------------------------------
// Shared blog data module.
//
// This is the single source of truth for blog posts. It extends the shape
// already used by the blog listing page (BlogPage.tsx) — id, categoryKey,
// titleKey, descriptionKey, dateKey, readTimeKey, filter — with the extra
// fields a detail page needs (slug, image, author, contentKey, tags).
// All human-readable text is stored as translation keys resolved
// through getTranslation(), matching the existing i18n pattern.
// ---------------------------------------------------------------------------

export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  categoryKey: string;
  titleKey: string;
  descriptionKey: string;
  contentKey: string;
  dateKey: string;
  readTimeKey: string;
  author: {
    nameKey: string;
    avatar: string;
  };
  tags: string[];
  filter: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-to-sell-scrap-metal-in-dammam",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    categoryKey: "blog.posts.post1.category",
    titleKey: "blog.posts.post1.title",
    descriptionKey: "blog.posts.post1.description",
    contentKey: "blog.posts.post1.content",
    dateKey: "blog.posts.post1.date",
    readTimeKey: "blog.posts.post1.readTime",
    author: {
      nameKey: "blog.author.admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    tags: ["blog.tags.scrapMetal", "blog.tags.dammam", "blog.tags.guide"],
    filter: "all",
  },
  {
    id: 2,
    slug: "what-types-of-copper-scrap-have-value",
    image:
      "https://images.unsplash.com/photo-1613970351372-9804e380bd09?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    categoryKey: "blog.posts.post2.category",
    titleKey: "blog.posts.post2.title",
    descriptionKey: "blog.posts.post2.description",
    contentKey: "blog.posts.post2.content",
    dateKey: "blog.posts.post2.date",
    readTimeKey: "blog.posts.post2.readTime",
    author: {
      nameKey: "blog.author.admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    tags: ["blog.tags.copper", "blog.tags.recycling", "blog.tags.guide"],
    filter: "copper",
  },
  {
    id: 3,
    slug: "how-industrial-machinery-scrap-is-evaluated",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    categoryKey: "blog.posts.post3.category",
    titleKey: "blog.posts.post3.title",
    descriptionKey: "blog.posts.post3.description",
    contentKey: "blog.posts.post3.content",
    dateKey: "blog.posts.post3.date",
    readTimeKey: "blog.posts.post3.readTime",
    author: {
      nameKey: "blog.author.admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    tags: ["blog.tags.industrial", "blog.tags.machinery", "blog.tags.evaluation"],
    filter: "industrial",
  },
  {
    id: 4,
    slug: "where-to-sell-aluminium-scrap-in-riyadh",
    image:
      "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    categoryKey: "blog.posts.post4.category",
    titleKey: "blog.posts.post4.title",
    descriptionKey: "blog.posts.post4.description",
    contentKey: "blog.posts.post4.content",
    dateKey: "blog.posts.post4.date",
    readTimeKey: "blog.posts.post4.readTime",
    author: {
      nameKey: "blog.author.admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    tags: ["blog.tags.aluminium", "blog.tags.riyadh", "blog.tags.recycling"],
    filter: "aluminium",
  },
  {
    id: 5,
    slug: "how-scrap-metal-pickup-works",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    categoryKey: "blog.posts.post5.category",
    titleKey: "blog.posts.post5.title",
    descriptionKey: "blog.posts.post5.description",
    contentKey: "blog.posts.post5.content",
    dateKey: "blog.posts.post5.date",
    readTimeKey: "blog.posts.post5.readTime",
    author: {
      nameKey: "blog.author.admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    tags: ["blog.tags.pickup", "blog.tags.scrapMetal", "blog.tags.guide"],
    filter: "all",
  },
  {
    id: 6,
    slug: "understanding-different-types-of-metal-scrap",
    image:
      "https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    categoryKey: "blog.posts.post6.category",
    titleKey: "blog.posts.post6.title",
    descriptionKey: "blog.posts.post6.description",
    contentKey: "blog.posts.post6.content",
    dateKey: "blog.posts.post6.date",
    readTimeKey: "blog.posts.post6.readTime",
    author: {
      nameKey: "blog.author.admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    tags: ["blog.tags.scrapMetal", "blog.tags.recycling", "blog.tags.guide"],
    filter: "scrapMetal",
  },
  {
    id: 7,
    slug: "how-to-prepare-industrial-scrap-for-collection",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    categoryKey: "blog.posts.post7.category",
    titleKey: "blog.posts.post7.title",
    descriptionKey: "blog.posts.post7.description",
    contentKey: "blog.posts.post7.content",
    dateKey: "blog.posts.post7.date",
    readTimeKey: "blog.posts.post7.readTime",
    author: {
      nameKey: "blog.author.admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    tags: ["blog.tags.industrial", "blog.tags.collection", "blog.tags.guide"],
    filter: "industrial",
  },
  {
    id: 8,
    slug: "scrap-metal-buying-guide-for-businesses-in-saudi-arabia",
    image:
      "https://images.unsplash.com/photo-1702388247780-fedec1db0b5d?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    categoryKey: "blog.posts.post8.category",
    titleKey: "blog.posts.post8.title",
    descriptionKey: "blog.posts.post8.description",
    contentKey: "blog.posts.post8.content",
    dateKey: "blog.posts.post8.date",
    readTimeKey: "blog.posts.post8.readTime",
    author: {
      nameKey: "blog.author.admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    tags: ["blog.tags.business", "blog.tags.saudiArabia", "blog.tags.guide"],
    filter: "all",
  },
];

// ---------------------------------------------------------------------------
// Helpers used by the locale-aware route pages.
// ---------------------------------------------------------------------------

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, count = 2): BlogPost[] {
  return blogPosts
    .filter((p) => p.id !== post.id && p.filter === post.filter)
    .slice(0, count);
}

export function getRecentPosts(post: BlogPost, count = 4): BlogPost[] {
  return blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => b.id - a.id)
    .slice(0, count);
}
