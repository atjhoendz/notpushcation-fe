import { Thread } from "../types/model"
import communityLogo from "../assets/community-logo.svg"
import { toast, ToastContent } from "react-toastify"

const ThreadComponent = (props: { thread: Thread }) => {
  let leadMedia
  if (props.thread.lead_media) {
    leadMedia = (
      <img
        src={props.thread.lead_media}
        alt="lead media"
        className="h-48 w-full object-cover"
      />
    )
  }

  let content = "isi komentar ini sangat panjang sekali"
  let subject = props.thread.created_by.username

  const msg = () => (
    <div className="text-left text-sm text-black">
      <div className="font-bold">{props.thread.title}</div>
      <div>
        <span className="font-bold">{subject ? subject + ": " : ""}</span>"
        {subject.length + content.length > 35
          ? content.substring(0, 35 - subject.length) + "..."
          : content}
        "
      </div>
    </div>
  )

  const notify = () =>
    toast(msg, {
      position: "top-center",
      hideProgressBar: true,
      draggable: true,
      pauseOnHover: true,
    })

  return (
    <div className="Thread w-full border-b-2   leading-5">
      <div className="px-5 py-4">
        <div className="mb-2 flex gap-3">
          <img src={communityLogo} alt="logo" className="h-10" />
          <div className="text-left">
            <div className="text-sm font-semibold">
              {props.thread.community.name}
            </div>
            <div className="text-sm text-gray-500">
              {props.thread.created_by.username} &middot;{" "}
              {props.thread.created_at}
            </div>
          </div>
        </div>
        <div className="text-left" onClick={notify}>
          <div className="mb-1 text-lg font-bold hover:cursor-pointer">
            {props.thread.title}
          </div>
          <div className="text-justify">{props.thread.content}</div>
        </div>
      </div>
      {leadMedia}
    </div>
  )
}

export default ThreadComponent
