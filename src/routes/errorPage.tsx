import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <div className="App flex flex-col justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured</p>
    </div>
  )
}

export default ErrorPage