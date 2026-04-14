import Link from "next/link";
import Card from "@/app/components/Card";
import Pagination from "@/app/components/Pagination";
import { fetchPostsWithCount } from "@/app/services/api";
import type { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const { totalPages, posts } = await fetchPostsWithCount(page);

  const title = `App Router- Page ${page}`;
  const description = `Browse posts from our collection. Page ${page} of ${totalPages}.`;
  const img = `https://picsum.photos/400/200?random=${page}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/?page=${page}`,
      images: [
        {
          url: img,
          width: 1200,
          height: 630,
          alt: "App Router",
        },
      ],

    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [img],
      description,
    },
    keywords: [
      "nextjs",
      "react",
      "app router",
      "posts",
      `page-${page}`,
    ],
    other: {
      "page:posts": JSON.stringify(posts.map((p) => ({ id: p.id, userId: p.userId, title: p.title, body: p.body }))),
    },
  };
}

export default async function HomePage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const { posts, totalPages } = await fetchPostsWithCount(page);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <div className="mx-auto mb-8 max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold">Posts</h1>
      </div>

      <div className="mx-auto max-w-6xl">
        { posts.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-700">
            <p className="text-lg font-semibold">No posts found.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
      
            {posts.map((post) => (
              <Link key={post.id} href={`/posts/${post.id}`} className="block">
                <Card id={post.id} title={post.title} body={post.body} />
              </Link>
            ))}
            
          </div>
        )}
      </div>

      <footer className="mx-auto mt-8 max-w-6xl">
        <Pagination currentPage={page} totalPages={totalPages} />
      </footer>
    </div>
  );
}