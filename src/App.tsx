import "./App.css"
import Feeds from "./components/feeds"
import Header from "./components/header"
import NavBar from "./components/navbar"
import { threads } from "./dummy/dummy"
import { ToastContainer } from "react-toastify"
import { injectStyle } from "react-toastify/dist/inject-style"

function App() {
  injectStyle()
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
