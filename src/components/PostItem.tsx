/* eslint-disable @next/next/no-img-element */
'use client'

import { ProductHuntPost } from "@/types/producthunt";
import { useState } from "react";
import PostDetails from "./PostDetails";

type Props = {
  post: ProductHuntPost
}

function Post({ post }: Props) {
  const [postOpened, setPostOpened] = useState(false)

  return (
    <>
      <div className="py-4 my-4 group relative cursor-pointer" tabIndex={0} onClick={() => setPostOpened(true)}>
        <div className="block absolute w-full h-full top-0 left-0 bg-gradient-to-r from-white to-orange-200 rounded opacity-0 group-hover:opacity-100 transition-all" aria-hidden="true"></div>
        <div className="relative flex items-center">
          <img className="w-12 rounded" src={post.thumbnail.url} alt={post.name} />
          <div className=" ml-4">
            <h2 className="font-medium">{post.name} &mdash; {post.tagline}</h2>
            <div className="text-gray-600 text-sm mt-1">
              {post.topics.nodes.map((topic) => (
                <span key={topic.name} className="mr-2">#{topic.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {postOpened && <PostDetails id={post.id} onClose={() => setPostOpened(false)} />}
    </>
  );
}

export default Post;