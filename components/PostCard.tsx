"use client";

import { Button } from "@heroui/button";
import { Card } from "@heroui/card";

import { Post } from "../app/types";

interface PostCardProps {
  post: Post;
  onRemove: (id: number) => void;
}

export function PostCard({ post, onRemove }: PostCardProps) {
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold line-clamp-2">{post.title}</h2>
          <Button
            aria-label={`Remove post ${post.id}`}
            className="ml-2 shrink-0"
            color="danger"
            variant="light"
            onClick={() => onRemove(post.id)}
          >
            Remove
          </Button>
        </div>
        <p className="text-gray-600 line-clamp-3 text-sm">{post.body}</p>
        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
          <span>Post ID: {post.id}</span>
          <span>User ID: {post.userId}</span>
        </div>
      </div>
    </Card>
  );
}
