import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

interface ArticlePayload {
  title: string;
  slug: string;
  content: string;
  category?: string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  coverImage?: string;
  date?: string;
}

export async function POST(req: NextRequest) {
  // Auth check
  const auth = req.headers.get("authorization");
  const token = process.env.PUBLISH_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "PUBLISH_TOKEN not configured" },
      { status: 500 }
    );
  }

  if (!auth || auth !== `Bearer ${token}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: ArticlePayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const {
    title,
    slug,
    content,
    category,
    excerpt,
    metaTitle,
    metaDescription,
    coverImage,
    date,
  } = body;

  if (!title || !slug || !content) {
    return NextResponse.json(
      { error: "Missing required fields: title, slug, content" },
      { status: 400 }
    );
  }

  // Sanitize slug: only allow alphanumeric and hyphens
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json(
      {
        error:
          "Slug must only contain lowercase letters, numbers, and hyphens",
      },
      { status: 400 }
    );
  }

  const today =
    date ??
    new Date().toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const frontmatter = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    `date: "${today}"`,
    `category: "${(category ?? "Allgemein").replace(/"/g, '\\"')}"`,
    `excerpt: "${(excerpt ?? "").replace(/"/g, '\\"')}"`,
    coverImage ? `coverImage: "${coverImage}"` : null,
    metaTitle ? `metaTitle: "${metaTitle.replace(/"/g, '\\"')}"` : null,
    metaDescription
      ? `metaDescription: "${metaDescription.replace(/"/g, '\\"')}"`
      : null,
    "---",
    "",
  ]
    .filter((line) => line !== null)
    .join("\n");

  const mdxContent = frontmatter + content;

  // Store in Vercel Blob — persists across deployments & serverless invocations
  const blob = await put(`blog/${slug}.mdx`, mdxContent, {
    access: "public",
    contentType: "text/plain; charset=utf-8",
    addRandomSuffix: false,
  });

  return NextResponse.json(
    {
      success: true,
      slug,
      path: `/blog/${slug}`,
      blobUrl: blob.url,
      message: `Article "${title}" published successfully`,
    },
    { status: 201 }
  );
}
