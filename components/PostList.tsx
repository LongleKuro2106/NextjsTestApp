import { Post } from "../app/types";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache", // This is the equivalent of getStaticProps in Next.js
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function PostList() {
  const posts = await getPosts();

  return {
    posts,
    totalPosts: posts.length,
  };
}
