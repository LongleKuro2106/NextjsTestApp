import { PostList } from "../components/PostList";
import { CounterCard } from "../components/CounterCard";

import { PostsContainer } from "./PostsContainer";

export default async function Home() {
  // Fetch posts data on the server
  const { posts, totalPosts } = await PostList();

  return (
    <main className="container mx-auto p-6">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-center">Component Manager</h1>

        {/* Counter Section - Client Component */}
        <CounterCard />

        {/* Posts Container - Client Component that receives server data */}
        <PostsContainer initialPosts={posts} totalPosts={totalPosts} />
      </div>
    </main>
  );
}
