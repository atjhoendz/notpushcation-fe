import React from "react"
import { feedProps, feedState } from "../types/component"
import ThreadComponent from "./thread"

class Feeds extends React.Component<feedProps, feedState> {
  state: Readonly<feedState> = {
    threads: this.props.threads,
  }

  render() {
    return (
      <div className="Feed overflow-y-auto">
        {this.state.threads.map((val, id) => {
          return <ThreadComponent key={id} thread={val} />
        })}
      </div>
    )
  }
}

export default Feeds
