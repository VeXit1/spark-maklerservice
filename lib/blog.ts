import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { list, head } from "@vercel/blob";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage: string;
  metaTitle?: string;
  metaDescription?: string;
  content: string;
}

function parsePost(slug: string, raw: string): BlogPost {
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    category: data.category ?? "Allgemein",
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage ?? "",
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    content,
  };
}

// Local filesystem — used in development and build time
function getLocalPosts(): Omit<BlogPost, "content">[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        category: data.category ?? "Allgemein",
        excerpt: data.excerpt ?? "",
        coverImage: data.coverImage ?? "",
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function getLocalPost(slug: string): BlogPost | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;
  if (!filePath) return null;
  return parsePost(slug, fs.readFileSync(filePath, "utf-8"));
}

// Vercel Blob — used in production for dynamically published articles
async function getBlobPosts(): Promise<Omit<BlogPost, "content">[]> {
  try {
    const { blobs } = await list({ prefix: "blog/", mode: "folded" });
    const posts = await Promise.all(
      blobs
        .filter((b) => b.pathname.endsWith(".mdx"))
        .map(async (blob) => {
          const slug = blob.pathname.replace(/^blog\//, "").replace(/\.mdx$/, "");
          const res = await fetch(blob.url, { next: { revalidate: 60 } });
          const raw = await res.text();
          const { data } = matter(raw);
          return {
            slug,
            title: data.title ?? slug,
            date: data.date ?? "",
            category: data.category ?? "Allgemein",
            excerpt: data.excerpt ?? "",
            coverImage: data.coverImage ?? "",
            metaTitle: data.metaTitle,
            metaDescription: data.metaDescription,
          };
        })
    );
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return [];
  }
}

async function getBlobPost(slug: string): Promise<BlogPost | null> {
  try {
    const blobInfo = await head(`blog/${slug}.mdx`);
    const res = await fetch(blobInfo.url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return parsePost(slug, await res.text());
  } catch {
    return null;
  }
}

export async function getAllPosts(): Promise<Omit<BlogPost, "content">[]> {
  const local = getLocalPosts();
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await getBlobPosts();
    // Merge: blob posts override local ones with same slug
    const slugSet = new Set(blob.map((p) => p.slug));
    return [...blob, ...local.filter((p) => !slugSet.has(p.slug))];
  }
  return local;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await getBlobPost(slug);
    if (blob) return blob;
  }
  return getLocalPost(slug);
}
