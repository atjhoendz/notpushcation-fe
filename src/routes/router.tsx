import { createBrowserRouter } from "react-router-dom"
import Feeds from "../components/feeds"
import ThreadComponent from "../components/thread"
import { threads } from "../dummy/dummy"
import { DetailThread, loader as ThreadLoader } from "./detailThread"
import ErrorPage from "./errorPage"
import Root from "../root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Feeds threads={threads} />,
      },
      {
        path: "/thread/:threadID",
        element: <DetailThread />,
        loader: ThreadLoader,
      },
    ],
  },
])

export default router
