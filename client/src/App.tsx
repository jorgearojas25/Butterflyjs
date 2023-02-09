import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import Form from "./pages/Form/Form"
import ThankYou from "./pages/ThankYou/ThankYou"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/mood/:id", element: <Form /> },
  { path: "/thanks", element: <ThankYou /> },
])

function App() {
  React.useEffect(() => {
    const sayHello = async () => {
      const response = await fetch("/api/company")
      const body = await response.json()
      console.log(body)
    }
    sayHello()
  }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
