import "./App.css"
import Feeds from "./components/feeds"
import Header from "./components/header"
import NavBar from "./components/navbar"
import { threads } from "./dummy/dummy"
import { toast, ToastContainer } from "react-toastify"
import { injectStyle } from "react-toastify/dist/inject-style"
import { ReactNode, useEffect, Component } from "react"
import runOnesignal from "./onesignal/onesignal"

function App() {
  useEffect(() => {
    injectStyle()
    runOnesignal()

    document.onvisibilitychange = () => {
      if (document.hidden) {
        console.log("lagi ga buka")
      } else {
        console.log("lagi buka")
      }
    }

    window.addEventListener("online", (e) => {
      console.log("online")
    })

    window.addEventListener("offline", (e) => {
      console.log("offline")
    })

    const sse = new EventSource("https://localhost:9090/sse?stream=thread")

    sse.onopen = (e) => {
      console.log("open")
    }

    sse.onmessage = (e) => {
      console.log("OnMessage called")
      console.log(e)
      console.log(JSON.parse(e.data))
    }

    sse.addEventListener(
      "UPDATE",
      (e) => {
        e.preventDefault()
        console.log("on update event")
        console.log(JSON.parse(e.data))

        let msgData = JSON.parse(e.data)
        toast(
          () => {
            return (
              <div>
                <div>Thread Baru</div>
                <div>{msgData.title}</div>
              </div>
            )
          },
          {
            position: "top-center",
            hideProgressBar: true,
            draggable: true,
            pauseOnHover: true,
          }
        )
      },
      true
    )

    sse.onerror = () => {
      console.log("error sse")
    }

    return () => {
      sse.close()
    }
  }, [])

  return (
    <div className="App relative">
      <Header />
      <Feeds threads={threads} />
      <NavBar />
      <ToastContainer limit={1} />
    </div>
  )
}

export default App
