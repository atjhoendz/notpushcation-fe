import { useLoaderData } from "react-router-dom"
import { threads } from "../dummy/dummy"
import { Thread } from "../types/model"
import communityLogo from "../assets/community-logo.svg"
import { useEffect, useState } from "react"
import { APIBaseURL } from "../config/config"
import BlogPost from "../components/blogPost"

const loader = ({ params }: any) => {
  return getThread(Number(params.threadID) - 1)
}

const getThread = (threadID: number): Thread => {
  return threads[threadID]
}

let sse: EventSource

const DetailThread = () => {
  const thread = useLoaderData() as Thread
  const [posts, setPosts] = useState<Array<Thread>>([])

  useEffect(() => {
    sse = new EventSource(
      `${APIBaseURL}/sse?stream=live-blog-post-thread-id-${thread.id}`
    )
    sse.onopen = (e) => {
      console.info("sse open")
    }

    sse.onerror = (e) => {
      console.error("sse error")
    }

    return () => {
      sse.close()

      let state: string
      switch (sse.readyState) {
        case 1:
          state = "open"
          break
        case 2:
          state = "closed"
          break
        default:
          state = "connecting"
          break
      }

      console.log(`sse state: ${state}`)
    }
  }, [])

  useEffect(() => {
    sse.addEventListener("LIVE_BLOG_POST", (e) => {
      console.info("receive new post")
      const data = JSON.parse(e.data) as Thread

      let newPosts = [...posts, data]
      setPosts(newPosts)
    })
  }, [posts])

  return (
    <div className="w-full border-b-2   leading-5">
      <div className="px-5 py-4">
        <div className="mb-2 flex gap-3">
          <img src={communityLogo} alt="logo" className="h-10" />
          <div className="text-left">
            <div className="text-sm font-semibold">{thread.community.name}</div>
            <div className="text-sm text-gray-500">
              {thread.created_by.username} &middot; {thread.created_at}
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className="mb-1 text-lg font-bold hover:cursor-pointer">
            {thread.title}
          </div>
          <div className="text-justify">{thread.content}</div>
        </div>
        <BlogPost posts={posts} />
      </div>
    </div>
  )
}

export { DetailThread, loader }
