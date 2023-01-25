import ThreadComponent from "./thread"
import { feedProps } from "../types/component"

export default function Feeds({ threads }: feedProps) {
  // const [threads, setThreads] = useState<Array<Thread>>([])

  // useEffect(() => {
  //   fetchThread()
  // }, [])

  // const fetchThread = async () => {
  //   try {
  //     const res = await axios.get(`${APIBaseURL}/threads`)
  //     console.log(res)
  //     console.log(res.data)
  //     setThreads(res.data)
  //   } catch (err) {
  //     console.log("fetch thread error. err: ", err)
  //   }
  // }

  return (
    <>
      {threads.map((val, id) => {
        return <ThreadComponent key={id} thread={val} />
      })}
    </>
  )
}
