import { useEffect, useState } from "react"
import { Thread } from "../types/model"

const BlogPost = (props: { posts: Array<Thread> }) => {
  return props.posts.length > 0 ? (
    <>
      <h1 className="mb-4 mt-4 text-lg font-bold">POSTS</h1>
      {props.posts.map((thread, id) => {
        return (
          <div
            key={id}
            className="mb-4 animate-fade-in-down border-2 p-2 py-4 hover:cursor-pointer"
          >
            {thread.title}
          </div>
        )
      })}
    </>
  ) : (
    <></>
  )
}

export default BlogPost
