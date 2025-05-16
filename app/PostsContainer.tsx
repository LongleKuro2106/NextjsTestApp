"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Post, DynamicComponent } from "./types";
import { PostCard } from "../components/PostCard";

interface PostsContainerProps {
  initialPosts: Post[];
  totalPosts: number;
}

export function PostsContainer({ initialPosts, totalPosts }: PostsContainerProps) {
  const [components, setComponents] = useState<DynamicComponent[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAddComponent = () => {
    if (initialPosts.length === 0 || nextId > initialPosts.length) {
      alert("No more posts available!");
      return;
    }

    // Find the post with ID matching nextId
    const post = initialPosts.find(post => post.id === nextId) || initialPosts[0];
    
    setComponents([...components, { id: nextId, post }]);
    setNextId(nextId + 1);
  };

  const handleRemoveComponent = (id: number) => {
    setComponents(components.filter((comp) => comp.id !== id));
  };

  return (
    <>
      <Button
        className="w-full max-w-xs"
        color="primary"
        onClick={handleAddComponent}
        disabled={nextId > initialPosts.length}
      >
        Add Next Post
      </Button>

      {initialPosts.length === 0 && (
        <p className="text-gray-500">No posts available.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {components.map((component) => (
          <PostCard 
            key={component.id} 
            post={component.post} 
            onRemove={() => handleRemoveComponent(component.id)} 
          />
        ))}
      </div>
      
      <div className="text-gray-500 text-sm mt-4">
        Showing {components.length} of {totalPosts} available posts
      </div>
    </>
  );
} 