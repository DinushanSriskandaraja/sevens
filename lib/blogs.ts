import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  coverImageSrcset?: string;
  featured?: boolean;
  order?: number;
  contentHtml: string;
  contentRaw: string;
}

const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");
const FEATURED_FILE = path.join(process.cwd(), "content", "featured.json");

/**
 * Returns all blog slugs by scanning content/blogs/*.md
 */
export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  const files = fs.readdirSync(BLOGS_DIR);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

/**
 * Reads and parses a single blog post from content/blogs/[slug].md
 */
export function getBlogPost(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOGS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = marked.parse(content, { async: false }) as string;

  return {
    slug,
    title: data.title || slug,
    date: data.date || "Recent",
    excerpt: data.excerpt || "",
    coverImage: data.coverImage || "",
    coverImageSrcset: data.coverImageSrcset || "",
    featured: data.featured ?? false,
    order: data.order ?? 999,
    contentHtml,
    contentRaw: content,
  };
}

/**
 * Returns all blog posts parsed from content/blogs/*.md
 */
export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs();
  const posts: BlogPost[] = [];

  for (const slug of slugs) {
    const post = getBlogPost(slug);
    if (post) posts.push(post);
  }

  // Sort by order or date
  return posts.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

/**
 * Returns the list of featured slugs managed in content/featured.json
 */
export function getFeaturedBlogSlugs(): string[] {
  if (fs.existsSync(FEATURED_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(FEATURED_FILE, "utf8"));
      if (Array.isArray(data.featuredSlugs)) {
        return data.featuredSlugs;
      }
    } catch {
      // Fallback if JSON parsing fails
    }
  }
  return [];
}

/**
 * Returns all featured blog posts, prioritizing the order in content/featured.json
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  const allPosts = getAllBlogPosts();
  const featuredSlugs = getFeaturedBlogSlugs();

  if (featuredSlugs.length > 0) {
    const featuredSet = new Set(featuredSlugs);
    const ordered: BlogPost[] = [];

    // First add according to featuredSlugs order
    for (const slug of featuredSlugs) {
      const p = allPosts.find((post) => post.slug === slug);
      if (p) ordered.push(p);
    }

    // Add any posts that have featured: true in frontmatter but weren't in featured.json
    for (const post of allPosts) {
      if (post.featured && !featuredSet.has(post.slug)) {
        ordered.push(post);
      }
    }

    return ordered;
  }

  // Fallback: any post with featured: true
  return allPosts.filter((p) => p.featured);
}

