import "./App.css"
import Feeds from "./components/feeds"
import Header from "./components/header"
import NavBar from "./components/navbar"
import { threads } from "./dummy/dummy"

function App() {
  return (
    <div className="App relative">
      <Header />
      <Feeds threads={threads} />
      <NavBar />
    </div>
  )
}

export default App
