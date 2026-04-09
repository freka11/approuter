import type { Metadata } from "next";
import Link from "next/link";
import { fetchPost, type Post } from "@/app/services/api";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchPost(id);

  return {
    title: "Approuter-"+post.title,
    description: `ID: ${post.id} , body: ${post.body}`,
    keywords: [
      "nextjs",
      "react",
      "app router",
      "posts",
      `post-${post.id}`,
    ],
    other: {
      "post:userId": String(post.userId),
      "post:title": post.title,
      "post:body": post.body,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await fetchPost(id);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="space-y-10 h-full w-full">
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold text-slate-900">{post.title}</h1>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Post #{post.id}</p>
          </div>
          <img
            src={`https://picsum.photos/1200/500?random=${post.id}`}
            alt={post.title}
            className="w-full h-72 object-cover rounded-3xl"
          />
          <div className="text-slate-700">
            <p className="text-lg leading-8">{post.body}</p>
          </div>
          <div>
            <Link href="/" className="text-sm font-medium text-sky-700 hover:underline">
              ← Back to posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}