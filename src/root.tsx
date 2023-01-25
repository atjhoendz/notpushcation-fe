import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "./styles/root.css"
import Header from "./components/header"
import NavBar from "./components/navbar"
import { useEffect } from "react"
import { injectStyle } from "react-toastify/dist/inject-style"

const Root = () => {
  useEffect(() => {
    injectStyle()
    // runOnesignal()
  }, [])

  return (
    <div className="App relative">
      <Header />
      <div className="Content overflow-y-auto">
        <Outlet />
      </div>
      <NavBar />
      {/* TODO: fix this toast */}
      <ToastContainer limit={1} />
    </div>
  )
}

export default Root
